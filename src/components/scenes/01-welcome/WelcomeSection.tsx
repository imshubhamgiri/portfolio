"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { ArrowDown, CornerDownRight, Sparkles } from "lucide-react";

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
        {/* Left Column: Reverted/Mirrored Meme Image (Tom Welcoming) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 flex justify-center order-2 lg:order-1"
        >
          <figure className="relative w-full max-w-md sm:max-w-lg overflow-hidden rounded-2xl border-2 border-neutral-700 bg-neutral-900 shadow-2xl group">
            {/* Retro Window Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 bg-[#161618] px-4 py-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 font-semibold text-neutral-300">TOM_WELCOME.JPG</span>
              </div>
              <span className="text-[10px] text-[#bef264] font-bold">THIS WAY -&gt;</span>
            </div>

            {/* Reverted Image: Mirrored horizontally so Tom welcomes to the right */}
            <div className="relative aspect-[16/10] w-full bg-black -scale-x-100 overflow-hidden">
              <Image
                src="/assets/memes/01-intro/e8b3314afc31cd5124106e0d25cf5dbc.jpg"
                alt="Tom holding door open welcoming visitors inside"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Caption */}
            <figcaption className="border-t border-neutral-800 bg-[#161618] px-4 py-2.5 text-center font-mono text-xs text-neutral-300">
              &ldquo;Come on in! Portfolio this way -&gt;&rdquo;
            </figcaption>
          </figure>
        </motion.div>

        {/* Right Column: Welcoming Invitation Text */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col space-y-5 text-left order-1 lg:order-2"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bef264]/10 border border-[#bef264]/30 text-[#bef264] text-xs font-mono w-fit">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACT 01 • THE WELCOMING</span>
          </div>

          {/* Main Title matching reference typography */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.1]">
            Welcome to my <br />
            <span className="text-[#bef264]">little corner</span> of the internet.
          </h1>

          {/* Speech Bubble / Directive */}
          <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-700/80 backdrop-blur-md shadow-xl flex items-start gap-3">
            <CornerDownRight className="w-5 h-5 text-[#bef264] shrink-0 mt-0.5" />
            <div className="text-sm sm:text-base text-neutral-300">
              <span className="font-bold text-white block">Tom says: &ldquo;This way -&gt;&rdquo;</span>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Step right through the door. No corporate buzzwords, just good engineering, chill vibes, and memes.
              </p>
            </div>
          </div>

          {/* CTA / Scroll Indicator Button */}
          <div className="pt-2 flex items-center gap-4">
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
