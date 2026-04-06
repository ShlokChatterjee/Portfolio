"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { icon: FaGithub, href: "https://github.com/ShlokChatterjee" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shlok-chatterjee-974111345" },
];

export default function Header() {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3">
      {/* Nav Container without white background */}
      <div className="flex gap-4">
        {links.map((link, index) => (
          <NavItem key={index} Icon={link.icon} href={link.href} />
        ))}
      </div>
    </div>
  );
}

function NavItem({ Icon, href }: { Icon: any; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-full bg-[#0a0a0a] w-[60px] h-[60px] flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanding White Circle Background */}
      <motion.div
        className="absolute bg-white rounded-full z-0 pointer-events-none"
        initial={{ width: "0%", paddingTop: "0%", y: "50%" }}
        animate={{
          width: isHovered ? "150%" : "0%",
          paddingTop: isHovered ? "150%" : "0%",
          y: isHovered ? "0%" : "50%",
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ left: "50%", bottom: "-20%", x: "-50%" }}
      />
      
      {/* Icon Stack */}
      <div className="relative z-10 flex flex-col h-[26px] overflow-hidden items-center justify-center">
        <motion.span
          className="text-white block h-[26px] flex items-center justify-center"
          initial={{ y: "0%" }}
          animate={{ y: isHovered ? "-100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon className="w-6 h-6" />
        </motion.span>
        
        <motion.span
          className="text-black absolute top-[26px] block h-[26px] flex items-center justify-center"
          initial={{ y: "0%" }}
          animate={{ y: isHovered ? "-100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon className="w-6 h-6" />
        </motion.span>
      </div>
    </Link>
  );
}
