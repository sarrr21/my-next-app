// components/Programs.tsx
"use client";

import Image from "next/image";
import { ArrowRight, ArrowRightIcon, Play, Share2 } from "lucide-react";
import { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";

export default function Programs() {
  const [copied, setCopied] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    setVideoStarted(true);
    videoRef.current?.play();
  };

  const shareVideo = async () => {
    const url = `${window.location.origin}/#founder-video`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "The Journey to Tausi Likokola Global Empowerment Foundation", url });
      } catch {}
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="">

    <section className="px-4 py-12 space-y-10 max-w-4xl lg:max-w-6xl xl:max-w-full 2xl:max-w-screen-2xl mx-auto">
      {/* Economic Cooperation */}
      <div className="flex gap-2 ">
        <h2 className="text-gray-500 ">ABOUT</h2>
        <div className="border-b w-20 mb-2 border-orange-500" />
        </div>
        <p className=" text-3xl font-bold">WHO WE ARE</p>
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
              <Link href="/about">
              <button
      className="flex items-center justify-between border border-orange-500 rounded-full px-6 py-2 text-sm font-medium text-gray-800 hover:bg-orange-50 transition-all"
    >
      <span>ABOUT MORE</span>
      <span className="ml-4 flex items-center justify-center bg-orange-500 text-white rounded-full w-8 h-8">
        <ArrowRightIcon size={16} />
      </span>
    </button>
    </Link>
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

      {/* Founder Biography Video */}
      <div id="founder-video" className="max-w-5xl mx-auto space-y-6 scroll-mt-24">
        <div className="text-center space-y-2">
          <p className="text-orange-500 text-xs sm:text-sm font-medium tracking-wider uppercase">
            Her Story
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
            The Journey to Tausi Likokola Global Empowerment Foundation
          </h2>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-black">
          <video
            ref={videoRef}
            src="/videos/tausivideo.mp4"
            controls={videoStarted}
            playsInline
            preload="metadata"
            onPlay={() => setVideoStarted(true)}
            className="w-full aspect-video object-contain"
          >
            Your browser does not support the video tag.
          </video>
          {!videoStarted && (
            <button
              onClick={playVideo}
              aria-label="Play video"
              className="group absolute inset-0 w-full h-full"
            >
              <Image
                src="/images/bioimage.jpeg"
                alt="Tausi Likokola"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500 text-white shadow-lg group-hover:scale-110 transition-transform">
                <Play size={32} className="ml-1" fill="currentColor" />
              </span>
            </button>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={shareVideo}
            className="flex items-center gap-1.5 border border-orange-500 rounded-full px-3 py-1 text-xs font-medium text-gray-800 hover:bg-orange-50 transition-all"
          >
            <Share2 size={12} className="text-orange-500" />
            <span>{copied ? "LINK COPIED!" : "SHARE VIDEO"}</span>
          </button>
        </div>
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
                <h1 className="font-serif text-6xl font-bold text-foreground mb-6">Caring Hearts, <br/>

                <span className="text-orange-600">Sharing Hands</span></h1>
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
                  To empower vulnerable communities globally, USA and Africa especially in Tanzania and East Africa, through education,
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
