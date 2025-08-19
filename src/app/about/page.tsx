import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import CausesPage from "@/components/helping-hand-section"
import ReactPlayer from "react-player";

export default function AboutPage() {
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            "Alone, one can only do so much — but together, we can do so much more." Unity multiplies impact.
          </p>
         
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/image5.png"
                alt="Tausi Likokola speaking at community event"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
           
          </div>
        </div>
      </section>

      {/* Core Programs */}
     <CausesPage />
      {/* Founder Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
          </div>
        </div>
      </section>


      {/* Media Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Our Impact in Action</h2>
            <p className="text-xl text-muted-foreground">
              See how we're making a difference in communities around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full  bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ReactPlayer 
        src="/videos/video1.mp4"   // path from public folder
        controls={true}          // show play/pause, volume, fullscreen
        playing={false}          // autoplay if true
        loop={false}             // repeat video if true
        width="100%"             // responsive width
        height="auto"        
              />
              </div>
                 
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif font-semibold mb-2">Health Workshops</h3>
                <p className="text-sm text-muted-foreground">
                Women participating in reproductive health and hygiene education
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src=""
                alt="Women's health workshop"
                className="w-full aspect-video object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-serif font-semibold mb-2">Legal Advocacy</h3>
                <p className="text-sm text-muted-foreground">
                Community legal aid workshops empowering vulnerable populations
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ReactPlayer 
        src="/videos/video2.mp4"   // path from public folder
        controls={true}          // show play/pause, volume, fullscreen
        playing={false}          // autoplay if true
        loop={false}             // repeat video if true
        width="100%"             // responsive width
        height="auto"        
              />
                  </div>
                  
                </div>
              </div>
              <CardContent className="p-4 mt-36">
                <h3 className="font-serif font-semibold mb-2">Education in Tanzania</h3>
                <p className="text-sm text-muted-foreground">
                Documenting our scholarship programs and school supply distributions
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/african-children-classroom.png"
                alt="Children in classroom"
                className="w-full aspect-video object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-serif font-semibold mb-2">School Supplies Distribution</h3>
                <p className="text-sm text-muted-foreground">
                  Providing essential educational materials to underprivileged students
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/african-women-entrepreneurs-workshop.png"
                alt="Entrepreneurship workshop"
                className="w-full aspect-video object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-serif font-semibold mb-2">Entrepreneurship Training</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering women with business skills and leadership development
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Community Impact Video</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif font-semibold mb-2">Community Development</h3>
                <p className="text-sm text-muted-foreground">
                  Showcasing sustainable development projects across East Africa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
      <Footer />
    </div>
  )
}
