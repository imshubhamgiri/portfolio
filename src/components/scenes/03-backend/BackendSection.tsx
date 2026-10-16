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
  Terminal,
} from "lucide-react";

type BackendStage = "idle" | "preparing" | "connected" | "ready";

interface StageData {
  image: string;
  imageAlt: string;
  title: string;
  dialogue: string;
  codeLog: string;
}

const STAGE_CONFIG: Record<BackendStage, StageData> = {
  idle: {
    image: "/assets/memes/02-backend/tom-calling.png",
    imageAlt: "Tom asking if you need project data",
    title: "“Do you need production projects?”",
    dialogue: "Tom is on the rotary phone to Patna. One click dispatches Shubham's BullMQ worker queue with Redis distributed locks to stream the real builds.",
    codeLog: "> SYSTEM: Idle. Redis pub/sub warm. Ready to dispatch BullMQ queue.",
  },
  preparing: {
    image: "/assets/memes/02-backend/tom-call.jpg",
    imageAlt: "Tom dialing rotary phone preparing database query",
    title: "“Murdering $lookup & compiling cursor indexes...”",
    dialogue: "Tom puts on shades. Bypassing heavy MongoDB aggregation pipelines with parallel Promise.all. Slashing latency from 600ms down to 9.03ms...",
    codeLog: "> DB: EXPLAIN ANALYZE SELECT * FROM projects; | Slashing 600ms -> 9.03ms",
  },
  connected: {
    image: "/assets/memes/02-backend/tom-call-3.jpg",
    imageAlt: "Tom with receiver listening as backend connects and fetches",
    title: "“HTTP 202 Accepted in 24ms!”",
    dialogue: "Line connected! Datadog & OpenTelemetry trace confirmed: 0 US-India latency bottlenecks. Transmitting production-grade payloads!",
    codeLog: "> HTTP 200 OK (9.03ms) | 3-tier Redis rate-limiting: PASS | Socket stream open",
  },
  ready: {
    image: "/assets/memes/02-backend/tom-call-3.jpg",
    imageAlt: "Tom smiling backend fetch complete",
    title: "“Projects delivered without server fatigue!”",
    dialogue: "All 3 architectures arrived hot off the server. Scroll down to inspect the real code (yes, including the bot built to automate job applications).",
    codeLog: "> SUCCESS: FoodInReels, Live-Docs, and JobPilot delivered. Zero server fatigue.",
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
        {/* Left Column: Synced Dialogue, Action Button & Terminal Display */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-2 lg:order-1">
          {/* Animated Synced Heading */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={current.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.08]"
            >
              {current.title}
            </motion.h2>
          </AnimatePresence>

          {/* Dedicated Dialogue Display Panel */}
          <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl flex flex-col space-y-3">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.dialogue}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-neutral-200 text-sm sm:text-base leading-relaxed"
              >
                {current.dialogue}
              </motion.p>
            </AnimatePresence>

            <span className="text-xs font-mono text-[#bef264] flex items-center gap-1.5">
              <span>Status:</span>
              <span className="font-semibold uppercase tracking-wider">{stage}</span>
            </span>
          </div>

          {/* Live Simulated Backend Console */}
          <div className="rounded-xl border border-neutral-800/80 bg-[#08080a] p-4 font-mono text-xs shadow-lg space-y-2">
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
          <div className="pt-1 flex flex-wrap items-center gap-4">
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
              <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-mono">
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

        {/* Right Column: Clean Standalone Meme Image with Smooth Cross-Fade */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <div className="relative group max-w-sm sm:max-w-md w-full flex justify-center">
            {/* Subtle ambient glow behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#bef264]/15 via-transparent to-neutral-800/20 blur-xl opacity-50" />

            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
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
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="rounded-2xl shadow-2xl border border-neutral-800/80 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dialing/Loading Indicator overlay during transition */}
              {(stage === "preparing" || stage === "connected") && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] rounded-2xl flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950/90 border border-neutral-700 text-[#bef264] text-xs font-mono shadow-xl">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{stage === "preparing" ? "DIALING..." : "CONNECTED..."}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
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
