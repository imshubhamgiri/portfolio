"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SceneConfig } from "@/types/scene";
import { SparkleDecor } from "./SparkleDecor";

export const SceneWrapper: React.FC<SceneConfig> = ({
  id,
  sceneNumber,
  title,
  badge,
  children,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      aria-label={title}
      className={`full-window-section relative w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden border-b border-neutral-900/60 pt-14 pb-8 ${className}`}
    >
      {/* Background Subtle Sparkles */}
      <SparkleDecor
        color="lime"
        className="absolute top-16 right-10 w-5 h-5 opacity-40"
      />
      <SparkleDecor
        color="yellow"
        className="absolute bottom-16 left-8 w-6 h-6 opacity-30"
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center z-10">
        {/* Subtle section entrance tag */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-6 flex items-center gap-2 font-mono text-xs text-neutral-400 select-none"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-900 text-[#bef264] border border-[#bef264]/30 font-semibold tracking-wider">
            ACT {sceneNumber.toString().padStart(2, "0")}
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-400 tracking-wide font-medium">{badge}</span>
        </motion.div>

        {/* Section Content */}
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};
