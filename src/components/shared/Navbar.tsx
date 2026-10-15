"use client";

import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

export const Navbar: React.FC = () => {
  const navItems = [
    { href: "#intro", label: "01 Intro" },
    { href: "#backend", label: "02 Backend" },
    { href: "#projects", label: "03 Projects" },
    { href: "#interactive", label: "04 Interactive" },
    { href: "#conclusion", label: "05 Conclusion" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-14">
        {/* Moniker / Logo */}
        <Link
          href="#intro"
          className="flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-neutral-200 hover:text-amber-400 transition-colors"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 border border-neutral-700 text-amber-400">
            <Terminal className="h-4 w-4" />
          </div>
          <span>dev://portfolio</span>
        </Link>

        {/* Scene Jump Links */}
        <nav aria-label="Sections navigation" className="flex items-center gap-1 sm:gap-2 font-mono text-xs overflow-x-auto py-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1 text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-100 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
