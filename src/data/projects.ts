import { Project } from "@/types/project";

export const placeholderProjects: Project[] = [
  {
    id: "project-1",
    title: "[Project 1 Name]",
    tagline: "[High-level punchy one-liner or core capability]",
    description:
      "[Brief explanation of the project, architecture problem solved, or engineering highlights. To be filled with real project data.]",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Metric", value: "[Value]" },
      { label: "Role", value: "[Role]" },
    ],
  },
  {
    id: "project-2",
    title: "[Project 2 Name]",
    tagline: "[High-level punchy one-liner or core capability]",
    description:
      "[Brief explanation of the project, architecture problem solved, or engineering highlights. To be filled with real project data.]",
    technologies: ["React", "PostgreSQL", "Docker", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Metric", value: "[Value]" },
      { label: "Role", value: "[Role]" },
    ],
  },
  {
    id: "project-3",
    title: "[Project 3 Name]",
    tagline: "[High-level punchy one-liner or core capability]",
    description:
      "[Brief explanation of the project, architecture problem solved, or engineering highlights. To be filled with real project data.]",
    technologies: ["Python", "FastAPI", "AWS", "WebSockets"],
    githubUrl: "#",
    liveUrl: "#",
    stats: [
      { label: "Metric", value: "[Value]" },
      { label: "Role", value: "[Role]" },
    ],
  },
];
