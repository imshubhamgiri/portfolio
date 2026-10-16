"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { ArrowDown, CornerDownRight } from "lucide-react";

export const WelcomeSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="welcome"
      aria-label="Welcome section"
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-8 py-16 text-neutral-100 overflow-hidden"
    >
      {/* Background Star Sparkles matching reference video */}
      <SparkleDecor
        color="lime"
        className="absolute top-20 left-8 sm:left-16 w-6 h-6 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute top-32 right-12 sm:right-24 w-8 h-8 opacity-80"
      />
      <SparkleDecor
        color="lime"
        className="absolute bottom-20 left-12 sm:left-24 w-7 h-7 opacity-75"
      />
      <SparkleDecor
        color="amber"
        className="absolute bottom-28 right-16 sm:right-32 w-5 h-5 animate-pulse"
      />

      <div className="z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Clean Reverted/Mirrored Meme Image (Tom Welcoming) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1"
        >
          <div className="relative group max-w-md sm:max-w-lg w-full flex justify-center">
            {/* Subtle ambient glow behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#bef264]/15 via-transparent to-neutral-800/20 blur-xl opacity-60" />
            <Image
              src="/assets/memes/01-intro/e8b3314afc31cd5124106e0d25cf5dbc.jpg"
              alt="Tom holding door open welcoming visitors inside"
              width={554}
              height={390}
              priority
              sizes="(max-width: 768px) 100vw, 550px"
              className="relative -scale-x-100 rounded-2xl shadow-2xl border border-neutral-800/80 w-full h-auto object-cover transition-transform duration-300 "
            />
          </div>
        </motion.div>

        {/* Right Column: Welcoming Invitation & Dialogue Display */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col space-y-6 text-left order-1 lg:order-2"
        >
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            Welcome to my <br />
            <span className="text-[#bef264]">little corner</span> of the internet.
          </h1>

          {/* Dialogue & Caption Display Area */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl flex flex-col space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#bef264]">
              <CornerDownRight className="w-4 h-4 text-[#bef264]" />
              <span className="font-semibold uppercase tracking-wider">Tom&apos;s Greeting</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-white italic">
              &ldquo;Come on in! Portfolio this way -&gt;&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Step right through the door. No corporate buzzwords, just good engineering, chill vibes, and memes.
            </p>
          </div>

          {/* CTA / Scroll Indicator Button */}
          <div className="pt-1 flex items-center gap-4">
            <a
              href="#intro"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20"
            >
              <span>Follow the Cat</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              [Scroll down to enter intro]
            </span>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
