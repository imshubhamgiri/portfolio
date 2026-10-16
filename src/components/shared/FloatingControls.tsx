"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, HelpCircle, X } from "lucide-react";

export const FloatingControls: React.FC = () => {
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Bottom Left Help Pill (as seen in reference video) */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
        <button
          onClick={() => setShowHelpModal(true)}
          aria-label="Portfolio info & easter eggs"
          className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#bef264] text-neutral-950 shadow-lg shadow-black/40 hover:scale-110 active:scale-95 transition-all font-bold text-sm sm:text-base cursor-pointer"
        >
          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Bottom Right Scroll to Top Pill (as seen in reference video) */}
      <div
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#bef264] text-neutral-950 shadow-lg shadow-black/40 hover:scale-110 active:scale-95 transition-all font-bold text-sm sm:text-base cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>
      </div>

      {/* Quick Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl border border-neutral-700 bg-neutral-900 p-6 text-neutral-200 shadow-2xl relative">
            <button
              onClick={() => setShowHelpModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-black text-[#bef264] mb-2 font-mono">
              PORTFOLIO DIRECTORY
            </h3>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Every section is in exactly one full window. Scroll vertically or use the keyboard / trackpad to move through the experience.
            </p>
            <ul className="text-xs font-mono space-y-1.5 text-neutral-300 mb-4">
              <li>• Section 1: Tom Welcoming (&ldquo;This way -&gt;&rdquo;)</li>
              <li>• Section 2: Developer Introduction</li>
              <li>• Section 3: Backend API Call Simulation</li>
              <li>• Section 4: READY TO LARP (100% Port Width)</li>
              <li>• Section 5: Projects Showcase</li>
              <li>• Section 6: &ldquo;Mil jayegi kya job?&rdquo; &amp; Socials</li>
            </ul>
            <button
              onClick={() => setShowHelpModal(false)}
              className="w-full py-2 rounded-xl bg-[#bef264] text-neutral-950 font-bold text-xs uppercase tracking-wider"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
