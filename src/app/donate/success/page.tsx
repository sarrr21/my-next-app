"use client";

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer1";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Loader2, AlertCircle, ArrowLeft, Heart } from 'lucide-react';
import { toast } from 'sonner';

interface DonationDetails {
  transactionId: string;
  amount: string;
  currency: string;
  payerEmail: string;
  payerName: string;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  message: string;
  amount: string;
}

export default function DonationSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [donationDetails, setDonationDetails] = useState<DonationDetails | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<FormData | null>(null);

  const token = searchParams.get('token');
  const payerId = searchParams.get('PayerID');

  useEffect(() => {
    // Get form data from sessionStorage
    const storedFormData = sessionStorage.getItem('donationFormData');
    if (storedFormData) {
      try {
        setFormData(JSON.parse(storedFormData));
      } catch (error) {
        console.error('Failed to parse stored form data:', error);
      }
    }
  }, []); // Only run once on mount

  useEffect(() => {
    const captureOrder = async () => {
      if (!token) {
        setStatus('error');
        setErrorMessage('No payment token found. Please try again.');
        return;
      }

      try {
        toast.loading("Processing your donation...", {
          description: "Please wait while we confirm your payment",
        });

        const response = await fetch('/api/paypal/capture-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderId: token }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // Debug: Log the response data
          console.log('Donation capture response:', data);
          
          setDonationDetails({
            transactionId: data.transactionId || 'N/A',
            amount: data.amount || '0',
            currency: data.currency || 'USD',
            payerEmail: data.payerEmail || 'N/A',
            payerName: data.payerName || 'Anonymous',
          });
          setStatus('success');
          toast.dismiss();
          toast.success("Donation successful!", {
            description: `Thank you for your generous donation of $${data.amount || '0'}`,
          });

          // Send notification email to charity owners
          const currentFormData = formData || JSON.parse(sessionStorage.getItem('donationFormData') || '{}');
          if (currentFormData && currentFormData.fullName) {
            try {
              await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  type: 'donation',
                  name: currentFormData.fullName,
                  email: currentFormData.email,
                  message: currentFormData.message || 'Thank you for your generous donation!',
                  amount: data.amount,
                  currency: data.currency,
                  transactionId: data.transactionId,
                  phone: currentFormData.phoneNumber,
                }),
              });
              console.log('Donation notification email sent successfully');
            } catch (emailError) {
              console.error('Failed to send notification email:', emailError);
              // Don't fail the donation if email fails
            }
          }

          // Clear the stored form data
          sessionStorage.removeItem('donationFormData');
        } else {
          throw new Error(data.error || 'Failed to process donation');
        }
      } catch (error) {
        console.error('Donation capture error:', error);
        setStatus('error');
        setErrorMessage(
          error instanceof Error 
            ? error.message 
            : 'Failed to process your donation. Please contact support.'
        );
        toast.dismiss();
        toast.error("Donation processing failed", {
          description: "Please contact support if the issue persists",
        });
      }
    };

    captureOrder();
  }, [token]); // Only depend on token, not formData

  const handleReturnHome = () => {
    router.push('/');
  };

  const handleMakeAnotherDonation = () => {
    router.push('/donate');
  };

  if (status === 'loading') {
    return (
      <div>
        <Navbar />
        
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Loader2 className="h-20 w-20 text-blue-600 animate-spin mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Processing Your Donation
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Please wait while we confirm your payment with PayPal...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <FooterSection />
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div>
        <Navbar />
        
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
          <div className="max-w-2xl mx-auto px-4">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <AlertCircle className="h-20 w-20 text-red-600 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Donation Processing Failed
                  </h1>
                  <p className="text-gray-600 text-lg">
                    {errorMessage}
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">What happened?</h3>
                  <p className="text-gray-600 text-sm">
                    There was an issue processing your donation. This could be due to a network 
                    issue or a problem with the payment system. No charges have been made.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600">
                    Please try again or contact our support team if the problem persists.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <Button 
                    onClick={handleMakeAnotherDonation}
                    className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                  >
                    <Heart className="h-4 w-4" />
                    Try Again
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleReturnHome}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Return to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <FooterSection />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Donation Successful!
                </h1>
                <p className="text-gray-600 text-lg">
                  Thank you for your generous contribution
                </p>
              </div>

              {donationDetails && (
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Donation Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-medium">
                        ${donationDetails.amount} {donationDetails.currency}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-mono text-xs">
                        {donationDetails.transactionId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Donor:</span>
                      <span className="font-medium">
                        {donationDetails.payerName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">
                        {donationDetails.payerEmail}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-gray-600">
                  Your donation has been successfully processed and will help us continue our mission. 
                  You will receive a confirmation email shortly.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <Button 
                  onClick={handleMakeAnotherDonation}
                  className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Make Another Donation
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleReturnHome}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Return to Home
                </Button>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Questions about your donation? Contact us at{' '}
                  <a 
                    href="mailto:support@yourcharity.org" 
                    className="text-blue-600 hover:underline"
                  >
                    support@yourcharity.org
                  </a>
                </p>
              </div>

              {/* Debug information in development */}
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Debug Info (Development Only)</h4>
                  <pre className="text-xs text-gray-600 overflow-auto">
                    {JSON.stringify(donationDetails, null, 2)}
                  </pre>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}