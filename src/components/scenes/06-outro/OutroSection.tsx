"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/shared/Icons";
import { Mail, RotateCcw } from "lucide-react";

export const OutroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.4, once: true });
  const shouldReduceMotion = useReducedMotion();

  // State: "suspense" (blackout active) | "revealed" (monkey meme burst out)
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const hasStartedRef = useRef<boolean>(false);

  // Blackout timer (2.8 seconds of suspense)
  useEffect(() => {
    if (isInView && !hasStartedRef.current) {
      hasStartedRef.current = true;

      const delay = shouldReduceMotion ? 0 : 2800;
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, shouldReduceMotion]);

  const handleReplay = () => {
    setIsRevealed(false);
    setTimeout(() => {
      setIsRevealed(true);
    }, 2800);
  };

  return (
    <section
      id="job-milegi"
      ref={sectionRef}
      aria-label="Final Epilogue and Contact Section"
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-8 py-12 text-neutral-100 overflow-hidden"
    >
      {/* ========================================================= */}
      {/* SUSPENSE BLACKOUT CURTAIN (2.5 - 3s PITCH BLACK SCREEN)    */}
      {/* ========================================================= */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            key="blackout-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0 z-40 bg-black flex flex-col items-center justify-center select-none"
          >
            {/* Subtle Suspense Pulse */}
            <div className="flex flex-col items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#bef264] animate-ping" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-sky-600 animate-pulse">
                [ CALCULATING RECRUITER VERDICT FOR SHUBHAM... ]
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 left-12 w-6 h-6 opacity-60 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-16 right-16 w-8 h-8 opacity-70"
      />
      <SparkleDecor
        color="amber"
        className="absolute top-1/2 right-10 w-5 h-5 opacity-40"
      />

      {/* Main Revealed Content Container */}
      <div className="z-10 w-full max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center my-auto px-4">
        {/* Left Column: The Monkey Meme Window (Capturing ~75% of window height) */}
        <div className="lg:col-span-7 flex justify-center items-center w-full order-2 lg:order-1">
          <motion.div
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
            animate={
              isRevealed
                ? { scale: 1, opacity: 1 }
                : { scale: 0.85, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 18,
              mass: 0.8,
            }}
            className="relative group w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl flex justify-center"
          >
            {/* Ambient soft glow behind image */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#bef264]/20 via-transparent to-neutral-800/25 blur-2xl opacity-60 pointer-events-none" />

            {/* Clean Standalone Meme Image Container (No filename text detail) */}
            <div className="relative w-full aspect-square max-h-[50vh] sm:max-h-[62vh] lg:max-h-[72vh] xl:max-h-[75vh] overflow-hidden rounded-2xl border-2 border-neutral-800/90 shadow-2xl bg-black flex items-center justify-center">
              <Image
                src="/assets/memes/05-conclusion/mil-jayegi-kya.jpg"
                alt="Monkey staring with existential smirk: Mil jayegi kya job?"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 600px, 850px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Dedicated Punchline, Text & Connecting Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col space-y-3.5 sm:space-y-4 text-left order-1 lg:order-2"
        >
          {/* Punchline Card */}
          <div className="p-4 sm:p-5 lg:p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl space-y-2.5 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#bef264] tracking-tight uppercase select-none leading-tight">
              &ldquo;Mil jayegi kya job? ☠️&rdquo;
            </h2>

            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed">
              &ldquo;What do you think? If yes Connect and offer me job&rdquo;
            </p>

            <p className="text-neutral-400 text-xs leading-relaxed pt-1 border-t border-neutral-800/80">
              <strong className="text-white">Shubham Kumar</strong> &bull; Backend &amp; Full-Stack Dev. Looking for teams that actually ship code and don&apos;t take themselves too seriously.
            </p>
          </div>

          {/* Real Connecting Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-0.5">
            <a
              href="https://github.com/skgiri569"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-[11px] sm:text-xs font-mono transition-all hover:bg-neutral-800 hover:text-white hover:border-[#bef264] shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#bef264]" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/skgiri569"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-[11px] sm:text-xs font-mono transition-all hover:bg-neutral-800 hover:text-white hover:border-[#bef264] shadow-sm"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#bef264]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://leetcode.com/u/skgiri569"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-[11px] sm:text-xs font-mono transition-all hover:bg-neutral-800 hover:text-white hover:border-[#bef264] shadow-sm"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode (400+)</span>
            </a>

            <a
              href="mailto:skgiri569@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-[#bef264] text-neutral-950 font-bold text-[11px] sm:text-xs font-mono transition-all hover:bg-[#a3e635] hover:scale-105 shadow-md shadow-[#bef264]/20"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>skgiri569@gmail.com</span>
            </a>

            <button
              onClick={handleReplay}
              title="Replay Blackout Suspense"
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white text-[11px] sm:text-xs font-mono transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Replay</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle Footer Attribution */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[11px] font-mono text-neutral-600 select-none">
        <span>DEV://PORTFOLIO</span>
        <span>•</span>
        <span>NEXT.JS 16</span>
        <span>•</span>
        <span>TAILWIND V4</span>
      </div>
    </section>
  );
};
