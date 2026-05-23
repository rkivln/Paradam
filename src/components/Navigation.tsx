import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticWrapper from "./MagneticWrapper";
import { Menu, X, Orbit, Volume2, VolumeX, ShieldCheck } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Dynamic system telemetry clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const stringTime = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "UTC"
      }) + " UTC";
      setTime(stringTime);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track window scroll to change header opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 border-b ${
          scrolled 
            ? "bg-zinc-950/70 border-white/[0.08] backdrop-blur-xl py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Brand Vector */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border border-neon-pink group-hover:rotate-18deg rounded-lg transition-transform duration-500" />
              <div className="absolute inset-1.5 border border-dashed border-neon-blue group-hover:rotate-[-45deg] rounded-md transition-transform duration-500" />
              <Orbit className="w-3.5 h-3.5 text-white active:scale-110" />
            </div>
            <span className="font-display font-extrabold text-lg uppercase tracking-[0.1em] text-white">
              PARADAM<span className="text-neon-pink">.</span>
            </span>
          </div>

          {/* Desktop Central Links (Magnetic where appropriate) */}
          <nav className="hidden md:flex items-center gap-10 font-mono text-xs tracking-wider">
            <button
              onClick={() => handleLinkClick("services")}
              className="text-zinc-400 hover:text-neon-blue transition-colors duration-300 relative uppercase"
            >
              [Services]
            </button>
            <button
              onClick={() => handleLinkClick("work")}
              className="text-zinc-400 hover:text-neon-pink transition-colors duration-300 relative uppercase"
            >
              [Showcase]
            </button>
            <button
              onClick={() => handleLinkClick("team")}
              className="text-zinc-400 hover:text-neon-yellow transition-colors duration-300 relative uppercase"
            >
              [Celestial_Nodes]
            </button>
            <MagneticWrapper pullFactor={0.25}>
              <button
                onClick={() => handleLinkClick("contact")}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-mono hover:bg-white/10 hover:border-neon-pink transition-all duration-300 uppercase"
              >
                Sync_Port
              </button>
            </MagneticWrapper>
          </nav>

          {/* Right Status Meta Indicators (UTC Time + Satellite Ingress) */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-[10px] text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-ping" />
              <span className="text-zinc-400">{time}</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/[0.08] pl-5">
              <span>FREQUENCY: 528HZ</span>
            </div>
          </div>

          {/* Mobile Hamburg Trigger icon */}
          <div className="flex md:hidden items-center gap-4">
            <span className="font-mono text-[9px] text-zinc-400 bg-white/5 border border-white/10 px-2 py-1 rounded">
              {time.split(" ")[0]}
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-white/5 rounded-lg border border-white/10 text-white focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer Overlay Grid Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#050505]/95 z-[90] flex flex-col justify-center px-10 pb-16 pt-24 border-b border-white/[0.08]"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-[-1]" />
            <div className="absolute bottom-10 right-6 font-mono text-[8px] text-zinc-700 tracking-widest text-right">
              PARADAM BOUTIQUE SYSTEM // MOBILE INGRESS v1.2
            </div>

            <nav className="flex flex-col gap-6 text-3xl font-display font-extrabold uppercase text-left">
              <button
                onClick={() => handleLinkClick("services")}
                className="text-zinc-500 hover:text-white transition-all text-left group flex items-center justify-between"
              >
                <span>Services</span>
                <span className="text-xs font-mono text-neon-pink opacity-0 group-hover:opacity-100 transition-opacity">[01]</span>
              </button>
              <button
                onClick={() => handleLinkClick("work")}
                className="text-zinc-500 hover:text-white transition-all text-left group flex items-center justify-between"
              >
                <span>Ecosystem Work</span>
                <span className="text-xs font-mono text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity">[02]</span>
              </button>
              <button
                onClick={() => handleLinkClick("team")}
                className="text-zinc-500 hover:text-white transition-all text-left group flex items-center justify-between"
              >
                <span>Celestial Team</span>
                <span className="text-xs font-mono text-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity">[03]</span>
              </button>
              <button
                onClick={() => handleLinkClick("contact")}
                className="text-zinc-500 hover:text-white transition-all text-left group flex items-center justify-between"
              >
                <span>Connect Gateway</span>
                <span className="text-xs font-mono text-neon-green opacity-0 group-hover:opacity-100 transition-opacity">[04]</span>
              </button>
            </nav>

            <div className="mt-14 pt-8 border-t border-white/[0.08] flex gap-4">
              <span className="font-mono text-[9px] text-zinc-500">TELEMETRY LINK: ACTIVE</span>
              <span className="font-mono text-[9px] text-[#00f0ff] uppercase">{time}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
