import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-white/30 selection:text-white">
      {/* 
        ScrollyCanvas is a 500vh sticky container.
        It handles the image sequence + framer motion overlays.
      */}
      <ScrollyCanvas />

      {/* 
        Projects is the standard layout below the scrolly section.
      */}
      <Projects />
      
      {/* Simple Footer */}
      <footer className="w-full bg-[#0a0a0a] py-8 text-center text-white/40 font-mono text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Shlok Chatterjee. All rights reserved.</p>
      </footer>
    </main>
  );
}
