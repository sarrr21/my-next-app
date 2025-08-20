"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [textVisible, setTextVisible] = useState(false)

  const slides = [
    {
      title: "Alone, one can only do so much — but together",
      subtitle: "we can do so much more.",
      description:
        "Youth Empowerment, Community Enrichment, Brightening Childhoods, Strengthening Futures, Love Support for Every Child",
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
      description: "Empowering the next generation with education, opportunities, and the tools they need to succeed",
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <img
          src={currentSlideData.image || "/placeholder.svg"}
          alt="Hero background"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isAnimating ? "scale-110 opacity-40" : "scale-100 opacity-60"
          }`}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  <span
                    className={`block transition-all duration-1000 delay-200 ${
                      textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                    }`}
                  >
                    {currentSlideData.title}
                  </span>
                  <span
                    className={`block text-orange-400 transition-all duration-1000 delay-500 ${
                      textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                    }`}
                  >
                    {currentSlideData.subtitle}
                  </span>
                </h1>

                <p
                  className={`text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-sans transition-all duration-1000 delay-700 ${
                    textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  {currentSlideData.description}
                </p>
              </div>

              
            </div>

            <div className="hidden lg:block">
              <div
                className={`relative transition-all duration-1000 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={currentSlideData.image || "/placeholder.svg"}
                    alt="Supporting children"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setTextVisible(true)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-400" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
