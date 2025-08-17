import { Facebook, Twitter, Instagram, Youtube, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold text-orange-600 mb-4">
              I<span className="text-white">4</span>U
            </div>
            <h3 className="text-2xl font-bold mb-4">I For You</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We're dedicated to sharing the love of Christ with those in need. Through compassion, we aim to make a
              meaningful impact in lives and communities.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full">CONTACT US</Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Supporting Families
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  I4U Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Academics Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Cash Sharing
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  I4U Fellowship
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  I4U Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Events Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <span className="text-gray-400">+251 901099926</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <span className="text-gray-400">+251 994265067</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-2 rounded-full transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">©2025 I4U Fellowship. Designed by Hanan Software</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
