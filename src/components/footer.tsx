import { Facebook, Twitter, Instagram, Youtube, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/Logo1.PNG" className="w-12 h-12 object-contain"/>
              <h3 className="text-2xl font-bold text-gradient">Unity multiplies impact.</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-base">
              A world where every woman, child, and underserved community has access to education, healthcare, legal support,
              and the tools to rise above poverty and injustice — empowering them to live with dignity & freedom
            </p>
            <Button className="btn-primary">
              CONTACT US
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Supporting Families
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Global Awareness 
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Academics Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Human Rights Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Useful Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Our Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-4 mr-2"></span>
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-orange-500/20 p-2 rounded-full group-hover:bg-orange-500 transition-all duration-300">
                  <Phone size={18} className="text-orange-400 group-hover:text-white" />
                </div>
                <span className="text-gray-300 font-medium">+251 901099926</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-orange-500/20 p-2 rounded-full group-hover:bg-orange-500 transition-all duration-300">
                  <Mail size={18} className="text-orange-400 group-hover:text-white" />
                </div>
                <span className="text-gray-300 font-medium">+251 994265067</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Facebook size={20} className="text-gray-300 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Twitter size={20} className="text-gray-300 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Instagram size={20} className="text-gray-300 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Youtube size={20} className="text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TLGEF. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
