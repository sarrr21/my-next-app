import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FacebookIcon, Linkedin, Twitter } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('/images/hand.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-600 mb-8">Quick Links</h3>
            <nav className="space-y-4">
              {["About Us", "Our Program", "Donate Now", "Contact us"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center text-gray-200 hover:text-orange-600 transition-colors duration-200 text-lg group"
                >
                  <span className="mr-3 text-orange-600 group-hover:translate-x-1 transition-transform duration-200">
                    {">"}
                  </span>
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Center Content */}
          <div className="space-y-8 lg:px-8">
            <p className="text-gray-200 text-lg leading-relaxed">
              We Are World Wide Organization is a global network committed to making a positive impact across
              communities, cultures, and countries.
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-orange-600 tracking-wide">CONNECT WITH US:</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FacebookIcon, bg: "bg-blue-600 hover:bg-blue-700" },
                  { icon: Twitter, bg: "bg-black hover:bg-gray-800" },

                  { icon: Linkedin, bg: "bg-blue-700 hover:bg-blue-800" },
                ].map(({ icon: Icon, bg }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${bg} p-3 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-600 mb-8">Join The Newsletter</h3>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Your email here..."
                className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-500 h-14 text-lg rounded-lg focus:ring-2 focus:ring-orange-600"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold h-14 text-lg rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
                SUBSCRIBE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
