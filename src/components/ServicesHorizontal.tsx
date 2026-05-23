import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Service } from "../types";
import { Sparkles, Brain, Cpu, Orbit, ArrowRight } from "lucide-react";

const SERVICES_DATA: Service[] = [
  {
    id: "01",
    title: "Brand Energetics",
    subtitle: "Identity & Consciousness Alignment",
    description: "Deciphering collective cultural movements to program hyper-expressive identities. We do not build standard guidelines; we synthesize visual belief systems.",
    tags: ["Semiotic Auditing", "Sonic Branding", "Visual Archetypes", "Bespoke Typography"],
    vibeFrequency: "963 Hz"
  },
  {
    id: "02",
    title: "Heavy Development",
    subtitle: "Web Efficacy & Spatial Experience",
    description: "Engineering high-traffic, hyper-functional frontend ecosystems that behave like living digital organisms. Absolute adherence to pristine 60FPS animations.",
    tags: ["React & Framer", "WebGL & Canvases", "Fluid Interactive Tech", "E-Commerce Engines"],
    vibeFrequency: "528 Hz"
  },
  {
    id: "03",
    title: "Psychedelic Art Direction",
    subtitle: "Immersive Narrative Paradigms",
    description: "Guiding the cultural vanguard with collage imagery, irregular layouts, and physical-digital textures. We blur the lines between reality and simulation.",
    tags: ["3D Environment Design", "Cinematic Production", "Eclectic Visual Collaging", "Generative Assets"],
    vibeFrequency: "432 Hz"
  },
  {
    id: "04",
    title: "Quantum Marketing",
    subtitle: "Multi-Dimensional Amplification",
    description: "Stepping beyond standard ad networks. We design high-frequency narrative cascades that organically trigger cultural relevance and self-sustaining growth.",
    tags: ["Resonance Strategy", "Viral Engineering", "Algorithmic Ingress", "Hyper-Targeting"],
    vibeFrequency: "741 Hz"
  }
];

const getIcon = (id: string) => {
  switch (id) {
    case "01": return <Orbit className="w-8 h-8 text-neon-pink" />;
    case "02": return <Cpu className="w-8 h-8 text-neon-blue" />;
    case "03": return <Brain className="w-8 h-8 text-neon-purple" />;
    case "04": return <Sparkles className="w-8 h-8 text-neon-yellow" />;
    default: return <Sparkles className="w-8 h-8" />;
  }
};

export default function ServicesHorizontal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside container Ref
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Map scroll progress (0 to 1) to horizontal translation (0% to -75%)
  // Adjusted slightly to leave spacing on the last slide
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="relative h-[300vh]" id="services">
      {/* Sticky viewport content */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background labels/decorations */}
        <div className="absolute top-[12%] left-12 md:left-24 font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-500 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-neon-pink animate-ping"></span>
          <span>SYSTEM OFFERINGS : HIGH FREQUENCY ECOLOGIES</span>
        </div>

        <div className="absolute top-[12%] right-12 md:right-24 font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-500 hidden sm:block">
          SCROLL TO EXPAND [↓]
        </div>

        <div className="px-12 md:px-24 mb-6">
          <h2 className="text-4xl md:text-7xl font-display font-extrabold uppercase tracking-tight max-w-4xl text-white leading-none">
            The Awakening
          </h2>
          <p className="mt-4 font-space text-lg text-zinc-400 max-w-xl">
            We bypass archaic templates to program immersive virtual worlds. Each service acts as a high-fidelity vector for your brand’s future state.
          </p>
        </div>

        {/* Horizontal Container sliding horizontally */}
        <div className="relative mt-4 flex items-center">
          <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 md:w-[400vw]">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="w-[85vw] sm:w-[450px] md:w-[500px] flex-shrink-0 liquid-glass rounded-2xl p-8 md:p-10 relative overflow-hidden group select-none transition-all duration-500 hover:border-zinc-400/30"
              >
                {/* Visual grid accent inside the card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none rounded-bl-full" />
                
                {/* Astrological frequency marker */}
                <div className="absolute top-6 right-8 font-mono text-xs text-zinc-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                  <span>{service.vibeFrequency}</span>
                </div>

                {/* Service numeric index */}
                <div className="font-mono text-zinc-600 text-sm tracking-wider mb-6">
                  [{service.id}]
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform duration-500">
                    {getIcon(service.id)}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight leading-tight uppercase group-hover:text-neon-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-neon-pink tracking-wider uppercase mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-[15px] leading-relaxed text-zinc-400 mt-6 min-h-[90px]">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.05] rounded-full group-hover:border-zinc-600/30 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Slide Action Hover arrow */}
                <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center justify-between text-zinc-500 group-hover:text-white transition-colors duration-300">
                  <span className="font-mono text-[10px] tracking-widest uppercase">TUNING SYNAPSE</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer info of pinned container */}
        <div className="absolute bottom-[8%] left-12 md:left-24 flex items-center gap-6 font-mono text-[10px] text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="w-4 h-[1px] bg-zinc-700"></span>
            <span>ECOSYSTEM INTEGRITY: 100%</span>
          </div>
          <div>ESTABLISHED PARADAM SYNAPSE</div>
        </div>

      </div>
    </div>
  );
}
