import { Project } from "@/types/project";

export const placeholderProjects: Project[] = [
  {
    id: "food-in-reels",
    title: "FoodInReels",
    tagline: "Short-form food video platform where query latency went from 600ms down to 9ms",
    description:
      "A reels platform for foodies where videos load before your stomach growls. Murdered slow database aggregations in cold blood with parallel queries, dropping latency by 98%. Added BullMQ and Redis so the backend doesn't crash when traffic spikes.",
    technologies: ["MERN + TypeScript", "BullMQ", "Redis", "Datadog", "Socket.io"],
    githubUrl: "https://github.com/skgiri569",
    liveUrl: "https://github.com/skgiri569",
    stats: [
      { label: "Query p50", value: "9.03ms (-98%)" },
      { label: "Response", value: "<100ms HTTP 202" },
      { label: "Rate Limit", value: "3-Tier Redis" },
    ],
  },
  {
    id: "live-docs",
    title: "Live-Docs",
    tagline: "Self-healing documentation AI scraper running on a $0 cloud bill",
    description:
      "A documentation crawler that literally fixes its own code when websites randomly change their HTML. Runs local 384-dim CPU embeddings so my OpenAI bill is a clean $0.00, while streaming answers via Pinecone in under 800ms.",
    technologies: ["TypeScript", "Transformers.js", "Pinecone", "Groq", "BullMQ"],
    githubUrl: "https://github.com/skgiri569",
    liveUrl: "https://github.com/skgiri569",
    stats: [
      { label: "Cloud Bill", value: "$0 (Local CPU)" },
      { label: "TTFT Stream", value: "<800ms via SSE" },
      { label: "Concurrency", value: "5x Worker Locks" },
    ],
  },
  {
    id: "job-pilot",
    title: "JobPilot",
    tagline: "Why apply for jobs manually when a Playwright bot can do it 24/7?",
    description:
      "Built an autonomous headless browser orchestrator that scrapes job portals, parses resume criteria with a custom matching engine, deduplicates with local SQLite3, and pings my Telegram whenever it applies. Extreme laziness meets engineering.",
    technologies: ["Playwright", "SQLite3", "Telegram Bot API", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/skgiri569",
    liveUrl: "https://github.com/skgiri569",
    stats: [
      { label: "Human Effort", value: "0% (Automated)" },
      { label: "Deduplication", value: "Local SQLite3" },
      { label: "Alerts", value: "Real-time Telegram" },
    ],
  },
];
