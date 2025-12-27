"use client";

import Image from "next/image";
import { useState } from "react";
import LearnMoreModal from "./LearnMoreModal"

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 -z-10" />

      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="space-y-8">

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            Build Your <span className="text-primary">Digital Future</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're a team of expert developers and designers creating innovative
            software solutions that transform ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90">
              Get Started
            </button>

            <button
              onClick={() => setOpen(true)}
              className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-20">
          <div className="relative group mx-auto aspect-video max-w-5xl rounded-xl border overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Your Software Solutions"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-all">
                Your Software Solutions
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <LearnMoreModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
