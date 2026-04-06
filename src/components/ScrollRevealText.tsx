"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ScrollRevealTextProps {
  children: string;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

export default function ScrollRevealText({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom center",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;
    const scroller = scrollContainerRef?.current || window;

    const ctx = gsap.context(() => {
      // Setup Rotation effect on the container block
      if (baseRotation > 0) {
        gsap.set(containerRef.current, { rotation: baseRotation });
        gsap.to(containerRef.current, {
          rotation: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            scroller: scroller,
            scrub: true,
            start: "top bottom",
            end: rotationEnd,
          },
        });
      }

      // Configure each word
      gsap.set(wordsRef.current, {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      });

      // Execute word stagger sequence linked to scroll progress limits
      gsap.to(wordsRef.current, {
        opacity: 1,
        filter: enableBlur ? "blur(0px)" : "none",
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: scroller,
          scrub: true,
          start: "top 80%",   // Animation kicks off when container top is mostly onto screen
          end: wordAnimationEnd, // Stagger finishes depending on param
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
  ]);

  const words = children.split(/\s+/);

  return (
    <div ref={containerRef} className={containerClassName}>
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) wordsRef.current[i] = el;
          }}
          className={`inline-block mr-[0.25em] mb-[0.1em] ${textClassName}`}
          style={{ willChange: "opacity, filter" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
