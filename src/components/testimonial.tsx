"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      videoSrc: "/videos/vd2.mp4",
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
      videoSrc: "/videos/vd3.mp4",
      profileImage: "/man-headshot.png",
      name: "Heath Badger",
      title: "CEO, Insinious Inc.",
    },
  ];

  const [videoErrors, setVideoErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleVideoError = (testimonialId: number) => {
    setVideoErrors((prev) => ({ ...prev, [testimonialId]: true }));
  };

  const handleVideoLoad = (testimonialId: number) => {
    setVideoErrors((prev) => ({ ...prev, [testimonialId]: false }));
  };

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
            Together, we hold the power to reshape the world, one compassionate
            act at a time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              {/* Video Card */}
              <div className="relative rounded-2xl overflow-hidden w-full shadow-2xl bg-black">
                {videoErrors[testimonial.id] ? (
                  // Fallback when video fails to load
                  <div className="flex items-center justify-center h-full min-h-[200px] text-white text-center p-4 bg-gray-800 rounded-2xl">
                    <div>
                      <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-sm mb-2 font-medium">
                        Video Unavailable
                      </p>
                      <p className="text-xs text-gray-400 mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                ) : (
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-auto rounded-2xl"
                    playsInline
                    muted
                    style={{ aspectRatio: "3/4" }}
                    onError={() => handleVideoError(testimonial.id)}
                    onLoadedData={() => handleVideoLoad(testimonial.id)}
                    onCanPlay={() => handleVideoLoad(testimonial.id)}
                  >
                    <source src={testimonial.videoSrc} type="video/mp4" />
                    <source
                      src={testimonial.videoSrc.replace(".mp4", ".webm")}
                      type="video/webm"
                    />
                    <source
                      src={testimonial.videoSrc.replace(".mp4", ".ogg")}
                      type="video/ogg"
                    />
                    <track kind="captions" src="" label="English" />
                    <p className="text-white text-center p-4">
                      Your browser does not support the video tag.
                    </p>
                  </video>
                )}
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
