"use client";

import { useState, ChangeEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        toast.success("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Error sending message ❌");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again ❌");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 px-4 sm:px-6 max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
      <div className="flex gap-2 items-center">
        <h2 className="text-gray-500 mb-6 text-sm sm:text-base">CONTACT US</h2>
        <div className="border-b w-16 sm:w-20 mb-6 border-orange-500" />
      </div>
      <p className="text-2xl sm:text-3xl font-bold mb-10">GET IN TOUCH</p>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-gray-100 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
            We'd love to hear from you. Whether you have a question, feedback,
            or a project in mind, reach out and we’ll get back to you shortly.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base">
                  225 Market Place Connector #1226
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Peachtree City, GA 30269
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                770-744-4419
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base break-words">
                info@tausilikokolaglobalempowermentfoundation.org
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 md:p-10 space-y-6 bg-white"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm sm:text-base"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-2 sm:py-3 rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm sm:text-base"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
