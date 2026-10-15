"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { ArrowDown, Flame, Swords } from "lucide-react";

export const LarpSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="larp"
      aria-label="Ready to LARP Meme Section"
      className="full-window-section w-full relative flex flex-col items-center justify-center px-4 sm:px-8 py-12 text-neutral-100 overflow-hidden bg-[#0c0c0e]"
    >
      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 left-10 w-7 h-7 opacity-70 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-20 right-12 w-8 h-8 opacity-60"
      />
      <SparkleDecor
        color="amber"
        className="absolute top-1/3 right-8 w-5 h-5 opacity-50"
      />

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Top Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono select-none"
        >
          <Flame className="w-3.5 h-3.5 text-rose-400" />
          <span>ACT 04 • THE DRAMATIC DROP</span>
        </motion.div>

        {/* Cinematic Layered "READY TO LARP?" Typography (matching reference video frame 04) */}
        <div className="relative select-none">
          {/* Outlined Background Text */}
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl lg:text-9xl font-black text-transparent tracking-tighter opacity-15"
            style={{
              WebkitTextStroke: "2px #bef264",
            }}
          >
            READY TO LARP?
          </span>

          {/* Foreground Bold Text */}
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-white uppercase"
          >
            READY TO <span className="text-[#bef264]">LARP?</span>
          </motion.h2>
        </div>

        {/* 100% Width Styled Meme Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="w-full max-w-2xl mx-auto"
        >
          <figure className="relative w-full overflow-hidden rounded-2xl border-2 border-neutral-700 bg-neutral-900 shadow-2xl group">
            {/* Retro Window Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 bg-[#161618] px-4 py-2 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 font-semibold text-neutral-300">LARP_SHOWDOWN.JPG</span>
              </div>
              <span className="text-[10px] text-[#bef264] font-bold flex items-center gap-1">
                <Swords className="w-3 h-3" /> HYPE MAX
              </span>
            </div>

            {/* Original Meme Image */}
            <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
              <Image
                src="/assets/memes/03-projects/Larp.jpg"
                alt="Ready to LARP meme"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Caption */}
            <figcaption className="border-t border-neutral-800 bg-[#161618] px-4 py-2.5 text-center font-mono text-xs text-neutral-300">
              &ldquo;Hype levels maxed out. Dropping into real software builds.&rdquo;
            </figcaption>
          </figure>
        </motion.div>

        {/* Downward Hand-Drawn / Glowing Arrow Cue */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-2 flex flex-col items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-lg shadow-[#bef264]/20 cursor-pointer"
          >
            <span>Open Projects Section</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
          <span className="text-xs font-mono text-neutral-400">
            [Scroll down to view selected projects]
          </span>
        </motion.div>
      </div>

      {/* Subtle bottom scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL TO PROJECTS</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
