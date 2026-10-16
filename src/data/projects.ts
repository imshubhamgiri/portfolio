import { Project } from "@/types/project";

export const placeholderProjects: Project[] = [
  {
    id: "food-in-reels",
    title: "FoodInReels",
    tagline: "Short-form video discovery platform engineered so hard latency dropped by 98%",
    description:
      "TikTok for foodies, but built like a high-frequency trading desk. Murdered slow MongoDB $lookup aggregations in cold blood using parallel Promise.all queries and compound indexes, dragging query latency from a sluggish 600ms down to a blistering 9.03ms. Integrated BullMQ queues, Redis Pub/Sub, Datadog distributed tracing, and sliding-scale JWT dual-token auth so nobody can steal your butter chicken recipes.",
    technologies: ["MERN + TypeScript", "BullMQ", "Redis Pub/Sub", "OpenTelemetry", "Datadog", "Socket.io"],
    githubUrl: "https://github.com/skgiri569",
    liveUrl: "https://github.com/skgiri569",
    stats: [
      { label: "p50 Latency", value: "9.03ms (-98%)" },
      { label: "Pipeline", value: "<100ms HTTP 202" },
      { label: "Security", value: "3-Tier Rate Limiting" },
    ],
  },
  {
    id: "live-docs",
    title: "Live-Docs",
    tagline: "Self-healing documentation-to-RAG engine running on a $0 cloud bill",
    description:
      "An autonomous crawler and grounded RAG pipeline that literally self-heals when websites change their HTML like fickle teenagers. Uses Zod validation gates and AI template refactoring loops to survive DOM layout shifts. Ran local 384-dim CPU embeddings via Transformers.js (all-MiniLM-L6-v2) so my cloud embedding bill is a clean $0.00, while streaming answers via Groq & Pinecone in <800ms TTFT.",
    technologies: ["TypeScript", "Transformers.js", "Pinecone", "Groq (gpt-oss-20b)", "BullMQ", "Express.js"],
    githubUrl: "https://github.com/skgiri569",
    liveUrl: "https://github.com/skgiri569",
    stats: [
      { label: "Cloud Embeddings", value: "$0 (Local CPU)" },
      { label: "TTFT Stream", value: "<800ms via SSE" },
      { label: "Worker Queue", value: "5x Concurrency" },
    ],
  },
  {
    id: "job-pilot",
    title: "JobPilot",
    tagline: "Why beg for a job manually when a Playwright bot can apply 24/7?",
    description:
      "The ultimate developer flex: built an autonomous headless browser orchestrator that scrapes job platforms, parses resume criteria with a custom semantic matching engine, deduplicates applications with local SQLite3, and sends me Telegram toasts every time it applies. Yes, this whole portfolio leads to the monkey asking 'job mil jayegi kya' while my bot is already applying behind the scenes.",
    technologies: ["Playwright", "Better-SQLite3", "Telegram Bot API", "Cron", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/skgiri569",
    liveUrl: "https://github.com/skgiri569",
    stats: [
      { label: "Human Effort", value: "0% (Automated)" },
      { label: "Deduplication", value: "Local SQLite3" },
      { label: "Alerts", value: "Real-time Telegram" },
    ],
  },
];
