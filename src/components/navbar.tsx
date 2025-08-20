"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/Logo1.PNG" alt="Logo" className="w-16 h-16 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-sans font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-sans font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-sans font-medium transition-colors"
              >
                Programs
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-sans font-medium transition-colors"
              >
                Gallery
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-sans font-medium">
                Newsletters
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-sans font-medium transition-colors"
              >
                Donation
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-sans font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-sans font-semibold">DONATE NOW</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-orange-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="text-gray-900 block px-3 py-2 text-base font-sans font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-sans font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-sans font-medium">
                Programs
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-sans font-medium">
                Gallery
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-sans font-medium">
                Newsletters
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-sans font-medium">
                Donation
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-sans font-medium">
                Contact Us
              </a>
              <div className="px-3 py-2">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full rounded-full font-sans font-semibold">DONATE NOW</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
