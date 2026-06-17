"use client";

import { useEffect, useRef } from "react";

export function ScrollVideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pauseTimerRef = useRef<number | null>(null);
  const playingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const pauseAfterScroll = () => {
      video.pause();
      playingRef.current = false;
    };

    const handleScroll = () => {
      if (!playingRef.current) {
        playingRef.current = true;
        video.playbackRate = 0.82;
        void video.play().catch(() => {
          playingRef.current = false;
        });
      }

      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
      }

      pauseTimerRef.current = window.setTimeout(pauseAfterScroll, 180);
    };

    video.pause();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-100 contrast-[1.18] saturate-[1.08]"
        muted
        playsInline
        loop
        preload="auto"
        poster="/images/marble/veronzo-marble-background.png"
      >
        <source src="/videos/marble-loop-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/28" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,255,255,0.54),transparent_30%),linear-gradient(180deg,rgba(248,250,251,0.28),rgba(248,250,251,0.6))]" />
    </div>
  );
}
