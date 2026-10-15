export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}
