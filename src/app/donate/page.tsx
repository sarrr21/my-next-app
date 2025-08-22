"use client";

import { useState, useEffect } from "react";

interface ComingSoonProps {
  launchDate: string; // Example: "2025-09-01T00:00:00"
}

export default function ComingSoon({ launchDate }: ComingSoonProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(launchDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-red-600 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">🚀 Coming Soon</h1>
      <p className="text-lg md:text-xl mb-8">We’re launching something exciting!</p>


    </section>
  );
}
