import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import MagneticWrapper from "./MagneticWrapper";
import { ArrowDownRight, Compass, ShieldAlert, Sparkles, Terminal } from "lucide-react";

interface LetterRevealProps {
  text: string;
  delayOffset?: number;
}

function LetterReveal({ text, delayOffset = 0 }: LetterRevealProps) {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: delayOffset,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 34, rotate: 6 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-flex flex-wrap"
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block", originY: "100%" }}
          className={char === " " ? "mr-4" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-24 pt-24 pb-12 select-none">
      
      {/* Dynamic Background Grid Mesh */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-10" />

      {/* Hero Body Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 mt-10 lg:mt-0">
        
        {/* Left main typo text columns */}
        <div className="lg:col-span-8 flex flex-col items-start">
          
          {/* Aesthetic tag indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.1] rounded-full text-zinc-400 text-xs font-mono mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-neon-blue animate-pulse" />
            <span>METAVERSE REVOLUTION 2026 EDITION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neon-pink"></span>
          </motion.div>

          {/* Substantial Heading character stagger recall */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
            <div className="block text-zinc-500 overflow-hidden text-base sm:text-lg font-mono tracking-[0.2em] mb-4">
              [THE DIRECTIVE STATE]
            </div>
            <div className="overflow-hidden mb-1 block">
              <LetterReveal text="CONSTRUCTING" delayOffset={0.1} />
            </div>
            <div className="overflow-hidden mb-1 text-transparent text-stroke-neon block">
              <LetterReveal text="FUTURE HIGH" delayOffset={0.5} />
            </div>
            <div className="overflow-hidden block text-neon-pink">
              <LetterReveal text="FREQUENCIES." delayOffset={0.9} />
            </div>
          </h1>

          {/* Medium styled synopsis description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-6 font-space text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            We are an award-winning creative studio sitting at the collision of experimental digital craft, visceral maximalism, and uncompromised interactive technology.
          </motion.p>

          {/* Magnetic Actions Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-10 flex flex-wrap gap-6 items-center"
          >
            <MagneticWrapper>
              <button
                onClick={handleScrollToServices}
                data-cursor-text="Enter"
                className="px-8 py-4 bg-white text-zinc-950 font-space font-bold rounded-xl flex items-center gap-3 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] active:scale-95"
              >
                <span>Initiate Sequence</span>
                <ArrowDownRight className="w-5 h-5 text-zinc-950" />
              </button>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href="#contact"
                className="px-6 py-4 bg-transparent text-white border border-white/[0.15] font-space font-medium rounded-xl hover:bg-white/[0.05] transition-all duration-300 hover:border-white/[0.3]"
              >
                Sync Energetics
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>

        {/* Right floating eclectic maximalist mockup element card columns */}
        <div className="lg:col-span-4 relative flex items-center justify-center min-h-[350px]">
          
          {/* Animated liquid card back blur */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-neon-purple/20 to-neon-blue/20 blur-3xl pointer-events-none"
          />

          {/* Card 1: Main Tech floating module */}
          <motion.div
            initial={{ y: 50, opacity: 0, rotate: -3 }}
            animate={{ y: 0, opacity: 1, rotate: -4 }}
            style={{ y: yParallax }}
            transition={{ type: "spring", stiffness: 40, damping: 15, delay: 1.2 }}
            className="liquid-glass p-6 rounded-2xl w-[280px] sm:w-[320px] aspect-[4/5] flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-500">[SYSTEM SYNAPSE 1]</span>
              <span className="text-neon-pink text-xs font-mono animate-pulse">● LIVE_FEED</span>
            </div>

            <div className="my-auto py-4 flex flex-col items-center">
              {/* Central vector graphics representation */}
              <div className="relative w-28 h-28 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-neon-blue/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                  className="absolute inset-2 border border-dotted border-neon-pink/40 rounded-full"
                />
                <Compass className="w-10 h-10 text-neon-blue animate-pulse" />
              </div>
              <span className="font-space font-bold uppercase tracking-widest text-[#f3f4f6] mt-4 text-sm group-hover:text-neon-blue transition-colors duration-300">
                PARADAM_STUDIOS
              </span>
              <span className="font-mono text-[10px] text-zinc-500 mt-1">ALIGNMENT: COSMIC MAXIMALISM</span>
            </div>

            <div className="border-t border-white/[0.05] pt-4 flex justify-between items-center text-xs font-mono text-zinc-400">
              <span>LATENCY: 12ms</span>
              <span className="text-[#00f0ff]">963.8 Hz</span>
            </div>
          </motion.div>

          {/* Card 2: Brutalist collage badge floating below */}
          <motion.div
            initial={{ y: 80, x: 20, opacity: 0, rotate: 6 }}
            animate={{ y: 0, x: 0, opacity: 1, rotate: 8 }}
            transition={{ type: "spring", stiffness: 35, damping: 12, delay: 1.5 }}
            className="absolute bottom-[-10px] left-[-10px] sm:left-[20px] bg-zinc-950/90 border border-[#fffb00]/30 rounded-2xl p-4 w-[180px] shadow-2xl relative overflow-hidden group hover:border-[#fffb00]/80 transition-colors duration-500"
          >
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-[#fffb00]" />
              <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">DIAGNOSTIC STATUS</span>
            </div>
            <p className="font-space text-xs text-[#fffb00] font-bold uppercase leading-none">
              GUARANTEED EXPANSION ENGINE ACTIVE
            </p>
            <div className="mt-2 text-[9px] font-mono text-zinc-600">
              CORE STATUS: 60FPS SYNCHRONIZED
            </div>
          </motion.div>
        </div>
      </div>

      {/* Massive Outlined Background Title for brutalist maximalism scale */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full h-[25vw] flex items-center justify-center select-none pointer-events-none z-[1]">
        <h2 className="text-[14vw] font-display font-black leading-none uppercase text-stroke-neon opacity-[0.035] select-none tracking-widest">
          PARADAM
        </h2>
      </div>

    </section>
  );
}
