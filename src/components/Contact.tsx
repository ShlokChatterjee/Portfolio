"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    setIsSent(true);

    const mailto = `mailto:shlokchatterjee33@gmail.com?subject=Portfolio Inquiry from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Slight delay to show success state before opening email client
    setTimeout(() => {
      window.location.href = mailto;
      e.currentTarget?.reset();
      setTimeout(() => setIsSent(false), 4000);
    }, 600);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#121212] text-white z-30">

        {/* Left Panel: Contact Form */}
        <div className="flex-1 flex flex-col justify-center py-20 px-6 md:py-20 md:pl-20 md:pr-16 lg:pr-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-bold tracking-tight text-white leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Let&apos;s build a cool<br />project together!
            </h2>
          </motion.div>

          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 md:gap-10 max-w-2xl"
          >
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div variants={itemVariants} className="flex flex-col">
                <label htmlFor="name" className="text-white/60 text-[0.8rem] font-medium mb-2 uppercase tracking-wide">
                  Your name <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  required
                  className="bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white transition-colors duration-200 placeholder:text-white/20"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col">
                <label htmlFor="email" className="text-white/60 text-[0.8rem] font-medium mb-2 uppercase tracking-wide">
                  Your email <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  className="bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white transition-colors duration-200 placeholder:text-white/20"
                />
              </motion.div>
            </div>

            {/* Row 2: Message */}
            <motion.div variants={itemVariants} className="flex flex-col">
              <label htmlFor="message" className="text-white/60 text-[0.8rem] font-medium mb-2 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type here..."
                className="bg-transparent text-white border-b border-white/20 pb-3 min-h-[120px] resize-y focus:outline-none focus:border-white transition-colors duration-200 placeholder:text-white/20"
              />
            </motion.div>

            {/* Send Button */}
            <motion.div variants={itemVariants} className="flex justify-end mt-4">
              <button
                type="submit"
                disabled={isSent}
                className="bg-white text-black font-bold py-3 px-8 rounded-full border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSent ? "Message sent! I'll be in touch." : "Send"}
              </button>
            </motion.div>
          </motion.form>
        </div>

        {/* Right Panel: Visual Card */}
        <div className="flex-1 relative min-h-[50vh] md:min-h-screen bg-[#121212] md:rounded-l-[24px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/contact-portrait.png"
            alt="Portrait"
            fill
            className="absolute inset-0 object-cover object-[center_top]"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.5)] to-transparent" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)" }} />

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-10 lg:p-16"
          >
            <p className="font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              "The right opportunity hasn&apos;t found me yet. <br />Maybe it&apos;s you."
            </p>
            <p className="text-white/60 italic text-sm md:text-base">
              &mdash; Shlok
            </p>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="w-full bg-[#121212] py-6 text-center text-white/30 text-[0.75rem] tracking-wide relative z-30 font-mono">
        <p>&copy; {new Date().getFullYear()} Shlok Chatterjee</p>
      </footer>
    </>
  );
}
