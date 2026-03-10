import HeroScene from "@/components/sections/HeroScene";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import TerminalContact from "@/components/sections/TerminalContact";

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen">
      <HeroScene />
      <About />
      <Projects />
      <TerminalContact />

      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-white/10 bg-black flex flex-col items-center justify-center relative z-20">
        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Designed & Built by Vikas Sharma</p>
        <p className="text-xs text-gray-700 font-mono">© {new Date().getFullYear()} — All Rights Reserved</p>
      </footer>
    </main>
  );
}
