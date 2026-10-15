import React from "react";

export interface SceneConfig {
  id: string;
  sceneNumber: number;
  title: string;
  badge: string;
  children: React.ReactNode;
  className?: string;
}

export interface MemeMediaProps {
  src?: string;
  alt: string;
  type?: "video" | "image";
  poster?: string;
  caption?: string;
  className?: string;
  comedicTitle?: string;
  aspectRatio?: "square" | "video" | "wide";
  autoPlay?: boolean;
  loop?: boolean;
}
