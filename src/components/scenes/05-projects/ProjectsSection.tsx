"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SparkleDecor } from "@/components/shared/SparkleDecor";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { placeholderProjects } from "@/data/projects";
import { ArrowDown } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-label="Selected Projects Showcase"
      className="full-window-section relative flex flex-col items-center justify-center px-4 sm:px-8 py-12 text-neutral-100 overflow-hidden"
    >
      {/* Background Retro Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 right-16 w-6 h-6 opacity-60 animate-pulse"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-16 left-12 w-7 h-7 opacity-70"
      />

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-2">

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase"
          >
            Real Architectures. <span className="text-[#bef264]">Zero Tutorial Hell.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed"
          >
            From slashing MongoDB latency by 98% in FoodInReels, to running $0 local CPU embeddings in Live-Docs, and building an autonomous bot (JobPilot) so I don&apos;t have to manually click &apos;Apply&apos; on LinkedIn like a peasant.
          </motion.p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {placeholderProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom CTA to next section */}
        <div className="pt-2 flex justify-center items-center gap-3">
          <a
            href="#job-milegi"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#bef264] text-neutral-950 font-bold text-xs sm:text-sm hover:bg-[#a3e635] transition-all hover:scale-105 shadow-md shadow-[#bef264]/20"
          >
            <span>Proceed to The Existential Question</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
            [Next: Will all this backend code actually get me a job?]
          </span>
        </div>
      </div>

      {/* Subtle bottom scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-neutral-500 select-none">
        <span>SCROLL TO CONCLUSION</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#bef264]" />
      </div>
    </section>
  );
};
