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
    // API call here
  };

  return (
    <div className="py-20 px-6 max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto ">
       <div className="flex gap-2 ">
        <h2 className="text-gray-500 mb-8">CONTACT US</h2>
        <div className="border-b w-20 mb-10 border-orange-500" />
        </div>
        <p className=" text-3xl font-bold mb-12">GET IN TOUCH</p>
      
      <div className=" bg-white shadow-xl  rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
       
        <div className="bg-gray-100 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We'd love to hear from you. Whether you have a question, feedback,
            or a project in mind, reach out and we’ll get back to you shortly.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">34 Street Name</p>
                <p className="text-sm text-gray-500">City Name, United States</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-800">+1 (222) 345 6789</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-800">tausiusa@mail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form onSubmit={handleSubmit} className="p-10 space-y-6 bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
