import { Button } from "@/components/ui/button"

export default function SupportingDreamsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="text-orange-600 text-sm font-semibold mb-4 uppercase tracking-wide">JOIN US</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Supporting Dreams
              <br />
              <span className="text-orange-600">Changing Lives</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Make a meaningful impact by donating essential items for children and families in need. From school
              supplies to hygiene products and clothing, every contribution helps create brighter futures and stronger
              communities.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join our mission to provide hope, support, and opportunities for growth, learning, and transformation in
              the lives of those who need it most.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
              DONATE NOW
            </Button>
          </div>

          {/* Right Content - Image */}
          <div>
            <img
              src="/placeholder-e2shq.png"
              alt="Children with school supplies"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
