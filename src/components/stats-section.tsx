import { Button } from "@/components/ui/button"
import { ArrowRight, Puzzle, Lightbulb, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 lg:py-16 px-2 sm:px-4 lg:px-6">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-orange-500 text-xs sm:text-sm font-medium tracking-wider uppercase">ABOUT US</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Caring Hearts,
                <br />
                Sharing Hands
              </h1>
            </div>

            <div className="relative">
              <img
                src="/images/image5.png"
                alt="Group photo of Caring Hearts volunteers and members standing together"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium bg-transparent text-sm sm:text-base"
            >
              ABOUT MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8 lg:pt-16">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The Tausi Likokola Global Empowerment Foundation (TLGEF) is a nonprofit organization to be incorporated
                in the State of Georgia, United States, with a global mission focused especially on East Africa and
                Tanzania. Founded by internationally recognized author, former model, and human rights advocate Tausi
                Likokola, the foundation aims to make a lasting impact on vulnerable populations through education,
                health support, legal
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To empower vulnerable communities globally especially in Tanzania and East Africa through education,
                healthcare access, legal advocacy, and sustainable development. We seek to uplift women and girls by
                providing sanitary products, mentorship, workshops, and legal resources while amplifying human rights
                and social
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Puzzle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">6</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">Families We</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">Helped since 2021</div>
                </div>
              </div>

              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">2K</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">Total Clothes We</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">Collected</div>
                </div>
              </div>

              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">10+</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">Events Organized</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">this year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
