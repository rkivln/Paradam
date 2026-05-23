import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function MeshAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Map to values relative to window size
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform coordinates for individual color blobs to create offset and parallax
  const x1 = useTransform(springX, (x) => `${x * 0.6 + 10}%`);
  const y1 = useTransform(springY, (y) => `${y * 0.6 + 15}%`);

  const x2 = useTransform(springX, (x) => `${100 - x * 0.7 - 5}%`);
  const y2 = useTransform(springY, (y) => `${100 - y * 0.5 - 15}%`);

  const x3 = useTransform(springX, (x) => `${x * 0.5 + 40}%`);
  const y3 = useTransform(springY, (y) => `${y * 0.7 + 20}%`);

  return (
    <div className="fixed inset-0 -z-10 bg-pitch-black overflow-hidden pointer-events-none select-none">
      {/* Heavy mesh colors */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full bg-neon-pink/35 blur-[120px] mix-blend-screen opacity-70"
        style={{ left: x1, top: y1 }}
      />
      <motion.div
        className="absolute w-[45vw] h-[45vw] rounded-full bg-neon-purple/35 blur-[140px] mix-blend-screen opacity-70"
        style={{ left: x2, top: y2 }}
      />
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full bg-neon-blue/30 blur-[130px] mix-blend-screen opacity-60"
        style={{ left: x3, top: y3 }}
      />
      
      {/* Secondary slow animating accents for depth */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-neon-yellow/10 blur-[150px] animate-fluid-1 mix-blend-color-dodge" />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-neon-green/8 blur-[160px] animate-fluid-2 mix-blend-screen" />
      <div className="absolute top-[50%] left-[45%] w-[30vw] h-[30vw] rounded-full bg-neon-pink/10 blur-[140px] animate-fluid-3 mix-blend-screen" />

      {/* Grid overlay for structural rhythm */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
}
