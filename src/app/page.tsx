"use client";

import React, { useState } from "react";
import { WelcomeSection } from "@/components/scenes/01-welcome/WelcomeSection";
import { IntroSection } from "@/components/scenes/02-intro/IntroSection";
import { BackendSection } from "@/components/scenes/03-backend/BackendSection";
import { LarpSection } from "@/components/scenes/04-larp/LarpSection";
import { ProjectsSection } from "@/components/scenes/05-projects/ProjectsSection";
import { OutroSection } from "@/components/scenes/06-outro/OutroSection";

export default function Home() {
  const [isProjectLoaded, setIsProjectLoaded] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================= */}
      {/* SECTION 01: FULL WINDOW TOM WELCOMING ("THIS WAY ->")     */}
      {/* ========================================================= */}
      <WelcomeSection />

      {/* ========================================================= */}
      {/* SECTION 02: DEVELOPER INTRODUCTION (FULL WINDOW)         */}
      {/* ========================================================= */}
      <IntroSection />

      {/* ========================================================= */}
      {/* SECTION 03: BACKEND API SIMULATION (FULL WINDOW)         */}
      {/* ========================================================= */}
      <BackendSection
        isProjectLoaded={isProjectLoaded}
        setIsProjectLoaded={setIsProjectLoaded}
      />

      {/* ========================================================= */}
      {/* SECTIONS 04, 05, 06: UNLOCKED WHEN TOM'S CALL COMPLETES    */}
      {/* ========================================================= */}
      {isProjectLoaded && (
        <>
          {/* ========================================================= */}
          {/* SECTION 04: READY TO LARP (FULL WINDOW - 100% PORT WIDTH) */}
          {/* ========================================================= */}
          <LarpSection />

          {/* ========================================================= */}
          {/* SECTION 05: SELECTED PROJECTS (FULL WINDOW)               */}
          {/* ========================================================= */}
          <ProjectsSection />

          {/* ========================================================= */}
          {/* SECTION 06: SUSPENSE BLACKOUT & OUTRO (FULL WINDOW)       */}
          {/* ========================================================= */}
          <OutroSection />
        </>
      )}
    </div>
  );
}
