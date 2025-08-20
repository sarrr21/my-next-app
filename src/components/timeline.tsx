import { Lightbulb, Target, Mountain } from "lucide-react";

export default function TimelineSection() {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className=" flex gap-2 ">
            <p className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-2">
              ABOUT
            </p>
            <div className="w-16 h-0.5 bg-orange-400 mt-2"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            OUR TIMELINE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images Section */}
          {/* Images Section */}
          <div className="relative">
            {/* Main image: fluid with native aspect ratio */}
            <div className="relative overflow-hidden  shadow-lg aspect-video">
              <img
                src="/images/image2.png"
                alt="Community members celebrating with traditional clothing"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* White-framed center image (SECOND IMAGE) — hidden on small screens */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-10 lg:-bottom-12 z-10">
              <div className="bg-white p-2 lg:p-3  shadow-xl w-screen max-w-md lg:max-w-lg">
                <div className="overflow-hidden rounded-none aspect-video">
                  <img
                    src="/images/image6.png"
                    alt="Farmers working together in fields"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Spacer so content below isn't overlapped (only needed when overlay exists) */}
            <div className="hidden md:block h-24 lg:h-28" />
          </div>

          {/* Timeline Content */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange-200"></div>

            <div className="space-y-10">
              {/* How We Started */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    How We Started
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                  Our journey began with a simple but powerful vision: to empower communities 
                  through innovative and sustainable solutions. What started as a small initiative 
                  driven by passion and commitment has grown into an organization dedicated to addressing 
                  real-world challenges while promoting inclusivity and development.
                  </p>
                </div>
              </div>

              {/* Where We Are */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    Where We Are
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                  Today, we stand as a trusted nonprofit group with a clear mission and structured leadership.
                   With a diverse board and a growing network of partners, we actively engage in programs that align with the United Nations Sustainable Development Goals.
                   Our work is rooted in transparency, accountability, and measurable impact across the communities we serve.
                  </p>
                </div>
              </div>

              {/* Where We Aspire To Be */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                  <Mountain className="w-6 h-6 text-white" />
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    Where We Aspire To Be
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                  Looking ahead, we aim to expand our reach, strengthen our partnerships, and 
                  create scalable solutions that bring lasting change. Our aspiration is to become a leading 
                  force for innovation in development, bridging gaps and building opportunities that improve lives
                   on both a local and global scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
