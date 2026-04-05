"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, MessagesSquare, Clapperboard, HeartHandshake } from "lucide-react";

export default function Extras() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40, y: 20 },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const cardRightVariants: Variants = {
    hidden: { opacity: 0, x: 40, y: 20 },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative w-full bg-[#121212] py-24 md:py-32 px-6 flex justify-center z-30">
      
      {/* Easter Egg Keyframes inside a style tag */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes small-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .group:hover .animate-small-bounce {
          animation: small-bounce 0.6s ease-in-out infinite;
        }

        @keyframes scan-sweep {
          0% { transform: translateX(-100%); opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        .group:hover .animate-scan-sweep {
          animation: scan-sweep 0.6s linear;
        }
      `}} />

      <div className="max-w-5xl mx-auto w-full">
        
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tracking-tight mb-4">
            Beyond the Code
          </h2>
          <div className="w-[60px] h-[2px] bg-white/20 mb-6 rounded-full" />
          <p className="text-white/60 text-lg md:text-xl italic font-light">
            Where curiosity meets community.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Card 1: Squash */}
          <motion.div variants={cardLeftVariants} className="group relative flex flex-col rounded-2xl p-8 bg-white/[0.04] backdrop-blur-[12px] border border-white/[0.08] transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:border-[#34D399]/40 hover:shadow-[0_0_24px_rgba(52,211,153,0.2)]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#34D399]" />
            <div className="mb-6 text-[#34D399]">
              <Trophy size={48} className="transition-transform duration-500 group-hover:rotate-6 animate-small-bounce" />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">
              Squash Club Executive
            </h3>
            <p className="text-white/60 font-light leading-relaxed">
              Helped organise tournaments, coordinate scheduling, and grow the club community &mdash; balancing competitive sport with team culture.
            </p>
          </motion.div>

          {/* Card 2: Student Council */}
          <motion.div variants={cardRightVariants} className="group relative flex flex-col rounded-2xl p-8 bg-white/[0.04] backdrop-blur-[12px] border border-white/[0.08] transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:border-[#4F8EF7]/40 hover:shadow-[0_0_24px_rgba(79,142,247,0.2)]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#4F8EF7]" />
            <div className="mb-6 text-[#4F8EF7]">
              <MessagesSquare size={48} className="transition-transform duration-500 group-hover:rotate-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">
              Student Council Member
            </h3>
            <p className="text-white/60 font-light leading-relaxed">
              Represented student interests, shaped campus policy, and built leadership through collaborative governance.
            </p>
          </motion.div>

          {/* Card 3: Film Winner */}
          <motion.div variants={cardLeftVariants} className="group relative flex flex-col rounded-2xl p-8 bg-white/[0.04] backdrop-blur-[12px] border border-white/[0.08] transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:border-[#F5A623]/40 hover:shadow-[0_0_24px_rgba(245,166,35,0.2)]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#F5A623]" />
            
            {/* Scan-line sweep easter egg */}
            <div className="absolute inset-0 pointer-events-none opacity-0 mix-blend-overlay animate-scan-sweep bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent w-[30%]" />

            <div className="mb-6 text-[#F5A623]">
              <Clapperboard size={48} className="transition-transform duration-500 group-hover:rotate-6" />
            </div>

            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-3">
                National Short Film Winner
              </h3>
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70">
                🇮🇳 India
              </div>
            </div>

            <p className="text-white/60 font-light leading-relaxed">
              Directed and produced a short film recognised at the national level &mdash; merging visual storytelling with creative direction.
            </p>
          </motion.div>

          {/* Card 4: SMCS Volunteer */}
          <motion.div variants={cardRightVariants} className="group relative flex flex-col rounded-2xl p-8 bg-white/[0.04] backdrop-blur-[12px] border border-white/[0.08] transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:border-[#A78BFA]/40 hover:shadow-[0_0_24px_rgba(167,139,250,0.2)]">
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#A78BFA]" />
            <div className="mb-6 text-[#A78BFA]">
              <HeartHandshake size={48} className="transition-transform duration-500 group-hover:rotate-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight mb-4">
              Volunteer &mdash; SMCS Society Events
            </h3>
            <p className="text-white/60 font-light leading-relaxed">
              Contributed to the organisation and execution of Science, Math, and Computer Science society events &mdash; fostering academic community on campus.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
