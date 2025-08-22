// components/Partners.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const partners: string[] = [
 
  "The SADEC Business Summit",
  
  "The TAF Charity Fund Raiser",
  "The Ludwigshafen Museum",
  "The African Heritage Banquet",
  "The Cancer Society of Heidelberg",
  "The Red Cross",
  "Jangwani High School",
  "United Nations",
  "Pleasure Ridge Park High School",
  "The Iroquois Public Library",
  
  

];

export default function Partners() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-gray-500 font-semibold tracking-wider text-sm uppercase">PARTNER</h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Partners</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We collaborate with organizations worldwide to create lasting positive change in communities.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="card-modern group cursor-pointer border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 flex items-center justify-center text-center min-h-[120px]">
                <p className="text-gray-700 font-medium text-lg leading-relaxed group-hover:text-white transition-all duration-300 ease-out ">
                  {partner}
                </p>
              </CardContent>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -z-10"></div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Interested in partnering with us?
          </p>
          <Link href="/contact">
          <button className="btn-primary">
            Become a Partner
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
