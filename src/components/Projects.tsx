"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  link: string;
};

const works: Project[] = [
  {
    id: 1,
    title: "Aetherial OS",
    category: "Web Application • Design System",
    description: "A spatial computing interface concept built with React Three Fiber and Next.js.",
    year: "2024",
    link: "#",
  },
  {
    id: 2,
    title: "Chroma Shift",
    category: "Creative Technology • WebGL",
    description: "An interactive, audio-reactive visualizer mapping sound frequencies to volumetric shaders.",
    year: "2023",
    link: "#",
  },
  {
    id: 3,
    title: "Nexus E-Commerce",
    category: "Fullstack • Next.js",
    description: "A high-conversion headless storefront built with Framer Motion and Shopify.",
    year: "2023",
    link: "#",
  },
  {
    id: 4,
    title: "Vanguard Studio",
    category: "Brand Identity • UI/UX",
    description: "Digital presence for a boutique architecture firm, featuring editorial typography and smooth scrolling.",
    year: "2022",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-24 md:py-48 px-6 md:px-12 xl:px-24 rounded-t-[3rem] -mt-12 z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 h-full"
        >
          <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white">
            Selected <br className="hidden md:block"/> Works
          </h2>
          <p className="text-gray-400 max-w-sm text-lg md:text-xl font-light">
            A curated collection of projects demonstrating my expertise in creative development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {works.map((project, i) => (
            <motion.a
              href={project.link}
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 md:p-10 h-[400px] md:h-[500px] border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start z-10">
                <span className="text-sm font-mono tracking-widest uppercase text-white/50">{project.category}</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 transform group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>

              <div className="z-10 mt-auto">
                <p className="text-white/40 font-mono text-sm mb-4">{project.year}</p>
                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-500">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light text-lg max-w-md group-hover:text-white/80 transition-colors duration-500">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
