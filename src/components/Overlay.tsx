"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Center (0% to 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);
  const display1 = useTransform(scrollYProgress, (pos) => pos > 0.22 ? "none" : "flex");

  // Persistent Name (Bottom Left) -> Fades in as Section 1 fades out
  const nameOpacity = useTransform(scrollYProgress, [0.22, 0.35], [0, 1]);
  const nameY = useTransform(scrollYProgress, [0.22, 0.35], [50, 0]);
  const displayName = useTransform(scrollYProgress, (pos) => pos < 0.21 ? "none" : "flex");

  // Section 2: Left aligned (20% to 50%)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.55], [100, 0, 0, -100]);

  // Section 3: Right aligned (50% to 80%)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75, 0.85], [100, 0, 0, -100]);

  // Section 4: Optional ending prompt/arrow pointing to projects (80% to 100%)
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.95], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.8, 0.95], [50, 0]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 font-sans mix-blend-difference pb-[env(safe-area-inset-bottom)]">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1, display: display1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white text-center leading-[1.1]">
          Shlok Chatterjee
        </h1>
      </motion.div>

      {/* Persistent Name Bottom Left */}
      <motion.div
        style={{ opacity: nameOpacity, y: nameY, display: displayName }}
        className="absolute bottom-6 left-6 md:bottom-20 md:left-20 flex items-end justify-start"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
          Shlok Chatterjee
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
      >
        <h2 className="text-4xl md:text-7xl max-w-2xl font-semibold tracking-tighter text-white leading-tight">
          Learning<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Everyday
          </span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-24 text-right"
      >
        <h2 className="text-4xl md:text-7xl max-w-3xl font-semibold tracking-tighter text-white leading-tight">
          Bridging <br />
          <span className="italic font-light text-white/80">design</span>{" "}
          <span className="text-gray-400">&amp;</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-gray-100 to-gray-600">
            engineering
          </span>
        </h2>
      </motion.div>

      {/* Scroll indicator down to projects */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <div className="flex flex-col items-center opacity-80 animate-pulse">
          <span className="text-sm font-medium uppercase tracking-[0.3em] mb-4 text-white/60">Selected Works</span>
          <div className="w-[1px] h-[50px] bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
}
