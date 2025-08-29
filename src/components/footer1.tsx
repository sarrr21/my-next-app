import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FacebookIcon,
  Instagram,
  Linkedin,
  Twitter,
  TwitterIcon,
  X,
} from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/hand.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-orange-600 mb-8">
              Quick Links
            </h3>
            <nav className="space-y-4">
              {["About Us", "Our Program", "Donate Now", "Contact us"].map(
                (link) => (
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
                )
              )}
            </nav>
          </div>

          {/* Center Content */}
          <div className="space-y-8 lg:px-8">
            <p className="text-gray-200 text-lg leading-relaxed">
              We Are World Wide Organization is a global network committed to
              making a positive impact across communities, cultures, and
              countries.
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-orange-600 tracking-wide">
                CONNECT WITH US:
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: FacebookIcon,
                    bg: "bg-blue-600 hover:bg-blue-700",
                    href: "https://www.facebook.com/share/176NAyHkqB/?mibextid=wwXIfr",
                  },
                  {
                    icon: TwitterIcon,
                    bg: "bg-black hover:bg-gray-800",
                    href: "https://x.com/tlgefoundation?s=11&t=kJNbMnaGSnnx0qJ8CxvNgg",
                  },
                  {
                    icon: Linkedin,
                    bg: "bg-blue-700 hover:bg-blue-800",
                    href: "https://linkedin.com/in/yourprofile",
                  },
                  {
                    icon: Instagram,
                    bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90",
                    href: "https://www.instagram.com/tausilikokolaglobalfoundation?igsh=MXB6YWt5cjJ2bnN1cg%3D%3D&utm_source=qr",
                  },
                ].map(({ icon: Icon, bg, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bg} p-3 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

       {/* Newsletter */}
       <iframe
  src="https://TLGEF.substack.com/embed?background=transparent&hideFooter=true"
  className="w-full h-64 border border-gray-300 rounded-lg bg-transparent"
  frameBorder="0"
  scrolling="no"
></iframe>

        </div>
      </div>
    </footer>
  );
}
