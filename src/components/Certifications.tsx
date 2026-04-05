"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiCoursera } from "react-icons/si";

const ibmCourses = [
  "Machine Learning with Python",
  "Scalable Machine Learning on Big Data using Apache Spark",
  "Introduction to Deep Learning & Neural Networks with Keras",
  "Deep Neural Networks with PyTorch",
  "Building Deep Learning Models with TensorFlow",
  "AI Capstone Project with Deep Learning",
  "Introduction to Computer Vision and Image Processing",
  "Introduction to Natural Language Processing",
  "Deployment of Machine Learning Models",
  "IBM AI Engineering Capstone"
];

export default function Certifications() {
  const [isIbmExpanded, setIsIbmExpanded] = useState(false);

  return (
    <section className="relative w-full bg-[#121212] py-24 md:py-32 px-6 flex justify-center z-30">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="pl-6 border-l-2 border-white/20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Certifications
            </h2>
          </div>
        </motion.div>

        {/* Cards Stack */}
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* Card 1: IBM AI Engineering */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group relative flex flex-col rounded-3xl p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:shadow-[inset_0_0_80px_rgba(255,255,255,0.03)] transition-all duration-500 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-10 rounded-lg bg-[#0f62fe]/10 text-[#0f62fe] border border-[#0f62fe]/20">
                    <span className="font-bold text-sm tracking-wider">IBM</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                    IBM AI Engineering Professional Certificate
                  </h3>
                </div>
                <p className="text-gray-400 font-light mb-6 flex items-center gap-2">
                  Issued by IBM via Coursera
                </p>

                {/* Expandable Accordion */}
                <button 
                  onClick={() => setIsIbmExpanded(!isIbmExpanded)}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2 focus:outline-none"
                >
                  <span className="w-4 h-4 flex items-center justify-center border border-white/30 rounded-full text-[10px]">
                    {isIbmExpanded ? "-" : "+"}
                  </span>
                  {isIbmExpanded ? "Hide Curriculum" : "View Curriculum (10 Courses)"}
                </button>

                <AnimatePresence>
                  {isIbmExpanded && (
                    <motion.div 
                      key="ibm-courses"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 pb-2">
                        <ol className="list-decimal list-inside space-y-3 text-gray-400 font-light text-sm md:text-base border-l border-white/5 pl-4 ml-2">
                          {ibmCourses.map((course, i) => (
                            <li key={i} className="pl-2">
                              <span className="text-gray-300">{course}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Certificate Link Field */}
            <div className="mt-10 pt-6 border-t border-white/5 flex">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 gap-2"
              >
                View Certificate <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Stanford Machine Learning Specialization */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group relative flex flex-col rounded-3xl p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:shadow-[inset_0_0_80px_rgba(255,255,255,0.03)] transition-all duration-500 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#8c1515]/10 text-red-500 border border-[#8c1515]/20">
                    <SiCoursera className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                    Machine Learning Specialization
                  </h3>
                  
                  {/* In Progress Badge */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold tracking-wide uppercase mt-2 md:mt-0 ml-auto md:ml-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    In Progress
                  </div>
                </div>
                
                <p className="text-gray-400 font-light text-lg">
                  Stanford University
                </p>
              </div>

            </div>

            {/* Progress Note Field */}
            <div className="mt-8 pt-6 border-t border-white/5 flex">
              <div className="flex items-center gap-3 text-white/60 font-mono text-sm">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                Currently enrolled · Andrew Ng
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
