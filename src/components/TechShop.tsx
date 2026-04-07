"use client";

import { motion, Variants } from "framer-motion";
import {
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiNextdotjs, SiFramer, SiPython,
  SiNodedotjs, SiExpress, SiMongodb, SiGithub
} from "react-icons/si";
import { FaJava, FaDatabase, FaServer } from "react-icons/fa";
import OrbitImages from "../../Orbit/orbitimage";

const frontendSkills = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Framer Motion", Icon: SiFramer }
];

const backendSkills = [
  { name: "Java", Icon: FaJava },
  { name: "Python", Icon: SiPython },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "REST APIs", Icon: FaServer },
  { name: "SQL", Icon: FaDatabase },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Git & GitHub", Icon: SiGithub }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function TechShop() {
  return (
    <section id="techshop" className="relative w-full bg-[#121212] py-24 md:py-32 px-6 shadow-[-10px_-40px_100px_rgba(0,0,0,0.8)] z-30 flex flex-col items-center">

      {/* Container to restrict max width */}
      <div className="max-w-7xl mx-auto w-full relative">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-16 md:mb-24 w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden"
        >
          <OrbitImages
            responsive={true}
            images={[
              <SiReact key="1" className="text-[#61DAFB]" />,
              <SiTypescript key="2" className="text-[#3178C6]" />,
              <FaJava key="3" className="text-[#f89820]" />,
              <SiPython key="4" className="text-[#3776AB]" />,
              <SiNodedotjs key="5" className="text-[#339933]" />,
              <SiTailwindcss key="6" className="text-[#06B6D4]" />,
              <SiMongodb key="7" className="text-[#47A248]" />,
              <SiJavascript key="8" className="text-[#F7DF1E]" />
            ]}
            shape="ellipse"
            baseWidth={800}
            radiusX={250}
            radiusY={100}
            itemSize={48}
            duration={25}
            showPath={true}
            pathColor="rgba(255,255,255,0.08)"
            centerContent={
              <h2 className="text-5xl md:text-7xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 tracking-tight">
                Tech Shop
              </h2>
            }
          />
        </motion.div>

        {/* Split Layout Container */}
        <div className="flex flex-col md:flex-row relative gap-12 md:gap-0">

          {/* Vertical Glowing Divider (visible on desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#ffffff22] to-transparent -translate-x-1/2" />

          {/* Frontend Panel */}
          <div className="flex-1 md:pr-16 flex flex-col items-center md:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-6 py-2 mb-8 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <span className="text-white/80 font-mono text-sm tracking-widest uppercase">Frontend</span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 max-w-md"
            >
              {frontendSkills.map((skill, i) => (
                <SkillChip key={i} name={skill.name} Icon={skill.Icon} />
              ))}
            </motion.div>
          </div>

          {/* Backend Panel */}
          <div className="flex-1 md:pl-16 flex flex-col items-center md:items-start mt-8 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-6 py-2 mb-8 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <span className="text-white/80 font-mono text-sm tracking-widest uppercase">Backend</span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 max-w-md"
            >
              {backendSkills.map((skill, i) => (
                <SkillChip key={i} name={skill.name} Icon={skill.Icon} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillChip({ name, Icon }: { name: string; Icon: React.ElementType }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] 
                 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 ease-out cursor-default
                 hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    >
      <Icon className="text-white/50 group-hover:text-white transition-colors duration-300 text-lg" />
      <span className="text-white/70 group-hover:text-white transition-colors duration-300 text-sm font-medium">
        {name}
      </span>
    </motion.div>
  );
}
