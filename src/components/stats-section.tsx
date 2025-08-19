import { Button } from "@/components/ui/button"
import { ArrowRight, Puzzle, Lightbulb, Heart, } from "lucide-react"
import { Badge } from "./ui/badge"

export default function HomePage() {
  return (
    <div className=" bg-gray-50 py-8 sm:py-12 lg:py-16 px-2 sm:px-4 lg:px-6">
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
                alt="Professional portrait of Tausi Likokola, founder, in red business suit"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] rounded-lg shadow-lg object-contain bg-gray-100"
              />
            </div>
          <a href="/about"> 
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium bg-transparent text-sm sm:text-base"
            >
              ABOUT MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8 lg:pt-16">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                The Tausi Likokola Global Empowerment Foundation (TLGEF) is a nonprofit organization corporated in the
                State of Georgia, United States, with a global mission focused especially on East Africa and Tanzania.
                Founded by internationally recognized author, former fashion model, and human rights advocate Tausi
                Likokola, the foundation aims to make a lasting impact on vulnerable populations through education,
                health support, legal
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To empower vulnerable communities globally in the US and Africa especially in Tanzania and East Africa through education,
                healthcare access, legal advocacy, and sustainable development. We seek to uplift women and girls by
                providing sanitary products, mentorship, workshops, and legal resources while amplifying human rights
                and social
              </p>
            </div>
            <section className="py-20 px-4">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-foreground">Meet Our Founder</h2>
              <h3 className="font-serif text-2xl font-semibold text-orange-600">Tausi Likokola</h3>
              <div className="flex flex-wrap gap-2 mb-4 ">
                <Badge variant="secondary" className="bg-orange-600 hover:bg-orange-700">Author</Badge>
                <Badge variant="secondary" className="bg-orange-600 hover:bg-orange-700">Former Fashion Model</Badge>
                <Badge variant="secondary" className="bg-orange-600 hover:bg-orange-700">Entrepreneur</Badge>
                <Badge variant="secondary" className="bg-orange-600 hover:bg-orange-700">Humanitarian</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tausi Likokola is an internationally respected author, mentor, human rights advocate, and former
                international fashion model. She has been recognized for her extensive humanitarian work, including
                co-founding The Tausi AIDS Fund (TAF) and contributing to numerous charitable causes throughout Africa,
                Europe, and the United States.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Her work has inspired thousands to rise beyond their circumstances through faith, education,
                empowerment, and compassion.
              </p>
            </div>
            <div>
              <img
                src="/african-woman-leader.png"
                alt="Tausi Likokola, Founder"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>


            </div>
          </div>
        </div>
      </div>
    
  )
}
