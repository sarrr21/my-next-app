"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/Logo1.PNG" alt="Logo" className="w-14 h-14 object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-gray-900 hover:text-orange-600 px-3 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/program"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Donation
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Button className="btn-primary text-sm px-6 py-2.5">
              DONATE NOW
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-orange-600 p-2 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="/" 
                className="text-gray-900 block px-3 py-3 text-base font-semibold hover:text-orange-600 transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                Home
              </a>
              <a 
                href="/about" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-3 text-base font-semibold transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                About
              </a>
              <a 
                href="/program" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-3 text-base font-semibold transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                Programs
              </a>
              <a 
                href="/gallery" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-3 text-base font-semibold transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                Gallery
              </a>
              
              <a 
                href="#" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-3 text-base font-semibold transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                Donation
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-orange-600 block px-3 py-3 text-base font-semibold transition-colors duration-300 rounded-lg hover:bg-gray-50"
              >
                Contact Us
              </a>
              <div className="px-3 py-3">
                <Button className="btn-primary text-sm w-full">
                  DONATE NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
