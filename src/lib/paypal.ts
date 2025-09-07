// PayPal configuration
const clientId = process.env.PAYPAL_CLIENT_ID!;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;
const environment = process.env.NODE_ENV === 'production' ? 'live' : 'sandbox';

// PayPal API base URLs
const PAYPAL_API_BASE =
  'https://api-m.paypal.com' ;
 

// Get PayPal access token
export async function getPayPalAccessToken(): Promise<string> {
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('PayPal token error response:', errorText);
    throw new Error(`Failed to get PayPal access token: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Create PayPal order
export async function createPayPalOrder(orderData: any): Promise<any> {
  const accessToken = await getPayPalAccessToken();
  
  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'PayPal-Request-Id': `donation_${Date.now()}`,
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('PayPal order creation error response:', errorText);
    throw new Error(`Failed to create PayPal order: ${response.status} ${errorText}`);
  }

  const result = await response.json();
  return result;
}

// Capture PayPal order
export async function capturePayPalOrder(orderId: string): Promise<any> {
  const accessToken = await getPayPalAccessToken();
  
  const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}/capture`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'PayPal-Request-Id': `capture_${Date.now()}`,
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    throw new Error('Failed to capture PayPal order');
  }

  return await response.json();
}
