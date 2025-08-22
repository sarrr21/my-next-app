import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next";
import FooterSection from "@/components/footer1";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Gallery | TLGEF",
  description: "Learn more about the Tausi Likokola Global Empowerment Foundation (TLGEF).",
};

export default function Gallery() {
  const galleryImages = [
    {
      src: "/images/image1.png",
      alt: "Minimalist architecture",
      className: "row-span-3",
    },
    {
      src: "/images/image10.jpg",
      alt: "Ferris wheel",
      className: "row-span-2",
    },
    {
      src: "/images/image14.jpg",
      alt: "Beach sunset",
      className: "row-span-2",
    },
    {
      src: "/images/image4.png",
      alt: "Greek architecture",
      className: "row-span-2",
    },
    {
      src: "/images/image12.jpg",
      alt: "Modern stairs",
      className: "row-span-2",
    },
    {
      src: "/images/image6.png",
      alt: "Botanical drinks",
      className: "row-span-1",
    },
    {
      src: "/images/image7.jpg",
      alt: "Tropical scene",
      className: "row-span-2",
    },
    {
      src: "/images/image8.jpg",
      alt: "Colorful portrait",
      className: "row-span-2",
    },
    {
      src: "/images/image9.jpg",
      alt: "Dried flowers",
      className: "row-span-1",
    },
    {
      src: "/images/image5.png",
      alt: "Greek architecture",
      className: "row-span-2",
    },
    {
      src: "/images/image2.png",
      alt: "Modern stairs",
      className: "row-span-2",
    },
    {
      src: "/images/image3.png",
      alt: "Botanical drinks",
      className: "row-span-1",
    },
  ]

  return (
    <>
    <Navbar />
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
        <Badge variant="secondary" className="mb-6  bg-orange-600 hover:bg-orange-700 text-sm font-medium">
            Global Empowerment Foundation
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Tausi Likokola Global Empowerment Foundation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-sans">
            "Alone, one can only do so much — but together, we can do so much more." Unity multiplies impact.
          </p>
         
        </div>
      </section>
    <main className="min-h-screen bg-background">
      {/* Header */}
      

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden  bg-muted hover:shadow-lg transition-all duration-300 cursor-pointer ${image.className}`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </main>
    <FooterSection />
    </>
  )
}
