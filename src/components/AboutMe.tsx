"use client";

import ScrollRevealText from "./ScrollRevealText";

export default function AboutMe() {
  const p1 = "Hey, I'm Shlok double majoring in math + cs because apparently I enjoy suffering. (I don't, I actually love it, which might be worse.)";
  const p4 = "my two current obsessions: machine learning and web development. basically i want to understand how the smart stuff works and make it look good doing it.";

  return (
    <section className="bg-[#121212] py-32 px-6 md:px-20 overflow-hidden flex justify-center items-center font-sans relative z-20">
      <div className="max-w-4xl lg:max-w-5xl w-full text-left">
        <ScrollRevealText
          containerClassName="mb-14"
          textClassName="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          wordAnimationEnd="bottom 50%"
        >
          {p1}
        </ScrollRevealText>


        <ScrollRevealText
          containerClassName=""
          textClassName="text-xl md:text-4xl font-medium tracking-tight text-gray-400 leading-tight"
          wordAnimationEnd="bottom 45%"
        >
          {p4}
        </ScrollRevealText>
      </div>
    </section>
  );
}
