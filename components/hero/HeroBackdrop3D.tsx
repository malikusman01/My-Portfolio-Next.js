"use client";

import { useEffect, useState } from "react";

export default function HeroBackdrop3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!enabled) return null;

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-cube">
        <span className="face face-front" />
        <span className="face face-back" />
        <span className="face face-left" />
        <span className="face face-right" />
        <span className="face face-top" />
        <span className="face face-bottom" />
      </div>
      <div className="hero-node hero-node-1" />
      <div className="hero-node hero-node-2" />
      <div className="hero-node hero-node-3" />
      <div className="hero-node hero-node-4" />
      <div className="hero-node hero-node-5" />
    </div>
  );
}