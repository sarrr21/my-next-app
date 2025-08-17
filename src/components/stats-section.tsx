import { Button } from "@/components/ui/button"
import { ArrowRight, Puzzle, Lightbulb, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-9/12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-orange-500 text-sm font-medium tracking-wider uppercase">ABOUT US</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
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
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full font-medium bg-transparent"
            >
              ABOUT MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:pt-16">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
              The Tausi Likokola Global Empowerment Foundation (TLGEF) is a nonprofit organization to be incorporated in the State 
              of Georgia, United States, with a global mission focused especially on East Africa and Tanzania. Founded by internationally
             recognized author, former model, and human rights advocate Tausi Likokola, the foundation aims to make a lasting impact on vulnerable 
             populations through education, health support, legal

              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
              To empower vulnerable communities globally especially in Tanzania and East Africa through education, 
              healthcare access, legal advocacy, and sustainable development. We seek to uplift women and girls by 
              providing sanitary products, mentorship, workshops, and legal resources while amplifying human rights and social

                    </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Puzzle className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-gray-900">6</div>
                  <div className="text-gray-600 font-medium">Families We</div>
                  <div className="text-gray-600 font-medium">Helped since 2021</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-gray-900">2K</div>
                  <div className="text-gray-600 font-medium">Total Clothes We</div>
                  <div className="text-gray-600 font-medium">Collected</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-gray-900">10+</div>
                  <div className="text-gray-600 font-medium">Events Organized</div>
                  <div className="text-gray-600 font-medium">this year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
