"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 160;

const currentFrame = (index: number) =>
  `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.png`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Preload images into memory
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index (1-160)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload images logic
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    // Canvas rendering logic
    if (!isLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle window resize dynamically to fit canvas perfectly using object-fit cover logic inside canvas
    const drawImage = (img: HTMLImageElement) => {
      // Set canvas size to window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Calculate object-fit: cover logic
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    };

    // Draw the very first frame initially
    drawImage(images[0]);

    // Handle resize
    const handleResize = () => drawImage(images[Math.floor(frameIndex.get()) - 1] || images[0]);
    window.addEventListener("resize", handleResize);

    // Subscribe to framer motion changes
    const unsubscribe = frameIndex.on("change", (latestIndex) => {
      const index = Math.floor(latestIndex) - 1; // 0-based array index
      const maxIndex = Math.min(Math.max(index, 0), FRAME_COUNT - 1);
      
      requestAnimationFrame(() => {
        if (images[maxIndex]) {
          drawImage(images[maxIndex]);
        }
      });
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      unsubscribe();
    };
  }, [isLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Loading Overlay (Optional) */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50 text-white/50">
            <span className="animate-pulse tracking-widest text-sm uppercase">Loading Experience...</span>
          </div>
        )}

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 block"
        />

        {/* Overlay the text content on top of canvas */}
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
