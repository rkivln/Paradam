import React, { useRef } from "react";
import { motion, useSpring } from "motion/react";

interface MagneticWrapperProps {
  children: React.ReactElement;
  pullFactor?: number;
}

export default function MagneticWrapper({ children, pullFactor = 0.35 }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 90, damping: 14 });
  const y = useSpring(0, { stiffness: 90, damping: 14 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Relative distance from the center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Pull the element inside its bounds
    x.set(distanceX * pullFactor);
    y.set(distanceY * pullFactor);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {React.cloneElement(children, {
        transition: { type: "spring", stiffness: 150, damping: 15 }
      })}
    </motion.div>
  );
}
