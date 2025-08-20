import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import FooterSection from "@/components/footer1"

export default function Program() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6  bg-orange-600 hover:bg-orange-700 text-sm font-medium">
            Global Empowerment Foundation
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Tausi Likokola Global Empowerment Foundation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-sans">
            "Alone, one can only do so much — but together, we can do so much more." Unity multiplies impact.
          </p>
         
        </div>
      </section>



      {/* Our Causes Section */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
         
        <div className="flex gap-2 ">
        <h2 className="text-gray-500 ">PROGRAM</h2>
        <div className="border-b w-20 mb-2 border-orange-500" />
        </div>
        <p className=" text-3xl font-bold mb-4 mt-4">OUR PROGRAMS</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Education & Literacy Advancement */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/images/image6.png"
                  alt="Children studying in classroom"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  Education & Literacy Advancement
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Support our mission to provide scholarship programs for underprivileged children and distribute
                  educational resources...
                </p>
              
                <Button className="w-full bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  DONATE NOW
                </Button>
              </div>
            </div>

            {/* Women's Health & Sanitation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/images/image7.jpg"
                  alt="Women in health education workshop"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  Women's Health & Sanitation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Join us in providing sanitary pads to girls in need and conducting health education workshops...
                </p>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-green-500/30 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  DONATE NOW
                </Button>
              </div>
            </div>

            {/* Legal Advocacy & Human Rights */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/images/image9.jpg"
                  alt="Legal aid workshop"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                  Legal Advocacy & Human Rights
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Witness the incredible journey of providing legal aid workshops for women and vulnerable
                  populations...
                </p>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-blue-500/30 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  DONATE NOW
                </Button>
              </div>
            </div>

            {/* Workshops & Mentorship Programs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/images/image8.jpg"
                  alt="Entrepreneurship workshop"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Workshops & Mentorship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unleash the potential through entrepreneurship, leadership, and business skill development programs...
                </p>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                  DONATE NOW
                </Button>
              </div>
            </div>
          </div>

          
        </div>
      </div>


      <FooterSection />
    </div>
  )
}
