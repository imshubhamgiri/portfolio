"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon } from "./Icons";

export const TopNav: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 bg-[#050507]/90 backdrop-blur-md border-b border-neutral-900/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <Link
          href="#welcome"
          className="flex items-center gap-2.5 text-neutral-100 font-bold hover:text-[#bef264] transition-colors"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-neutral-700 text-[#bef264] font-mono text-xs font-bold">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm sm:text-base tracking-tight leading-tight">Shubham Kumar</span>
            <span className="text-[10px] font-mono text-neutral-400">Backend &amp; Full-Stack Dev</span>
          </div>
        </Link>

        {/* Center: Jump anchors */}
        <nav
          aria-label="Scene navigation"
          className="hidden md:flex items-center gap-6 text-xs font-mono text-neutral-400"
        >
          <Link href="#welcome" className="hover:text-[#bef264] transition-colors">
            01 Welcome
          </Link>
          <Link href="#intro" className="hover:text-[#bef264] transition-colors">
            02 Intro
          </Link>
          <Link href="#backend" className="hover:text-[#bef264] transition-colors">
            03 Backend Call
          </Link>
          <Link href="#larp" className="hover:text-[#bef264] transition-colors">
            04 LARP?
          </Link>
          <Link href="#projects" className="hover:text-[#bef264] transition-colors">
            05 Projects
          </Link>
          <Link href="#job-milegi" className="hover:text-[#bef264] transition-colors">
            06 Job Milegi?
          </Link>
        </nav>

        {/* Right: Reference video pill buttons */}
        <div className="flex items-center gap-2 text-xs font-medium">
          <a
            href="mailto:skgiri569@gmail.com"
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full border border-neutral-700 text-neutral-200 hover:border-neutral-500 transition-colors font-mono text-[11px]"
          >
            skgiri569@gmail.com
          </a>
          <a
            href="#job-milegi"
            className="px-4 py-1.5 rounded-full bg-[#bef264] text-neutral-950 font-bold hover:bg-[#a3e635] transition-all hover:scale-105 shadow-sm shadow-[#bef264]/20"
          >
            Hire Me 🤝
          </a>
        </div>
      </div>
    </header>
  );
};
