// components/Programs.tsx
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Programs() {
  return (
    <div className="">

    <section className="px-4 sm:px-6 lg:px-12 py-12 space-y-10 max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
    <div className="flex gap-2 ">
        <h2 className="text-gray-500">ABOUT</h2>
        <div className="border-b w-20 mb-2 border-orange-500" />
        </div>
        <p className=" text-3xl font-bold">WHO WE ARE</p>
      {/* Economic Cooperation */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
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
            <div className="rounded-xl overflow-hidden shadow-lg">
        <Image
  src="/images/founder1.png"
  alt="Economic Cooperation"
  width={1200}
  height={800}
  className="w-full h-80 sm:h-[28rem] lg:h-[46rem] object-cover object-top rounded-lg shadow-lg"
/>
        </div>

        {/* Image */}
       
      </div>

      {/* Education & Skill Development */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/image5.png"
            alt="Education and Skill Development"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every woman, child, and underserved community has access to education, healthcare, legal
                  support, and the tools to rise above poverty and injustice — empowering them to live with dignity &
                  freedom.
                </p>
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower vulnerable communities globally, especially in Tanzania and East Africa, through education,
                  healthcare access, legal advocacy, and sustainable development. We seek to uplift women and girls by
                  providing sanitary products, mentorship, workshops, and legal resources while amplifying human rights
                  and social justice.
                </p>
              </div>
            </div>
        
      </div>
    </section>
    </div>
  );
}
