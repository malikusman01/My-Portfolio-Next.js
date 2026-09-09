"use client";

import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Systems-Oriented Engineer",
  "API Developer",
];

export default function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    if (mql.matches) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const label = reducedMotion ? roles[0] : roles[index];

  return (
    <span className="inline-block min-w-[15ch]" aria-live="polite">
      <span key={label} className="animate-[fadeIn_400ms_ease]">
        {label}
      </span>
    </span>
  );
}