"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import Overlay from "./Overlay";
import Header from "./Header";

const FRAME_COUNT = 160;

const currentFrame = (index: number) =>
  `/sequence-webp/ezgif-frame-${index.toString().padStart(3, "0")}.webp`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Images array — slots filled progressively as frames load
  const imagesRef = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT).fill(null));
  const [isFirstFrameReady, setIsFirstFrameReady] = useState(false);

  // Scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0–1) to frame index (1–160)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  // ── Progressive image loader ──────────────────────────────────────────────
  useEffect(() => {
    const images = imagesRef.current;

    // Load frame 1 first → show hero immediately
    const first = new Image();
    first.src = currentFrame(1);
    first.onload = () => {
      images[0] = first;
      setIsFirstFrameReady(true); // hero visible now

      // Load frames 2-160 in the background
      for (let i = 2; i <= FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          images[i - 1] = img;
        };
      }
    };
    images[0] = first;
  }, []);

  // ── Canvas rendering ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!isFirstFrameReady) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawImage = (img: HTMLImageElement) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const cx = (canvas.width - img.width * ratio) / 2;
      const cy = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * ratio, img.height * ratio);
    };

    // Draw first frame immediately
    const images = imagesRef.current;
    if (images[0]) drawImage(images[0]);

    // Resize handler
    const handleResize = () => {
      const idx = Math.min(Math.max(Math.floor(frameIndex.get()) - 1, 0), FRAME_COUNT - 1);
      const img = images[idx] || images[0];
      if (img) drawImage(img);
    };
    window.addEventListener("resize", handleResize);

    // Scroll-driven frame updates
    const unsubscribe = frameIndex.on("change", (latestIndex) => {
      const idx = Math.min(Math.max(Math.floor(latestIndex) - 1, 0), FRAME_COUNT - 1);
      // Walk back to nearest loaded frame if this one isn't ready yet
      let img = images[idx];
      if (!img) {
        for (let k = idx - 1; k >= 0; k--) {
          if (images[k]) { img = images[k]; break; }
        }
      }
      if (img) requestAnimationFrame(() => drawImage(img));
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [isFirstFrameReady, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Top Header */}
        <Header />

        {/* Loading overlay — only shown until frame 1 is painted */}
        {!isFirstFrameReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50 text-white/50">
            <span className="animate-pulse tracking-widest text-sm uppercase">Loading…</span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 block"
        />

        {/* Overlay text on top of canvas */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
