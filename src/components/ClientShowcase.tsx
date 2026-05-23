import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, ShieldCheck, Flame, Compass, HelpCircle } from "lucide-react";
import { Client } from "../types";

// Dynamic generated paths from image generation
const CLIENTS_DATA: Client[] = [
  {
    id: "c1",
    name: "Seed Co",
    tagline: "Cellular Biotech & High-Fidelity Feeds",
    service: "Brand Strategy // Digital Experience",
    year: "2025",
    image: "/src/assets/images/seed_client_1779505994888.png",
    accent: "text-neon-green"
  },
  {
    id: "c2",
    name: "Organic Olivia",
    tagline: "Herbal Remedies & Cultural Wellness",
    service: "Art Direction // E-Commerce Architecture",
    year: "2026",
    image: "/src/assets/images/olivia_client_1779506014902.png",
    accent: "text-neon-pink"
  },
  {
    id: "c3",
    name: "Tia Mowry",
    tagline: "Radiant Lifestyle & Curated Narratives",
    service: "Digital Strategy // Core Platform Build",
    year: "2025",
    image: "/src/assets/images/tia_client_1779506031566.png",
    accent: "text-neon-yellow"
  },
  {
    id: "c4",
    name: "Paradam Spectra",
    tagline: "Holographic Grids & Quantum Spatial Models",
    service: "Cryptoacoustic Identity // WebGL Build",
    year: "2026",
    image: "/src/assets/images/spectra_client_1779506055490.png",
    accent: "text-neon-blue"
  }
];

export default function ClientShowcase() {
  const [hoveredClient, setHoveredClient] = useState<Client | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values to track the cursor relative to viewport
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations to smooth the image following the mouse
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset the image preview so it centers on the client pointer
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      
      mouseX.set(relativeX);
      mouseY.set(relativeY);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 md:px-24 bg-[#050505]/60 z-30 overflow-hidden" 
      id="work"
    >
      {/* Decorative vertical coordinates and system status */}
      <div className="absolute top-10 left-12 md:left-24 font-mono text-[10px] text-zinc-500 tracking-[0.25em] uppercase hidden md:flex items-center gap-3">
        <span>WORK SHOWCASE / CREATIVE VECTORS</span>
        <span className="w-1.5 h-1.5 rounded-full bg-neon-blue inline-block animate-pulse"></span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
            Selected Work
          </h2>
          <p className="mt-4 font-space text-lg text-zinc-400 max-w-xl">
            Hover over each partner to ignite high-resolution visual frequencies, reflecting the brand's metaphysical core.
          </p>
        </div>

        {/* Client Rows List */}
        <div className="relative mt-12 border-t border-white/[0.08]">
          {CLIENTS_DATA.map((client) => (
            <div
              key={client.id}
              onMouseEnter={() => setHoveredClient(client)}
              onMouseLeave={() => setHoveredClient(null)}
              data-cursor-text="Inspect"
              className="group py-6 md:py-10 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 hover:pl-4 hover:bg-white/[0.01]"
            >
              
              {/* Left Column: Client Index & Title */}
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-mono text-zinc-600 text-sm md:text-base tracking-wider">
                  [{client.id.replace('c', '0')}]
                </span>
                <div>
                  <h3 className="text-3xl sm:text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-400">
                    {client.name}
                  </h3>
                  <p className="font-mono text-xs text-zinc-500 mt-2 block md:hidden">
                    {client.tagline}
                  </p>
                </div>
              </div>

              {/* Middle Column: Services details */}
              <div className="mt-4 md:mt-0 md:w-1/3 text-left">
                <span className="font-space text-sm text-zinc-400 tracking-wide uppercase block">
                  {client.service}
                </span>
                <span className="font-mono text-xs text-zinc-600 tracking-wider block mt-1 uppercase">
                  ACTIVE DEPLOYMENT : {client.year}
                </span>
              </div>

              {/* Right Column: Arrow indicator */}
              <div className="mt-4 md:mt-0 flex items-center justify-between md:justify-end gap-3 text-zinc-600 group-hover:text-white transition-colors duration-300">
                <span className="font-mono text-[9px] uppercase tracking-widest hidden md:inline group-hover:text-neon-pink">
                  VIEW ENERGY PORT
                </span>
                <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              
            </div>
          ))}

          {/* Floating Image Hover Reveal Window Container */}
          <motion.div
            className="absolute pointer-events-none z-50 left-0 top-0 rounded-2xl overflow-hidden shadow-2xl origin-center h-[280px] w-[380px] border border-white/20 select-none hidden md:block"
            style={{
              x: springX,
              y: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              opacity: hoveredClient ? 1 : 0,
              scale: hoveredClient ? 1 : 0.82,
              rotate: hoveredClient ? (hoveredClient.id === "c1" ? -3 : hoveredClient.id === "c2" ? 4 : hoveredClient.id === "c3" ? -4 : 3) : 0,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Blurring liquid overlay behind background */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 pointer-events-none" />

            {/* Accent colored indicator line */}
            <div className="absolute top-0 inset-x-0 h-1.5 z-20 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue" />

            {/* Displaying client category in preview overlay */}
            {hoveredClient && (
              <>
                <img
                  src={hoveredClient.image}
                  referrerPolicy="no-referrer"
                  alt={hoveredClient.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[30%] brightness-[80%]"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col justify-end p-4 rounded-xl liquid-glass">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    {hoveredClient.tagline}
                  </span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-display text-lg font-bold text-white uppercase">
                      {hoveredClient.name}
                    </span>
                    <span className="font-mono text-xs text-neon-pink">
                      {hoveredClient.year}
                    </span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
