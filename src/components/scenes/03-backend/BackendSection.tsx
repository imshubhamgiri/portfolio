"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import {
  PhoneCall,
  Loader2,
  CheckCircle2,
  ArrowDown,
  RotateCcw,
  Sparkles,
  Terminal,
} from "lucide-react";

type BackendStage = "idle" | "preparing" | "connected" | "ready";

interface StageData {
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  dialogue: string;
  codeLog: string;
  statusColor: string;
}

const STAGE_CONFIG: Record<BackendStage, StageData> = {
  idle: {
    image: "/assets/memes/02-backend/tom-calling.png",
    imageAlt: "Tom asking if you need project data",
    badge: "ACT 03 • THE HOTLINE",
    title: "“Do you need a project?”",
    dialogue: "Tom is on the line asking if you want to see the real project data. Give the order to dial.",
    codeLog: "> SYSTEM: Idle. Ready to initiate database dispatch query.",
    statusColor: "text-[#bef264]",
  },
  preparing: {
    image: "/assets/memes/02-backend/tom-call.jpg",
    imageAlt: "Tom dialing rotary phone preparing database query",
    badge: "STAGE 1/2 • PREPARING QUERY",
    title: "“Hold on, dialing the database...”",
    dialogue: "Tom puts on his shades and begins crafting the SQL payload. Resolving connections...",
    codeLog: "> DB: Connecting to pool... EXPLAIN ANALYZE SELECT * FROM projects;",
    statusColor: "text-amber-400",
  },
  connected: {
    image: "/assets/memes/02-backend/tom-call-3.jpg",
    imageAlt: "Tom with receiver listening as backend connects and fetches",
    badge: "STAGE 2/2 • BACKEND CONNECTED",
    title: "“200 OK — Fetching projects now!”",
    dialogue: "Line connected! High-speed stream established. Products & architecture payloads incoming.",
    codeLog: "> HTTP 200 OK (24ms) | Stream open | Transferring 3 project entities...",
    statusColor: "text-emerald-400",
  },
  ready: {
    image: "/assets/memes/02-backend/tom-call-3.jpg",
    imageAlt: "Tom smiling backend fetch complete",
    badge: "ACT 03 • PAYLOAD DELIVERED",
    title: "“Projects are ready for inspection!”",
    dialogue: "Everything fetched with zero lag. Scroll down to the next window to inspect the showcase.",
    codeLog: "> SUCCESS: 3 Projects delivered. Cache warm. Scroll to inspect.",
    statusColor: "text-[#bef264]",
  },
};

export const BackendSection: React.FC = () => {
  const [stage, setStage] = useState<BackendStage>("idle");
  const shouldReduceMotion = useReducedMotion();

  const handleStartCall = () => {
    if (stage !== "idle" && stage !== "ready") return;

    // Transition 1: Immediately switch to preparing (Tom dialing rotary phone)
    setStage("preparing");

    // Transition 2: After 1 second, transition to connected (Tom fetching products)
    setTimeout(() => {
      setStage("connected");

      // Transition 3: After another 1 second, mark as ready
      setTimeout(() => {
        setStage("ready");
      }, 1000);
    }, 1000);
  };

  const handleReset = () => {
    setStage("idle");
  };

  const current = STAGE_CONFIG[stage];

  return (
    <section
      id="backend"
      aria-label="Backend API Hotline Simulation"
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-8 py-16 text-neutral-100 overflow-hidden"
    >
      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 left-12 w-6 h-6 opacity-60 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-16 right-16 w-7 h-7 opacity-70"
      />

      <div className="z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Synced Dialogue, Action Button & Terminal */}
        <div className="lg:col-span-7 flex flex-col space-y-5 text-left order-2 lg:order-1">
          {/* Animated Status Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.badge}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-mono w-fit ${current.statusColor}`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{current.badge}</span>
            </motion.div>
          </AnimatePresence>

          {/* Animated Synced Heading */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={current.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.1]"
            >
              {current.title}
            </motion.h2>
          </AnimatePresence>

          {/* Animated Synced Dialogue */}
          <AnimatePresence mode="wait">
            <motion.p
              key={current.dialogue}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              {current.dialogue}
            </motion.p>
          </AnimatePresence>

          {/* Live Simulated Backend Console */}
          <div className="rounded-xl border border-neutral-800 bg-[#0c0c0e] p-4 font-mono text-xs shadow-lg space-y-2">
            <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-800/80">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#bef264]" />
                <span>HOTLINE_DISPATCH.LOG</span>
              </span>
              <span className="text-[10px] text-neutral-400">
                {stage === "idle" && "READY"}
                {stage === "preparing" && "DIALING (1s)..."}
                {stage === "connected" && "FETCHING (1s)..."}
                {stage === "ready" && "RESOLVED"}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.codeLog}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-neutral-300 text-xs py-1"
              >
                {current.codeLog}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Trigger Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {stage === "idle" && (
              <button
                onClick={handleStartCall}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Do you need a project? (Call Backend 🤝)</span>
              </button>
            )}

            {(stage === "preparing" || stage === "connected") && (
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-mono">
                <Loader2 className="w-4 h-4 text-[#bef264] animate-spin" />
                <span>
                  {stage === "preparing"
                    ? "Tom is preparing query... (1s)"
                    : "Backend connected! Fetching... (1s)"}
                </span>
              </div>
            )}

            {stage === "ready" && (
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#larp"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Proceed to READY TO LARP</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 text-xs font-mono hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Re-dial</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Synced Meme Image with Smooth Cross-Fade */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <figure className="relative w-full max-w-md sm:max-w-lg overflow-hidden rounded-2xl border-2 border-neutral-700 bg-neutral-900 shadow-2xl">
            {/* Retro Window Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 bg-[#161618] px-4 py-2.5 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 font-semibold text-neutral-300">
                  {stage === "idle" && "01_TOM_CALLING.PNG"}
                  {stage === "preparing" && "02_TOM_QUERY_PREP.JPG"}
                  {(stage === "connected" || stage === "ready") && "03_TOM_FETCHED.JPG"}
                </span>
              </div>
              <span className="text-[10px] text-[#bef264] font-bold uppercase">
                {stage}
              </span>
            </div>

            {/* Smooth Animated Image Container */}
            <div className="relative aspect-square w-full bg-black overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dialing/Loading Indicator overlay during transition */}
              {(stage === "preparing" || stage === "connected") && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-700 text-[#bef264] text-xs font-mono">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{stage === "preparing" ? "DIALING..." : "CONNECTED..."}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Caption */}
            <figcaption className="border-t border-neutral-800 bg-[#161618] px-4 py-2.5 text-center font-mono text-xs text-neutral-300">
              {stage === "idle" && "Tom: “Do you need project data? Click below.”"}
              {stage === "preparing" && "Tom: “Preparing the query... dialing DB.”"}
              {stage === "connected" && "Tom: “Connected! Fetching project payload.”"}
              {stage === "ready" && "Tom: “Payload loaded! 200 OK.”"}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL DOWN</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
