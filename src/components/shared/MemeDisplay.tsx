"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Film, Image as ImageIcon } from "lucide-react";

export interface MemeDisplayProps {
  src?: string;
  alt: string;
  type?: "video" | "image";
  poster?: string;
  caption?: string;
  placeholderLabel: string;
  aspectRatio?: "video" | "square" | "wide";
  className?: string;
}

export const MemeDisplay: React.FC<MemeDisplayProps> = ({
  src,
  alt,
  type = "video",
  poster,
  caption,
  placeholderLabel,
  aspectRatio = "video",
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [loadError, setLoadError] = useState(false);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
  }[aspectRatio];

  const showPlaceholder = !src || loadError;

  return (
    <motion.figure
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow-lg ${className}`}
    >
      {/* Meme Header Tag */}
      <div className="flex items-center justify-between border-b border-neutral-800/80 bg-neutral-950/70 px-4 py-2 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-700 inline-block" />
          <span className="h-2 w-2 rounded-full bg-neutral-700 inline-block" />
          <span className="h-2 w-2 rounded-full bg-neutral-700 inline-block" />
          <span className="ml-2 font-medium text-neutral-300">MEME_FRAME</span>
        </div>
        <span className="text-[11px] text-neutral-500 uppercase tracking-wider">
          {type}
        </span>
      </div>

      {/* Main Display Area */}
      <div
        className={`relative w-full ${aspectClasses} bg-neutral-950 flex items-center justify-center overflow-hidden`}
      >
        {showPlaceholder ? (
          <div className="flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-800/80 border border-neutral-700 text-neutral-400">
              {type === "video" ? (
                <Film className="h-6 w-6 text-amber-400" />
              ) : (
                <ImageIcon className="h-6 w-6 text-amber-400" />
              )}
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-300">
              {placeholderLabel}
            </p>
            <p className="mt-1 text-xs text-neutral-500 max-w-xs">
              Meme placeholder &bull; Asset will be slotted during section implementation
            </p>
          </div>
        ) : type === "video" && !shouldReduceMotion ? (
          <video
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setLoadError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src={poster || src || ""}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            onError={() => setLoadError(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="border-t border-neutral-800/80 bg-neutral-950/60 px-4 py-2.5 text-center font-mono text-xs text-neutral-400">
          &ldquo;{caption}&rdquo;
        </figcaption>
      )}
    </motion.figure>
  );
};
