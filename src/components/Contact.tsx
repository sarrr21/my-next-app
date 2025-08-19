// app/contact/page.tsx (Next.js 13+ App Router)
// or pages/contact.tsx if using Pages Router

"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // you can add API call here
  };

  return (
    <div className="flex items-center justify-center  bg-gray-50 p-16">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
      <div className=" p-8   grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Facere excepturi, quo eos, nobis doloremque dolor labore.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  34 Street Name, City Name Here,
                </p>
                <p className="text-gray-500">United States</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">+1 (222) 345 6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-gray-800 font-medium">info@mywebsite.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}
