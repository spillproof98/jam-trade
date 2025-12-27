"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isLowEndDevice =
      (navigator as any)?.connection?.saveData ||
      ["2g", "slow-2g"].includes(
        (navigator as any)?.connection?.effectiveType
      );

    if (prefersReducedMotion || isLowEndDevice) {
      setUseFallback(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const loadVideo = () => {
      video.load();
      video.play().catch(() => setUseFallback(true));
    };

    // Lazy load when browser is idle
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(loadVideo);
    } else {
      setTimeout(loadVideo, 1200);
    }

    video.onerror = () => setUseFallback(true);
  }, []);

  if (useFallback) {
    return (
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/video/jam-fallback.jpg')",
        }}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="fixed inset-0 -z-10 h-full w-full object-cover opacity-20"
    >
      <source src="/video/Jam-Vid.mp4" type="video/mp4" />
    </video>
  );
}
