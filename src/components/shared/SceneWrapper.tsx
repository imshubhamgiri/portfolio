"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { SceneConfig } from "@/types/scene";

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
      className={`relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 scroll-mt-16 flex flex-col items-center justify-center ${className}`}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Subtle section entrance tag */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-8 flex items-center gap-2 font-mono text-xs text-neutral-400 select-none"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700 font-semibold tracking-wider">
            SCENE {sceneNumber.toString().padStart(2, "0")}
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
