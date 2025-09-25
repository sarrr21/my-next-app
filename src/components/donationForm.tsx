"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { FaPaypal } from "react-icons/fa";
const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    donateAmount: "",
    customAmount: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Determine the amount
    let amount = '';
    if (formData.donateAmount === "custom") {
      amount = formData.customAmount;
    } else {
      amount = formData.donateAmount;
    }

    // Validate amount
    if (!amount || amount.trim() === '') {
      toast.error("Please select or enter a donation amount.");
      return;
    }

    // Validate custom amount if selected
    if (formData.donateAmount === "custom") {
      const customAmount = parseFloat(formData.customAmount);
      if (isNaN(customAmount) || customAmount <= 0) {
        toast.error("Please enter a valid custom amount (greater than $0).");
        return;
      }
      if (customAmount < 1) {
        toast.error("Minimum donation amount is $1.");
        return;
      }
    }

    // Validate required fields
    if (!formData.fullName || formData.fullName.trim() === '') {
      toast.error("Please enter your full name.");
      return;
    }

    if (!formData.email || formData.email.trim() === '') {
      toast.error("Please enter your email address.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      toast.loading("Creating PayPal order...", {
        description: `Processing donation of $${amount}`,
      });

      // Create PayPal order
      const response = await fetch('/api/paypal/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          currency: 'USD',
          donorName: formData.fullName,
          donorEmail: formData.email,
          donorPhone: formData.phoneNumber,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('PayPal API error:', errorData);
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.orderId && data.approvalUrl) {
        toast.dismiss();
        toast.success("Redirecting to PayPal...", {
          description: `Donation amount: $${amount}`,
        });
        
        // Store form data in sessionStorage for use after PayPal redirect
        sessionStorage.setItem('donationFormData', JSON.stringify({
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          message: formData.message,
          amount: amount
        }));
        
        // Redirect to PayPal for payment
        window.location.href = data.approvalUrl;
      } else {
        throw new Error(data.error || 'Failed to create PayPal order - missing order ID or approval URL');
      }
    } catch (error) {
      toast.dismiss();
      console.error('PayPal order creation error:', error);
      toast.error("Failed to process donation", {
        description: error instanceof Error ? error.message : "Please try again or contact support.",
      });
    }
  };

  return (
    <Card>
      <CardContent>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                placeholder="Type your name here"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="+880 000 000 0000"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">E-mail *</label>
              <Input
                type="email"
                placeholder="yourname@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            {/* Donation Amount */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Donate Amount *
              </label>
              <select
                value={formData.donateAmount}
                onChange={(e) => handleInputChange("donateAmount", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select donation amount</option>
                <option value="25">$25</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="250">$250</option>
                <option value="500">$500</option>
                <option value="custom">Custom Amount</option>
              </select>

              {formData.donateAmount === "custom" && (
                <div className="mt-2">
                  <Input
                    type="number"
                    placeholder="Enter custom amount (minimum $1)"
                    min="1"
                    step="0.01"
                    value={formData.customAmount}
                    onChange={(e) => handleInputChange("customAmount", e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum donation: $1.00
                  </p>
                </div>
              )}

              {formData.donateAmount && formData.donateAmount !== "custom" && (
                <p className="text-sm text-green-600 mt-1">
                  Selected: ${formData.donateAmount}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Type your message here"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm resize-none"
              rows={3}
            />
          </div>
          <p className="text-gray-400 text-sm">
          The Tausi Likokola Global
Empowerment Foundation (TLGEF) is recognized by the IRS as a 501(c)
(3) public charity (EIN:
39-3688816). Contributions are tax-deductible to the fullest extent permitted by law. 🇺🇸
            </p>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#0070BA] hover:bg-[#005EA6] text-white flex items-center justify-center gap-2"
          >
            <FaPaypal className="text-xl" />
            Donate with PayPal
          </Button>


        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;