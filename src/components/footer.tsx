import { Facebook, Twitter, Instagram, Youtube, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
           <img src="/images/Logo1.PNG" className="w-8 h-8"/>
            <h3 className="text-2xl font-serif font-bold mb-4 mt-2">Unity multiplies impact.</h3>
            <p className="text-gray-400 mb-6 leading-relaxed font-sans">
            A world where every woman, child, and underserved community has access to education, healthcare, legal support,
             and the tools to rise above poverty and injustice — empowering them to live with dignity & freedom

            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-sans font-semibold">CONTACT US</Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-sans">
                  Supporting Families
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-sans">
                Global Awareness 
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-sans">
                  Academics Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-sans">
                Human Rights Protection

                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-sans">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-sans">
                  OUr Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors font-sans">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <span className="text-gray-400 font-sans">+251 901099926</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <span className="text-gray-400 font-sans">+251 994265067</span>
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

     
    </footer>
  )
}
