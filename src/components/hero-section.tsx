"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [textVisible, setTextVisible] = useState(false)

  const slides = [
    {
      title: "Alone, one can only do so much — but together",
      subtitle: "we can do so much more.",
      description:
        "Youth Empowerment,  Brightening Childhoods, Strengthening Futures",
      image: "/images/image2.png",
    },
    {
      title: "Caring Hearts",
      subtitle: "Unity multiplies impact",
      description:
        "Building stronger communities through compassion, support, and meaningful connections that last a lifetime",
      image: "/images/image1.png",
    },
    {
      title: "Supporting Dreams",
      subtitle: "Changing Lives",
      description:
        "Empowering the next generation with education, opportunities, and the tools they need to succeed",
      image: "/images/image4.png",
    },
  ]

  useEffect(() => {
    setTextVisible(true)
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTextVisible(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAnimating(false)
        setTextVisible(true)
      }, 600)
    }, 6000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setIsAnimating(true)
    setTextVisible(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsAnimating(false)
      setTextVisible(true)
    }, 600)
  }

  const prevSlide = () => {
    setIsAnimating(true)
    setTextVisible(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsAnimating(false)
      setTextVisible(true)
    }, 600)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image || "/placeholder.svg"}
          alt="Hero background"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isAnimating ? "scale-110 opacity-70" : "scale-100 opacity-90"
          }`}
        />
        {/* Enhanced overlay with gradient - only on desktop, darker overlay */}
        <div className="hidden lg:block absolute inset-0 bg-black/60"></div>
      </div>

      {/* Desktop Content Only */}
      <div className="hidden lg:flex relative z-10 h-full items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-white space-y-10">
              <h1 className="text-6xl font-bold leading-tight">
                <span
                  className={`block transition-all duration-1000 delay-200 ${
                    textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                  }`}
                >
                  {currentSlideData.title}
                </span>
                <span
                  className={`block text-gradient transition-all duration-1000 delay-500 ${
                    textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                  }`}
                >
                  {currentSlideData.subtitle}
                </span>
              </h1>
              <p
                className={`text-xl text-gray-200 max-w-2xl leading-relaxed font-light transition-all duration-1000 delay-700 ${
                  textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {currentSlideData.description}
              </p>
              
              {/* Call to Action Button */}
              <div
                className={`transition-all duration-1000 delay-900 ${
                  textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <Link href="/contact">
                <button className="btn-primary text-lg px-8 py-4">
                  Join Our Mission
                </button>
                </Link>
              </div>
            </div>

            {/* Image preview (desktop side) */}
            <div>
              <div
                className={`relative transition-all duration-1000 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={currentSlideData.image || "/placeholder.svg"}
                    alt="Supporting children"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content - Image focused with text at bottom */}
      <div className="lg:hidden relative z-10 h-full flex flex-col">
        {/* Image takes up most of the space */}
        <div className="flex-1 relative">
          <img
            src={currentSlideData.image || "/placeholder.svg"}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text content at bottom */}
        <div className="bg-white/95 backdrop-blur-sm p-3 space-y-2 ">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            <span className="block mb-2">{currentSlideData.title}</span>
            <span className="block text-gradient">{currentSlideData.subtitle}</span>
          </h1>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {currentSlideData.description}
          </p>
          <Link href="/contact">
          <button className="btn-primary text-base px-6 py-3 w-full md:w-auto">
            Join Our Mission
          </button>
          </Link>
        </div>
      </div>

      {/* Enhanced Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Enhanced Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setTextVisible(true)
            }}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide 
                ? "bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg" 
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
