"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Center (Starts at 1, fades out to 0 and STAYS 0 for the rest of the scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 1], [1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25, 1], [0, -100, -100]);

  // Persistent Name (Bottom Left) -> Starts at 0, fades in and STAYS 1 for the rest of the scroll
  const nameOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [0, 0, 1, 1]);
  const nameY = useTransform(scrollYProgress, [0, 0.15, 0.25, 1], [50, 50, 0, 0]);

  // Section 2: Left aligned (20% to 50%)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45, 0.55], [100, 0, 0, -100]);

  // Section 3: Right aligned (50% to 80%)
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75, 0.85], [100, 0, 0, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none z-[100] font-sans pb-[env(safe-area-inset-bottom)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white text-center leading-[1.1]">
          Shlok Chatterjee
        </h1>
      </motion.div>

      {/* Persistent Name Bottom Left */}
      <motion.div
        style={{ opacity: nameOpacity, y: nameY }}
        className="absolute bottom-6 left-6 md:bottom-20 md:left-20 flex items-end justify-start pointer-events-none"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
          Shlok Chatterjee
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24 pointer-events-none"
      >
        <h2 className="text-4xl md:text-7xl max-w-2xl font-semibold tracking-tighter text-white leading-tight">
          Learning<br className="hidden md:block" />
          <span className="text-white">
            Everyday
          </span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-24 text-right pointer-events-none"
      >
        <h2 className="text-4xl md:text-7xl max-w-3xl font-semibold tracking-tighter text-white leading-tight">
          Bridging <br />
          <span className="italic font-light text-white">design</span>{" "}
          <span className="text-white">&</span> <br />
          <span className="text-white">
            engineering
          </span>
        </h2>
      </motion.div>
    </div>
  );
}
