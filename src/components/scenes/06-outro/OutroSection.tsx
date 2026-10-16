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
              <span className="font-mono text-[11px] tracking-widest uppercase text-neutral-600 animate-pulse">
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
      <div className="z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-4 px-2">
        {/* The Monkey Meme Image (Scales 0% to 100% with punchy bounce) */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            animate={
              isRevealed
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 18,
              mass: 0.8,
            }}
            className="relative group w-auto flex justify-center"
          >
            {/* Ambient soft glow behind image */}
            <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#bef264]/20 to-neutral-800/20 blur-lg sm:blur-xl opacity-60" />
            <Image
              src="/assets/memes/05-conclusion/mil-jayegi-kya.jpg"
              alt="Monkey staring with existential smirk: Mil jayegi kya job?"
              width={260}
              height={260}
              priority
              sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
              className="relative rounded-xl sm:rounded-2xl shadow-2xl border border-neutral-800/80 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 max-h-[22vh] aspect-square object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </motion.div>
        </div>

        {/* Dedicated Punchline & Text Display Panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl max-w-lg mx-auto space-y-1.5 sm:space-y-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#bef264] tracking-tight uppercase select-none">
            &ldquo;Mil jayegi kya job? ☠️&rdquo;
          </h2>

          <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-snug">
            &ldquo;Built an automated bot to apply for jobs, solved 400+ LeetCode problems, wrote backend APIs... aur yahan monkey se validation maang raha hoon.&rdquo;
          </p>

          <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">
            <strong className="text-white">Shubham Kumar</strong> &bull; Backend &amp; Full-Stack Dev. Looking for teams that actually ship code and don&apos;t take themselves too seriously.
          </p>
        </motion.div>

        {/* Real Connecting Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-1"
        >
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
