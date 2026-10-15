"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SceneWrapper } from "@/components/shared/SceneWrapper";
import { MemeDisplay } from "@/components/shared/MemeDisplay";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { placeholderProjects } from "@/data/projects";
import {
  Sparkles,
  ArrowDown,
  PhoneCall,
  Flame,
  HandMetal,
  Mail,
  Layers,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================= */}
      {/* SCENE 01: INTRO (Tom and Jerry Meme + Introduction)       */}
      {/* ========================================================= */}
      <SceneWrapper
        id="intro"
        sceneNumber={1}
        title="Intro"
        badge="The Infiltration • Tom & Jerry Meme"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Meme Display Placeholder */}
          <MemeDisplay
            alt="Tom and Jerry sneaky intro meme"
            type="video"
            placeholderLabel="[Tom and Jerry Meme Placeholder]"
            caption="Visitor spotted. Initiating casual portfolio walkthrough."
            aspectRatio="video"
          />

          {/* Staggered Introduction Text Reveal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[Status: Online & Vibing]</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-100">
              Hey, I&apos;m <span className="text-amber-400 underline decoration-wavy decoration-amber-500/40">[Your Name]</span>.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-neutral-300 text-base sm:text-lg font-medium leading-snug">
              [Headline / Role: Full-Stack Developer • Systems Builder • Internet Resident]
            </motion.p>

            <motion.p variants={itemVariants} className="text-neutral-400 text-sm leading-relaxed">
              [Brief narrative introduction placeholder: Welcome to my portfolio! I build real software with high engineering standards, clean architecture, and a healthy dose of humor. Scroll down to dive into the work.]
            </motion.p>

            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="#backend"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-mono transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <span>Scroll to Next Scene</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </SceneWrapper>

      {/* ========================================================= */}
      {/* SCENE 02: BACKEND (Phone Call Meme + Data Loading Interaction) */}
      {/* ========================================================= */}
      <SceneWrapper
        id="backend"
        sceneNumber={2}
        title="Backend Section"
        badge="The Hotline • Phone-Call Meme"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Staggered Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 text-left order-2 md:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono w-fit">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>[Backend / Infrastructure Dispatch]</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-100">
              &ldquo;Hello? Is the server running?&rdquo;
            </motion.h2>

            <motion.p variants={itemVariants} className="text-neutral-400 text-sm leading-relaxed">
              [Section description placeholder: A phone-call meme frames this space. In the upcoming phase, an interactive data loading trigger will demonstrate live system querying and backend proficiency.]
            </motion.p>

            {/* Interactive Section Placeholder Box */}
            <motion.div variants={itemVariants} className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 font-mono text-xs text-neutral-400 space-y-2">
              <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-800">
                <span>[INTERACTION_PREVIEW]</span>
                <span className="text-emerald-400">STATUS: READY_TO_WIRE</span>
              </div>
              <p className="text-neutral-300">
                &gt; Planned interaction: Real project-data loading trigger.
              </p>
              <p className="text-neutral-500">
                &gt; Will feature live query metrics, response simulation, and backend data flow.
              </p>
            </motion.div>
          </motion.div>

          {/* Meme Display Placeholder */}
          <div className="order-1 md:order-2">
            <MemeDisplay
              alt="Phone call meme for backend loading"
              type="video"
              placeholderLabel="[Phone-Call Meme Placeholder]"
              caption="Production is ringing. Let's see what the backend has to say."
              aspectRatio="video"
            />
          </div>
        </div>
      </SceneWrapper>

      {/* ========================================================= */}
      {/* SCENE 03: PROJECT REVEAL (READY TO LARP Meme + Projects Grid) */}
      {/* ========================================================= */}
      <SceneWrapper
        id="projects"
        sceneNumber={3}
        title="Project Reveal"
        badge="The Drop • Ready to LARP Meme"
      >
        <div className="flex flex-col space-y-10">
          {/* Meme & Intro header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <MemeDisplay
              alt="Ready to LARP dramatic meme"
              type="video"
              placeholderLabel="[READY TO LARP Meme Placeholder]"
              caption="Hype levels maxed out. Dropping the actual builds."
              aspectRatio="video"
            />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col space-y-4 text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono w-fit">
                <Flame className="w-3.5 h-3.5" />
                <span>[Dramatic Project Reveal]</span>
              </motion.div>

              <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-100">
                Selected Works
              </motion.h2>

              <motion.p variants={itemVariants} className="text-neutral-400 text-sm leading-relaxed">
                [Projects overview placeholder: Accessible, detailed project cards showcasing architecture, technical challenges, and live deployments without requiring complex animations.]
              </motion.p>
            </motion.div>
          </div>

          {/* Reusable Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {placeholderProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </SceneWrapper>

      {/* ========================================================= */}
      {/* SCENE 04: INTERACTIVE ("Dab Me Up" Meme + Interactive Action) */}
      {/* ========================================================= */}
      <SceneWrapper
        id="interactive"
        sceneNumber={4}
        title="Interactive Section"
        badge="Vibe Check • Dab Me Up Meme"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Meme Display Placeholder */}
          <MemeDisplay
            alt="Dab me up interactive meme"
            type="video"
            placeholderLabel="[Dab Me Up Meme Placeholder]"
            caption="Don't leave the screen hanging."
            aspectRatio="square"
          />

          {/* Staggered Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col space-y-4 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono w-fit">
              <HandMetal className="w-3.5 h-3.5" />
              <span>[Interactive Zone Placeholder]</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-100">
              Dab Me Up
            </motion.h2>

            <motion.p variants={itemVariants} className="text-neutral-400 text-sm leading-relaxed">
              [Interactive experience placeholder: A clickable &ldquo;dab me up&rdquo; interaction featuring slap mechanics, counter state, and optional easter eggs will be wired into this section during its milestone.]
            </motion.p>

            {/* Interaction Wireframe Box */}
            <motion.div variants={itemVariants} className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 font-mono text-xs text-neutral-400 space-y-2">
              <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-800">
                <span>[SLAP_ZONE]</span>
                <span className="text-cyan-400">PENDING_ASSETS</span>
              </div>
              <p className="text-neutral-300">
                &gt; Planned interaction: Clickable dab trigger + counter.
              </p>
              <p className="text-neutral-500">
                &gt; Slap animation and bonus easter egg events to be integrated.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </SceneWrapper>

      {/* ========================================================= */}
      {/* SCENE 05: CONCLUSION (Monkey Reaction + Punchline + Contact) */}
      {/* ========================================================= */}
      <SceneWrapper
        id="conclusion"
        sceneNumber={5}
        title="Conclusion"
        badge="The Question • Monkey Reaction Meme"
      >
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
          {/* Meme Display Placeholder */}
          <MemeDisplay
            alt="Monkey contemplation reaction meme"
            type="video"
            placeholderLabel="[Monkey Reaction Meme Placeholder]"
            caption="The ultimate existential contemplation after reviewing the portfolio."
            aspectRatio="video"
            className="w-full max-w-md mx-auto"
          />

          {/* Staggered Outro & Contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-black text-amber-400 tracking-tight"
            >
              &ldquo;Mil jayegi kya job?&rdquo;
            </motion.h2>

            <motion.p variants={itemVariants} className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              [Outro statement placeholder: Let&apos;s build something great together. Genuine contact links below.]
            </motion.p>

            {/* Contact & Social Placeholders */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>[GitHub: To be provided]</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>[LinkedIn: To be provided]</span>
              </a>

              <a
                href="mailto:placeholder@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono transition-colors hover:bg-neutral-800 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                <span>[Email: To be provided]</span>
              </a>
            </motion.div>

            {/* Accessible Footer Notice */}
            <motion.div variants={itemVariants} className="pt-8 text-neutral-600 text-xs font-mono flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Next.js App Router • Tailwind CSS • Motion for React</span>
            </motion.div>
          </motion.div>
        </div>
      </SceneWrapper>
    </div>
  );
}
