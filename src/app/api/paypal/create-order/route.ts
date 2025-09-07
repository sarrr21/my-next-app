import { NextRequest, NextResponse } from 'next/server';
import { createPayPalOrder } from '@/lib/paypal';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'USD', donorName, donorEmail } = await request.json();

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Create PayPal order
    const orderRequest = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toString(),
          },
          description: `Donation from ${donorName || 'Anonymous'}`,
          custom_id: `donation_${Date.now()}`,
        },
      ],
      application_context: {
        brand_name: 'Your Charity Organization',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donate/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donate/cancel`,
      },
    };

    const order = await createPayPalOrder(orderRequest);

    if (order.id) {
      return NextResponse.json({
        orderId: order.id,
        approvalUrl: order.links?.find((link: any) => link.rel === 'approve')?.href,
      });
    } else {
      throw new Error('Failed to create PayPal order');
    }
  } catch (error) {
    console.error('PayPal order creation error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create PayPal order',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
