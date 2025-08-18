import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CausesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Our Causes Section */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-red-500 text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
              Our Programs
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Our Latest Causes
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Together, we hold the power to reshape the world, one compassionate act at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Education & Literacy Advancement */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/classroom-study.png"
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
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Raised: $42,368</span>
                    <span className="text-gray-600">Goal: $50,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  DONATE NOW
                </Button>
              </div>
            </div>

            {/* Women's Health & Sanitation */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/hygiene-workshop.png"
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
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Raised: $58,012</span>
                    <span className="text-gray-600">Goal: $65,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "89%" }}></div>
                  </div>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  DONATE NOW
                </Button>
              </div>
            </div>

            {/* Legal Advocacy & Human Rights */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/legal-aid-workshop.png"
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
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Raised: $27,984</span>
                    <span className="text-gray-600">Goal: $35,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 text-white font-medium py-2.5 sm:py-3 text-sm sm:text-base rounded-lg transition-all duration-300">
                  DONATE NOW
                </Button>
              </div>
            </div>

            {/* Workshops & Mentorship Programs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/entrepreneurship-workshop.png"
                  alt="Entrepreneurship workshop"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Workshops & Mentorship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Unleash the potential through entrepreneurship, leadership, and business skill development programs...
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Raised: $28,349</span>
                    <span className="text-gray-600">Goal: $30,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "94%" }}></div>
                  </div>
                </div>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                  DONATE NOW
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Link href="/programs">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30">
                View More Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
