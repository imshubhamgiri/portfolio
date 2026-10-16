"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import {
  ArrowDown,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  PhoneCall,
  Flame,
} from "lucide-react";

export const IntroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const skills = [
    { label: "Node.js & C++", icon: Cpu, tag: "Core Engines" },
    { label: "TypeScript & Next.js", icon: Code2, tag: "Type-Safe" },
    { label: "BullMQ & Redis", icon: Layers, tag: "Queues & Locks" },
    { label: "Postgres & MongoDB", icon: Terminal, tag: "DB Optimization" },
    { label: "OpenTelemetry & Datadog", icon: Flame, tag: "Observability" },
    { label: "Pinecone & Groq RAG", icon: Sparkles, tag: "$0 Local Embeddings" },
  ];

  return (
    <section
      id="intro"
      aria-label="Developer Introduction Section"
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 pb-10 text-neutral-100 overflow-hidden"
    >
      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 right-8 sm:right-20 w-5 h-5 sm:w-6 sm:h-6 animate-pulse opacity-70"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-16 left-8 sm:left-20 w-6 h-6 sm:w-7 sm:h-7 opacity-75"
      />
      <SparkleDecor
        color="lime"
        className="absolute top-1/2 left-4 w-4 h-4 opacity-40"
      />

      <div className="z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center my-auto">
        {/* Left Column: Personal Intro Narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-7 flex flex-col space-y-3 sm:space-y-4 lg:space-y-5 text-left"
        >
          {/* Main Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-[1.08]"
          >
            Backend Developer <br />
            <span className="text-[#bef264]">slaying slow queries</span> &amp; chill vibes.
          </motion.h2>

          {/* Story Narrative */}
          <motion.p
            variants={itemVariants}
            className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl"
          >
            Hey, I&apos;m Shubham. I write backend code, mess with Redis and BullMQ so servers don&apos;t explode, and solved 400+ LeetCode problems because someone told me binary trees were important. BCA student at MMHU (graduating 2026).
          </motion.p>

          {/* Core Tech Stack Badges */}
          <motion.div variants={itemVariants} className="pt-0.5">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">
              [Stuff I Use Daily]
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.label}
                    className="flex items-center gap-2 px-2.5 py-1.5 sm:py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-[11px] sm:text-xs text-neutral-200 transition-colors hover:border-[#bef264]/60 hover:text-white"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#bef264] shrink-0" />
                    <span className="font-medium font-sans truncate">{skill.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Reference Video "Call the backend" CTA Button with cursor ring */}
          <motion.div variants={itemVariants} className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="#backend"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20 group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-neutral-950 group-hover:rotate-12 transition-transform" />
              <span>Call the Backend 🤝</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>

            <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
              <span>Next Scene:</span>
              <span className="text-neutral-200 font-semibold">Test 9ms Hotline</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Developer Profile Terminal */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-sm sm:max-w-md rounded-2xl border-2 border-neutral-800 bg-neutral-900/90 shadow-2xl overflow-hidden font-mono text-xs backdrop-blur-md">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 bg-[#161618] px-3.5 py-2 text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                <span className="h-2 w-2 rounded-full bg-green-500/80" />
                <span className="ml-1.5 font-semibold text-neutral-300 text-[11px]">shubham_specs.ts</span>
              </div>
              <span className="text-[10px] text-[#bef264] font-bold">ONLINE</span>
            </div>

            {/* Terminal Code Body */}
            <div className="p-4 space-y-2 bg-[#08080a] text-neutral-300 leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
              <div className="text-neutral-500">{`// Honest developer specifications`}</div>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-[#bef264]">shubham</span> = &#123;
              </p>
              <div className="pl-3 sm:pl-4 space-y-1">
                <p>
                  <span className="text-neutral-400">role:</span>{" "}
                  <span className="text-amber-300">&quot;Backend Tinkerer&quot;</span>,
                </p>
                <p>
                  <span className="text-neutral-400">college:</span>{" "}
                  <span className="text-amber-300">&quot;BCA (MMHU, 2026)&quot;</span>,
                </p>
                <p>
                  <span className="text-neutral-400">leetCode:</span>{" "}
                  <span className="text-cyan-400">&quot;400+ solved (mostly survived)&quot;</span>,
                </p>
                <p>
                  <span className="text-neutral-400">latencyObsession:</span>{" "}
                  <span className="text-[#bef264]">&quot;Turned 600ms queries into 9ms&quot;</span>,
                </p>
                <p>
                  <span className="text-neutral-400">cloudBill:</span>{" "}
                  <span className="text-emerald-400">&quot;$0.00 (too broke for cloud APIs)&quot;</span>,
                </p>
                <p>
                  <span className="text-neutral-400">jobStrategy:</span>{" "}
                  <span className="text-amber-300">&quot;Built JobPilot to apply for me 🤖&quot;</span>,
                </p>
              </div>
              <p>&#125;;</p>

              <div className="pt-1.5 border-t border-neutral-800/80 text-[10px] sm:text-[11px] text-neutral-400 space-y-0.5">
                <p className="text-neutral-300">
                  &gt; 400+ LeetCode problems neutralized.
                </p>
                <p className="text-neutral-500">
                  &gt; Scroll down to test real backend latency.
                </p>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="border-t border-neutral-800 bg-[#161618] px-3.5 py-1.5 flex items-center justify-between text-[10px] text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Node Operational</span>
              </span>
              <span className="text-neutral-500">9.03ms p50</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL TO CALL THE BACKEND</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
