"use client";

import { useEffect, useRef } from "react";

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const aiSymbols = [
      "◇",
      "◆",
      "▲",
      "▼",
      "●",
      "◯",
      "★",
      "✦",
      "⚡",
      "⚛",
      "🤖",
      "🧠",
      "⚙️",
      "💡",
      "{",
      "}",
      "<",
      ">",
      "[]",
      "()",
      "AI",
      "ML",
      "NN",
      "fx",
      "π",
      "Σ",
      "∞",
      "∂",
      "∇",
    ];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "ai-particle";
      particle.textContent =
        aiSymbols[Math.floor(Math.random() * aiSymbols.length)];
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.animationDuration = `${6 + Math.random() * 4}s`;

      container.appendChild(particle);
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-1 hidden overflow-hidden md:block"
    />
  );
};

export default FloatingParticles;
