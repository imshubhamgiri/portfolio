"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { placeholderProjects } from "@/data/projects";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  return (
    <section
      id="projects"
      aria-label="Selected Projects Showcase"
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-16 pb-10 text-neutral-100 overflow-hidden"
    >
      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 right-8 sm:right-16 w-5 h-5 sm:w-6 sm:h-6 opacity-60 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-16 left-6 sm:left-12 w-6 h-6 sm:w-7 sm:h-7 opacity-70"
      />

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col space-y-3 sm:space-y-4 lg:space-y-5 my-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-1 sm:space-y-1.5">
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase"
          >
            Actual Builds. <span className="text-[#bef264]">Zero Tutorial Hell.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed"
          >
            Real projects that actually run. Slashing query latency, self-healing scrapers, and a bot that applies for jobs while I sleep.
          </motion.p>
        </div>

        {/* Mobile Tab Switcher (< md) */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-0.5">
          {placeholderProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveMobileIdx(idx)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                activeMobileIdx === idx
                  ? "bg-[#bef264] text-neutral-950 font-bold shadow-sm shadow-[#bef264]/20"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Mobile Single Card View (< md) */}
        <div className="block md:hidden w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={placeholderProjects[activeMobileIdx].id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard
                project={placeholderProjects[activeMobileIdx]}
                index={activeMobileIdx}
              />
            </motion.div>
          </AnimatePresence>

          {/* Mobile Prev / Next Controls */}
          <div className="flex items-center justify-between pt-2 px-1 text-xs text-neutral-400">
            <button
              onClick={() =>
                setActiveMobileIdx((prev) =>
                  prev === 0 ? placeholderProjects.length - 1 : prev - 1
                )
              }
              className="flex items-center gap-1 hover:text-white font-mono text-[11px] cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Prev
            </button>
            <span className="font-mono text-[11px] text-neutral-500">
              {activeMobileIdx + 1} / {placeholderProjects.length}
            </span>
            <button
              onClick={() =>
                setActiveMobileIdx((prev) =>
                  prev === placeholderProjects.length - 1 ? 0 : prev + 1
                )
              }
              className="flex items-center gap-1 hover:text-white font-mono text-[11px] cursor-pointer"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Desktop 3-Card Grid (md+) */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-5 w-full">
          {placeholderProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom CTA to next section */}
        <div className="pt-0.5 flex justify-center items-center gap-3">
          <a
            href="#job-milegi"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20"
          >
            <span>Proceed to Outro</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
          <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
            [Next: The existential monkey question]
          </span>
        </div>
      </div>

      {/* Subtle bottom scroll cue */}
      <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL TO CONCLUSION</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
