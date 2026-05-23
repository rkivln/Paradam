import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { TeamMember } from "../types";
import { Sparkles, Star, Anchor, HelpCircle, Flame, Wind, Droplets, Landmark } from "lucide-react";

const TEAM_DATA: TeamMember[] = [
  {
    id: "t1",
    name: "Serafina Black",
    role: "Cosmic Founder & Visual Alchemist",
    astrology: "Scorpio ♏",
    alignment: "963 Hz Alpha Source",
    element: "Water",
    image: "linear-gradient(220deg, #ff007f 0%, #1e1e24 100%)"
  },
  {
    id: "t2",
    name: "Julian Vance",
    role: "Lead Interactive Engineer",
    astrology: "Aquarius ♒",
    alignment: "528 Hz Space Plan",
    element: "Air",
    image: "linear-gradient(220deg, #00f0ff 0%, #171520 100%)"
  },
  {
    id: "t3",
    name: "Zephyr Thorne",
    role: "Psychoacoustics Architect",
    astrology: "Leo ♌",
    alignment: "432 Hz Solfeggio Scale",
    element: "Fire",
    image: "linear-gradient(220deg, #fffb00 0%, #1f1d15 100%)"
  },
  {
    id: "t4",
    name: "Lyra Sol",
    role: "Creative Director of Spaces",
    astrology: "Taurus ♉",
    alignment: "741 Hz Spatial Geometry",
    element: "Earth",
    image: "linear-gradient(220deg, #9d00ff 0%, #1a1525 100%)"
  }
];

const getElementIcon = (element: string) => {
  switch (element) {
    case "Fire": return <Flame className="w-4 h-4 text-neon-pink" />;
    case "Water": return <Droplets className="w-4 h-4 text-neon-blue" />;
    case "Air": return <Wind className="w-4 h-4 text-neon-green" />;
    case "Earth": return <Landmark className="w-4 h-4 text-neon-yellow" />;
    default: return <Sparkles className="w-4 h-4" />;
  }
};

interface TeamCardProps {
  member: TeamMember;
  key?: React.Key;
}

function TeamCard({ member }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Normalized mouse coordinates from 0 to 1 inside the card bounds
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 120, damping: 18 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Map mouse positions to 3D Rotation coordinates (degrees of angle deviation)
  const rotateX = useTransform(springY, [0, 1], [15, -15]);
  const rotateY = useTransform(springX, [0, 1], [-15, 15]);

  // Subtle gloss sheen effect coordinate transforms
  const sheenX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(springY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative liquid-glass rounded-3xl p-6 md:p-8 aspect-[4/5] flex flex-col justify-between overflow-hidden cursor-crosshair group transition-all duration-300 hover:border-white/[0.22]"
    >
      {/* Sheen effect reflection overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.045] to-transparent pointer-events-none"
        style={{
          left: sheenX,
          top: sheenY,
        }}
      />

      {/* Astro elemental details header */}
      <div className="flex justify-between items-start z-10" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/[0.05]">
          {getElementIcon(member.element)}
          <span className="font-mono text-[9px] uppercase text-zinc-400 tracking-wider">
            {member.element} ELEMENT
          </span>
        </div>
        <span className="font-mono text-[10px] text-zinc-500 bg-black/40 px-2.5 py-1 rounded-full border border-white/[0.05]">
          {member.astrology}
        </span>
      </div>

      {/* Futuristic energetic abstract portrait block */}
      <div 
        className="w-full h-36 rounded-2xl my-6 flex items-center justify-center relative overflow-hidden shadow-inner border border-white/[0.03]"
        style={{ 
          background: member.image,
          transform: "translateZ(30px)" 
        }}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] mix-blend-overlay" />
        <Star className="w-12 h-12 text-white/10 group-hover:rotate-180 group-hover:scale-125 transition-all duration-1000" />
        
        {/* Glow point */}
        <div className="absolute w-20 h-20 bg-white/20 blur-2xl rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700" />
      </div>

      {/* Description metadata footer */}
      <div className="z-10" style={{ transform: "translateZ(40px)" }}>
        <span className="font-mono text-[10px] text-neon-pink tracking-wider uppercase mb-1 block">
          {member.alignment}
        </span>
        <h3 className="text-xl md:text-2xl font-display font-extrabold uppercase text-white leading-tight">
          {member.name}
        </h3>
        <p className="font-space text-zinc-400 text-xs mt-1.5 leading-snug">
          {member.role}
        </p>

        {/* Alignment diagnostic checklist */}
        <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[8px] font-mono text-zinc-650 group-hover:text-zinc-500 transition-colors">
          <span>COSMIC SIGN OFF: DONE</span>
          <span className="text-neon-green">ACTIVE</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamGrid() {
  return (
    <section className="relative py-28 px-6 md:px-24 bg-[#050505]/40 z-30 overflow-hidden" id="team">
      <div className="max-w-7xl mx-auto">
        
        {/* Absolute indicators */}
        <div className="absolute top-10 left-12 md:left-24 font-mono text-[10px] text-zinc-500 tracking-[0.25em] uppercase hidden md:flex items-center gap-3">
          <span>ASTROLOGICAL SYSTEMS / VECTOR STAFF</span>
          <span className="w-1.5 h-1.5 rounded-full bg-neon-pink inline-block animate-ping"></span>
        </div>

        {/* Big banner typography */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
            Hold the Vision
          </h2>
          <p className="mt-4 font-space text-lg text-zinc-400 max-w-xl">
            Meet the multi-dimensional consciousness nodes powering Paradam Studios. We operate under explicit mathematical and celestial alignment.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 [perspective:1000px]">
          {TEAM_DATA.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
