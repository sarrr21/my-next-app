import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      videoSrc: "/videos/video3.mp4",
      profileImage: "/professional-woman-headshot.png",
      name: "Emily Manekshaw",
      title: "COO, Prime Inc.",
    },
    {
      id: 2,
      videoSrc: "/videos/video1.mp4",
      profileImage: "/curly-hair-woman-headshot.png",
      name: "Emily Manekshaw",
      title: "COO, Prime Inc.",
    },
    {
      id: 3,
      videoSrc: "/videos/video2.mp4",
      profileImage: "/smiling-man-headshot.png",
      name: "Emily Manekshaw",
      title: "COO, Prime Inc.",
    },
    {
      id: 4,
      videoSrc: "/videos/video4.mp4",
      profileImage: "/man-headshot.png",
      name: "Heath Badger",
      title: "CEO, Insinious Inc.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-orange-400 font-semibold tracking-wider text-sm uppercase">
              Testimonials
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People <span className="text-gradient">Say</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Together, we hold the power to reshape the world, one compassionate act at a time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              {/* Video Card */}
              <div className="relative rounded-2xl overflow-hidden w-full shadow-2xl  ">
              <div className="relative w-full pb-[133%]"> {/* 4:3 ratio => 3/4 = 0.75 => 75% */}
  <ReactPlayer
    src={testimonial.videoSrc}
    width="100%"
    height="100%"
    controls
    playing={false}
    className="absolute top-0 left-0 rounded-2xl"
  />
</div>
              </div>

              
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6 text-lg">
            Ready to share your story?
          </p>
          <Link href="/contact">
          <button className="btn-primary">Share Your Experience</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
