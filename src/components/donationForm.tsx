"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    donateAmount: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Expiry handler
  const handleExpiryChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    let month = "";
    let year = "";

    if (cleaned.length >= 2) {
      month = cleaned.slice(0, 2);
      year = cleaned.slice(2, 4);
    } else {
      month = cleaned;
    }

    if (month.length === 2 && (parseInt(month) < 1 || parseInt(month) > 12)) {
      month = "";
    }

    setFormData((prev) => ({
      ...prev,
      expiryMonth: month,
      expiryYear: year,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.success("Thank you for your donation!", {
      description: "Your generous contribution will make a difference.",
    });

    // Reset form
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      donateAmount: "",
      firstName: "",
      lastName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      message: "",
    });
  };

  return (
    <Card>
      <CardContent >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input
                type="text"
                placeholder="Type your name here"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
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
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <Input
                type="email"
                placeholder="yourname@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            {/* Donation Amount */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Donate Amount
              </label>
              <Select
                value={formData.donateAmount}
                onValueChange={(value) =>
                  handleInputChange("donateAmount", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select amount" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25">$25</SelectItem>
                  <SelectItem value="50">$50</SelectItem>
                  <SelectItem value="100">$100</SelectItem>
                  <SelectItem value="250">$250</SelectItem>
                  <SelectItem value="500">$500</SelectItem>
                  <SelectItem value="custom">Custom Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Credit Card Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Credit Card Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />
              </div>
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Card Number
              </label>
              <Input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) =>
                  handleInputChange("cardNumber", e.target.value)
                }
              />
            </div>

            {/* Expiry + CVV */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">MM/YY</label>
                <Input
                  type="text"
                  placeholder="12/25"
                  value={
                    formData.expiryMonth
                      ? `${formData.expiryMonth}${
                          formData.expiryYear ? "/" + formData.expiryYear : ""
                        }`
                      : ""
                  }
                  onChange={(e) => handleExpiryChange(e.target.value)}
                  maxLength={5}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">CVV</label>
                <Input
                  type="text"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange("cvv", e.target.value)}
                />
              </div>
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

          <Button type="submit" size="lg" className="w-full bg-orange-500">
            Submit Donation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
