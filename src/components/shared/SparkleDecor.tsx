import React from "react";

export const SparkleDecor: React.FC<{ className?: string; color?: "lime" | "yellow" | "amber" }> = ({
  className = "",
  color = "lime",
}) => {
  const colorClass = {
    lime: "text-[#bef264]",
    yellow: "text-yellow-300",
    amber: "text-amber-400",
  }[color];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`select-none pointer-events-none drop-shadow-[0_0_8px_rgba(190,242,100,0.4)] ${colorClass} ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </svg>
  );
};
