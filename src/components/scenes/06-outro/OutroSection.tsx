"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { Mail, RotateCcw, Skull, Sparkles } from "lucide-react";

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
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-8 py-12 text-neutral-100 overflow-hidden bg-[#0c0c0e]"
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
                [ CALCULATING RECRUITER VERDICT... ]
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
      <div className="z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Top Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[#bef264] text-xs font-mono select-none"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ACT 06 • THE FINAL PUNCHLINE</span>
        </motion.div>

        {/* The Monkey Meme Image (Scales 0% to 100% with punchy bounce) */}
        <div className="w-full flex justify-center py-1">
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
            className="w-full max-w-xs sm:max-w-sm"
          >
            <figure className="relative w-full overflow-hidden rounded-2xl border-2 border-neutral-700 bg-neutral-900 shadow-2xl group">
              {/* Retro Window Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 bg-[#161618] px-4 py-2 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-semibold text-neutral-300">EXISTENTIAL_VERDICT.JPG</span>
                </div>
                <span className="text-[10px] text-[#bef264] font-bold flex items-center gap-1">
                  <Skull className="w-3 h-3" /> PUNCHLINE
                </span>
              </div>

              {/* Monkey Image */}
              <div className="relative aspect-square w-full bg-black overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/memes/05-conclusion/mil-jayegi-kya.jpg"
                  alt="Monkey staring with existential smirk: Mil jayegi kya job?"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Caption */}
              <figcaption className="border-t border-neutral-800 bg-[#161618] px-4 py-2 text-center font-mono text-xs text-neutral-300">
                &ldquo;The moment of truth.&rdquo;
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Punchline Typography */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="space-y-2"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#bef264] tracking-tight uppercase select-none">
            &ldquo;Mil jayegi kya job? ☠️&rdquo;
          </h2>

          <p className="text-neutral-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Clean code, resilient backend architectures, fast modern UIs, and zero drama. Let&apos;s build something great together.
          </p>
        </motion.div>

        {/* Real Connecting Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono transition-all hover:bg-neutral-800 hover:text-white hover:border-[#bef264] shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono transition-all hover:bg-neutral-800 hover:text-white hover:border-[#bef264] shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs font-mono transition-all hover:bg-[#a3e635] hover:scale-105 shadow-md shadow-[#bef264]/20"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          <button
            onClick={handleReplay}
            title="Replay Blackout Suspense"
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white text-xs font-mono transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
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
