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
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 pb-10 text-neutral-100 overflow-hidden"
    >
      {/* Background Star Sparkles matching reference video */}
      <SparkleDecor
        color="lime"
        className="absolute top-20 left-6 sm:left-16 w-5 h-5 sm:w-6 sm:h-6 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute top-24 right-8 sm:right-24 w-6 h-6 sm:w-8 sm:h-8 opacity-80"
      />
      <SparkleDecor
        color="lime"
        className="absolute bottom-20 left-8 sm:left-24 w-5 h-5 sm:w-7 sm:h-7 opacity-75"
      />
      <SparkleDecor
        color="amber"
        className="absolute bottom-24 right-10 sm:right-32 w-5 h-5 animate-pulse"
      />

      <div className="z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center my-auto">
        {/* Left Column: Clean Reverted/Mirrored Meme Image (Tom Welcoming) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center items-center order-2 lg:order-1"
        >
          <div className="relative group max-w-[260px] sm:max-w-[340px] lg:max-w-[420px] w-full flex justify-center">
            {/* Subtle ambient glow behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#bef264]/15 via-transparent to-neutral-800/20 blur-xl opacity-60" />
            <Image
              src="/assets/memes/01-intro/e8b3314afc31cd5124106e0d25cf5dbc.jpg"
              alt="Tom holding door open welcoming visitors inside"
              width={554}
              height={390}
              priority
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 420px"
              className="relative -scale-x-100 rounded-2xl shadow-2xl border border-neutral-800/80 w-full max-h-[26vh] sm:max-h-[34vh] lg:max-h-[44vh] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Right Column: Welcoming Invitation & Dialogue Display */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col space-y-3 sm:space-y-4 lg:space-y-5 text-left order-1 lg:order-2"
        >
          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.08]">
            Welcome to my <br />
            <span className="text-[#bef264]">weird little corner</span> of the internet.
          </h1>

          {/* Dialogue & Caption Display Area */}
          <div className="p-3.5 sm:p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl flex flex-col space-y-2 sm:space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#bef264]">
              <CornerDownRight className="w-4 h-4 text-[#bef264]" />
              <span className="font-semibold uppercase tracking-wider">Tom&apos;s Greeting</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-white italic">
              &ldquo;Come on in! Don&apos;t worry, the server hasn&apos;t crashed (yet).&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              I write code, break databases, and pretend I know what I&apos;m doing until it somehow compiles. Zero corporate talk here, just chill vibes, projects, and memes.
            </p>
          </div>

          {/* CTA / Scroll Indicator Button */}
          <div className="pt-0.5 flex items-center gap-3">
            <a
              href="#intro"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20"
            >
              <span>Follow the Cat</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              [Scroll down to meet the dev]
            </span>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom scroll cue */}
      <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
