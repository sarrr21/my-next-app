import { NextRequest, NextResponse } from 'next/server';
import { capturePayPalOrder } from '@/lib/paypal';

export async function POST(request: NextRequest) {
  try {
    const { orderId } = await request.json();

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    // Capture the PayPal order
    const captureResponse = await capturePayPalOrder(orderId);

    // Debug: Log the full response to see the structure
    console.log('PayPal Capture Response:', JSON.stringify(captureResponse, null, 2));

    if (captureResponse.status === 'COMPLETED') {
      const capture = captureResponse.purchase_units?.[0]?.payments?.captures?.[0];
      
      // Debug: Log the capture object
      console.log('Capture object:', JSON.stringify(capture, null, 2));
      console.log('Payer object:', JSON.stringify(captureResponse.payer, null, 2));
      
      return NextResponse.json({
        success: true,
        transactionId: capture?.id,
        amount: capture?.amount?.value,
        currency: capture?.amount?.currency_code,
        status: captureResponse.status,
        payerEmail: captureResponse.payer?.email_address,
        payerName: captureResponse.payer?.name?.given_name 
          ? `${captureResponse.payer.name.given_name} ${captureResponse.payer.name.surname || ''}`.trim()
          : 'Anonymous',
        // Include debug info in development
        debug: process.env.NODE_ENV === 'development' ? {
          fullResponse: captureResponse,
          capture: capture,
          payer: captureResponse.payer
        } : undefined
      });
    } else {
      console.error('Order capture failed. Status:', captureResponse.status);
      throw new Error(`Order capture failed. Status: ${captureResponse.status}`);
    }
  } catch (error) {
    console.error('PayPal order capture error:', error);
    return NextResponse.json(
      { error: 'Failed to capture PayPal order' },
      { status: 500 }
    );
  }
}
