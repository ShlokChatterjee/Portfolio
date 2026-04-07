"use client";

import { motion } from "framer-motion";

const CircularProgress = ({ percentage, colorClass }: { percentage: number, colorClass: string }) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
      {/* Background Track */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle 
          cx="32" 
          cy="32" 
          r={radius} 
          className="stroke-white/5 fill-none" 
          strokeWidth="3" 
        />
        {/* Progress Fill */}
        <motion.circle 
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          cx="32" 
          cy="32" 
          r={radius} 
          className={`fill-none ${colorClass}`} 
          strokeWidth="3" 
          strokeLinecap="round"
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      {/* Text Inside */}
      <span className="text-sm font-bold text-white tabular-nums tracking-tighter">
        {percentage}%
      </span>
    </div>
  );
};

export default function Education() {
  return (
    <section id="education" className="relative w-full bg-[#121212] py-24 md:py-32 px-6 flex justify-center z-30">
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
              Education
            </h2>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10">
          
          {/* Continuous Left Rail */}
          <div className="absolute left-[7px] md:left-[11px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <div className="flex flex-col gap-10">
            
            {/* Timeline Node 1: UPEI */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              {/* Glowing Node Marker */}
              <div className="absolute -left-[30px] md:-left-[46px] top-6 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)] border-2 border-[#121212] ring-2 ring-green-500/20" />
              
              {/* Card Content */}
              <div className="flex flex-col rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.02)] transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-white tracking-tight">
                        University of Prince Edward Island
                      </h3>
                      {/* Current Status Badge */}
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wide uppercase mt-1 md:mt-0">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Current
                      </div>
                    </div>
                    
                    <p className="text-gray-300 font-medium text-lg leading-relaxed mb-4">
                      BSc in Science &mdash; Major: Computer Science &amp; Mathematics
                    </p>
                    
                    <div className="flex items-center gap-2 text-white/50 text-sm font-light">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      Charlottetown, PE, Canada
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Node 2: AISSCE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -left-[30px] md:-left-[46px] top-6 w-3 h-3 rounded-full bg-white/40 border-2 border-[#121212] transition-colors duration-300 group-hover:bg-white/80" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                    AISSCE Board Examination
                  </h3>
                  <p className="text-gray-400 font-light">
                    Achievement: Grade 12
                  </p>
                </div>
                {/* 92% Ring */}
                <CircularProgress percentage={92} colorClass="stroke-blue-400" />
              </div>
            </motion.div>

            {/* Timeline Node 3: AISSE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -left-[30px] md:-left-[46px] top-6 w-3 h-3 rounded-full bg-white/40 border-2 border-[#121212] transition-colors duration-300 group-hover:bg-white/80" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500">
                <div>
                  <h3 className="text-xl font-semibold text-white tracking-tight mb-1">
                    AISSE Board Examination
                  </h3>
                  <p className="text-gray-400 font-light">
                    Achievement: Grade 10
                  </p>
                </div>
                {/* 94% Ring */}
                <CircularProgress percentage={94} colorClass="stroke-purple-400" />
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
