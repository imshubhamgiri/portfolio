"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ExternalLink, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: "easeOut",
      }}
      className="group relative flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 sm:p-5 lg:p-6 backdrop-blur-sm transition-colors hover:border-neutral-700 hover:bg-neutral-900/80"
    >
      <div>
        {/* Header: Terminal icon + Links */}
        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-neutral-800 border border-neutral-700/80 text-[#bef264]">
            <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
          <div className="flex items-center gap-2.5 text-neutral-400">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="transition-colors hover:text-[#bef264]"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live deployment of ${project.title}`}
                className="transition-colors hover:text-[#bef264]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-neutral-100 group-hover:text-[#bef264] transition-colors">
          {project.title}
        </h3>
        <p className="mt-0.5 text-[11px] sm:text-xs font-mono text-[#bef264]/90 font-medium leading-tight">
          {project.tagline}
        </p>

        {/* Project Description */}
        <p className="mt-2 text-xs sm:text-sm text-neutral-300/90 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-neutral-800/80">
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1 mb-2.5 sm:mb-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-neutral-800/90 border border-neutral-700/60 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-[11px] font-mono text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics/Stats placeholder row */}
        {project.stats && project.stats.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-[11px] font-mono text-neutral-400">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="text-neutral-500">{stat.label}:</span>
                <span className="text-neutral-200 font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
