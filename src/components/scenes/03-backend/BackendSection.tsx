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
    title: "“Need to see some actual code?”",
    dialogue: "Tom is on the line. Click the button to simulate a backend request and fetch the projects.",
    codeLog: "> SYSTEM: Idle. Ready to dispatch query. 0 unhandled promise rejections.",
  },
  preparing: {
    image: "/assets/memes/02-backend/tom-call.jpg",
    imageAlt: "Tom dialing rotary phone preparing database query",
    title: "“Compiling database query... please hold.”",
    dialogue: "Tom puts on shades. Bypassing slow database aggregations with parallel Promise.all. Slashing 600ms down to 9ms...",
    codeLog: "> DB: EXPLAIN ANALYZE SELECT * FROM projects; | Slashed 600ms -> 9.03ms",
  },
  connected: {
    image: "/assets/memes/02-backend/tom-call-3.jpg",
    imageAlt: "Tom with receiver listening as backend connects and fetches",
    title: "“200 OK — It actually worked!”",
    dialogue: "Socket connected! Zero latency bottlenecks. Transmitting project payloads without server fatigue.",
    codeLog: "> HTTP 200 OK (9.03ms) | Rate limit: PASS | Payload incoming",
  },
  ready: {
    image: "/assets/memes/02-backend/tom-call-3.jpg",
    imageAlt: "Tom smiling backend fetch complete",
    title: "“Payload delivered! Time to inspect.”",
    dialogue: "All 3 project architectures loaded. Scroll down to see if I'm an actual engineer or just really good at Google.",
    codeLog: "> SUCCESS: FoodInReels, Live-Docs, and JobPilot loaded in memory.",
  },
};

export interface BackendSectionProps {
  isProjectLoaded?: boolean;
  setIsProjectLoaded?: (loaded: boolean) => void;
  onProjectsLoaded?: (loaded: boolean) => void;
}

export const BackendSection: React.FC<BackendSectionProps> = ({
  isProjectLoaded,
  setIsProjectLoaded,
  onProjectsLoaded,
}) => {
  const [stage, setStage] = useState<BackendStage>("idle");
  const shouldReduceMotion = useReducedMotion();

  const handleStartCall = () => {
    if (stage !== "idle" && stage !== "ready") return;

    // Transition 1: Immediately switch to preparing (Tom dialing rotary phone)
    setStage("preparing");

    // Transition 2: After 1 second, transition to connected (Tom fetching products)
    setTimeout(() => {
      setStage("connected");

      // Transition 3: After another 1 second, mark as ready and unlock projects
      setTimeout(() => {
        setStage("ready");
        setIsProjectLoaded?.(true);
        onProjectsLoaded?.(true);
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
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 pb-10 text-neutral-100 overflow-hidden"
    >
      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 left-8 sm:left-12 w-5 h-5 sm:w-6 sm:h-6 opacity-60 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-16 right-8 sm:right-16 w-6 h-6 sm:w-7 sm:h-7 opacity-70"
      />

      <div className="z-10 w-full max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center my-auto">
        {/* Left Column: Synced Dialogue, Action Button & Terminal Display */}
        <div className="lg:col-span-6 flex flex-col space-y-2.5 sm:space-y-4 text-left order-2 lg:order-1">
          {/* Animated Synced Heading */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={current.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase leading-[1.08]"
            >
              {current.title}
            </motion.h2>
          </AnimatePresence>

          {/* Dedicated Dialogue Display Panel */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-md shadow-2xl flex flex-col space-y-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.dialogue}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-neutral-200 text-xs sm:text-sm leading-relaxed"
              >
                {current.dialogue}
              </motion.p>
            </AnimatePresence>

            <span className="text-[11px] font-mono text-[#bef264] flex items-center gap-1.5">
              <span>Status:</span>
              <span className="font-semibold uppercase tracking-wider">{stage}</span>
            </span>
          </div>

          {/* Live Simulated Backend Console */}
          <div className="rounded-xl border border-neutral-800/80 bg-[#08080a] p-3 sm:p-3.5 font-mono text-xs shadow-lg space-y-1.5">
            <div className="flex items-center justify-between text-neutral-500 pb-1.5 border-b border-neutral-800/80">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#bef264]" />
                <span className="text-[11px]">HOTLINE_DISPATCH.LOG</span>
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
                className="text-neutral-300 text-[11px] sm:text-xs py-0.5"
              >
                {current.codeLog}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Trigger Buttons */}
          <div className="pt-0.5 flex flex-wrap items-center gap-3">
            {stage === "idle" && (
              <button
                onClick={handleStartCall}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Do you need a project? (Call Backend 🤝)</span>
              </button>
            )}

            {(stage === "preparing" || stage === "connected") && (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs sm:text-sm font-mono">
                <Loader2 className="w-4 h-4 text-[#bef264] animate-spin" />
                <span>
                  {stage === "preparing"
                    ? "Tom is preparing query... (1s)"
                    : "Backend connected! Fetching... (1s)"}
                </span>
              </div>
            )}

            {stage === "ready" && (
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="#larp"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Proceed to READY TO LARP</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 text-xs font-mono hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Re-dial</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Clean Standalone Meme Image (Wide & Prominent, No Tom.jpg Header) */}
        <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 w-full">
          <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl flex justify-center">
            {/* Subtle ambient glow behind image */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#bef264]/20 via-transparent to-neutral-800/25 blur-2xl opacity-60 pointer-events-none" />

            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square max-h-[44vh] sm:max-h-[56vh] lg:max-h-[66vh] xl:max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border-2 border-neutral-800/90 shadow-2xl bg-[#08080a]">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 550px, 750px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Dialing/Loading Indicator overlay during transition */}
              {(stage === "preparing" || stage === "connected") && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-2xl flex items-center justify-center pointer-events-none z-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/90 border border-neutral-700 text-[#bef264] text-xs sm:text-sm font-mono shadow-xl">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{stage === "preparing" ? "DIALING..." : "CONNECTED..."}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll / Call Cue */}
      <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        {isProjectLoaded || stage === "ready" ? (
          <>
            <span>SCROLL DOWN FOR PROJECTS</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
          </>
        ) : (
          <span className="text-neutral-500 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#bef264] animate-ping" />
            <span>[ CLICK &quot;CALL BACKEND&quot; ABOVE TO UNLOCK PROJECTS ]</span>
          </span>
        )}
      </div>
    </section>
  );
};
