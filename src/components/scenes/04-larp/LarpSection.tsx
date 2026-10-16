"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { ArrowDown } from "lucide-react";

export const LarpSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="larp"
      aria-label="Ready to LARP Meme Section"
      className="full-window-section w-full relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 pb-10 text-neutral-100 overflow-hidden"
    >
      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 left-6 sm:left-10 w-5 h-5 sm:w-7 sm:h-7 opacity-70 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-20 right-8 sm:right-12 w-6 h-6 sm:w-8 sm:h-8 opacity-60"
      />
      <SparkleDecor
        color="amber"
        className="absolute top-1/3 right-6 w-4 h-4 sm:w-5 sm:h-5 opacity-50"
      />

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-4 lg:space-y-5 my-auto">
        {/* Cinematic Layered "READY TO LARP?" Typography (matching reference video frame 04) */}
        <div className="relative select-none">
          {/* Outlined Background Text */}
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl lg:text-7xl font-black text-transparent tracking-tighter opacity-15"
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
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white uppercase"
          >
            READY TO <span className="text-[#bef264]">LARP?</span>
          </motion.h2>
        </div>

        {/* Clean Standalone Meme Image */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative group w-full max-w-[280px] sm:max-w-md lg:max-w-xl mx-auto flex justify-center"
        >
          {/* Ambient soft glow behind image */}
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-rose-500/15 via-[#bef264]/15 to-transparent blur-xl opacity-60" />
          <Image
            src="/assets/memes/03-projects/Larp.jpg"
            alt="Ready to LARP meme"
            width={596}
            height={335}
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 450px, 580px"
            className="relative rounded-2xl shadow-2xl border border-neutral-800/80 w-full max-h-[25vh] sm:max-h-[32vh] lg:max-h-[40vh] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </motion.div>

        {/* Dedicated Subtitle / Caption Display Panel (Embracing the LARP!) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-xl max-w-lg mx-auto space-y-1"
        >
          <p className="font-mono text-xs sm:text-sm text-[#bef264] font-semibold">
            &ldquo;Recruiter: Wait, is this entire portfolio just an elaborate LARP?&rdquo;
          </p>
          <p className="font-sans text-xs sm:text-sm text-neutral-300">
            Me: &ldquo;Yes. 100% LARP. Fake it till you git push --force. Scroll down to inspect the disguise.&rdquo;
          </p>
        </motion.div>

        {/* Downward Hand-Drawn / Glowing Arrow Cue */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="pt-1 flex flex-col items-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-lg shadow-[#bef264]/20 cursor-pointer"
          >
            <span>Open Projects Section</span>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>

      {/* Subtle bottom scroll cue */}
      <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL TO PROJECTS</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
