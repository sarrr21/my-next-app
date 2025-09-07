"use client";

import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer1";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";

const DonationCancel = () => {
  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <XCircle className="h-20 w-20 text-orange-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Donation Cancelled
                </h1>
                <p className="text-gray-600 text-lg">
                  Your donation process was cancelled. No charges have been made.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">What happened?</h3>
                <p className="text-gray-600 text-sm">
                  You chose to cancel the payment process on PayPal. This is completely normal 
                  and no money has been charged to your account.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  If you'd like to make a donation, you can try again anytime. 
                  We appreciate your consideration and support.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <Button 
                  onClick={() => window.location.href = '/donate'}
                  className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = '/'}
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
};

export default DonationCancel;

