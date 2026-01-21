"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { AuroraBackground } from "./ui/aurora-background";

/* =========================================================
   ✅ ADD YOUR INSTAGRAM URLS ONLY HERE
========================================================= */
const INSTAGRAM_REELS = [
  { url: "https://www.instagram.com/reel/DTczXtADyYR/", label: "Behind the Scenes" },
  { url: "https://www.instagram.com/reel/DTHoKoYD5XH/", label: "Design Process" },
  { url: "https://www.instagram.com/reel/DS2PMXCEsWP/", label: "New Collection" },
  { url: "https://www.instagram.com/reel/DSuZ6l4lDJl/", label: "Behind the Scenes" },
  { url: "https://www.instagram.com/reel/DSpXFRGDZJ3/", label: "Design Process" },
  { url: "https://www.instagram.com/reel/DSmyXvQEppE/", label: "New Collection" },
  { url: "https://www.instagram.com/reel/DSkNfXskv0P/", label: "Behind the Scenes" },
  { url: "https://www.instagram.com/reel/DSZ3zbWD8JD/", label: "Design Process" },
  { url: "https://www.instagram.com/reel/DSXU-UdCiE_/", label: "New Collection" },
  { url: "https://www.instagram.com/reel/DSVGtNilRoM/", label: "Behind the Scenes" },
];

/* ========================================================= */

function extractEmbedUrl(url: string) {
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    const idx = parts.findIndex((p) => ["reel", "p", "tv"].includes(p));
    if (idx === -1 || !parts[idx + 1]) return null;
    return `https://www.instagram.com/${parts[idx]}/${parts[idx + 1]}/embed/`;
  } catch {
    return null;
  }
}

export default function InstagramReelsHighlights() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll control
  const autoTimerRef = useRef<number | null>(null);
  const autoPausedUntilRef = useRef<number>(0);

  const reels = useMemo(
    () =>
      INSTAGRAM_REELS.map((r) => ({
        ...r,
        embed: extractEmbedUrl(r.url),
      })).filter((r) => r.embed),
    []
  );

  const stopAuto = () => {
    if (autoTimerRef.current) {
      window.clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  };

  const startAuto = () => {
    const el = scrollerRef.current;
    if (!el) return;
    if (autoTimerRef.current) return;

    let dir = 1;
    const speed = 0.45;

    autoTimerRef.current = window.setInterval(() => {
      const now = Date.now();
      if (now < autoPausedUntilRef.current) return;

      el.scrollLeft += dir * speed;

      // bounce at edges
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) dir = -1;
      if (el.scrollLeft <= 2) dir = 1;
    }, 16);
  };

  /* =========================================================
     ✅ Auto-scroll carousel (ambient motion)
     - pauses when user hovers or uses arrows
  ========================================================= */
  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* =========================================================
     ✅ Arrow scroll (WORKING)
  ========================================================= */
  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    // Pause auto-scroll for 2 seconds so it doesn't fight the button scroll
    autoPausedUntilRef.current = Date.now() + 2000;

    // Scroll by ~1 card
    const step = 360 + 24; // card-ish width + gap
    el.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <AuroraBackground
      className="h-auto min-h-0 w-full items-stretch justify-start py-0"
      showRadialGradient
    >
      <section className="relative w-full py-14">
        <div className="mx-auto max-w-[1400px] px-4">
          {/* Heading */}
          <h2 className="mb-10 text-center text-5xl font-bold tracking-tight md:text-5xl">
            Watch Highlights
          </h2>

          {/* ================= SLIDER WRAPPER ================= */}
          <div className="relative">
            {/* ⬅️ LEFT ARROW */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-[-24px] top-1/2 z-20 -translate-y-1/2 rounded-full border border-neutral-300 bg-white/90 p-3 shadow-md backdrop-blur transition hover:bg-white"
              aria-label="Scroll left"
              type="button"
            >
              ←
            </button>

            {/* ➡️ RIGHT ARROW */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-[-24px] top-1/2 z-20 -translate-y-1/2 rounded-full border border-neutral-300 bg-white/90 p-3 shadow-md backdrop-blur transition hover:bg-white"
              aria-label="Scroll right"
              type="button"
            >
              →
            </button>

            {/* ================= SLIDER ================= */}
            <div
              ref={scrollerRef}
              // ✅ must be scrollable for arrows to work
              className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onMouseEnter={() => {
                // pause while user interacts
                autoPausedUntilRef.current = Date.now() + 9999999;
              }}
              onMouseLeave={() => {
                // resume after leaving
                autoPausedUntilRef.current = Date.now() + 0;
              }}
            >
              {reels.map((item, i) => (
                <div
                  key={i}
                  className="relative h-[560px] w-[320px] shrink-0 overflow-hidden rounded-2xl"
                >
                  <iframe
                    src={item.embed as string}
                    className="h-full w-full"
                    loading="lazy"
                    allow="encrypted-media; fullscreen"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
}
