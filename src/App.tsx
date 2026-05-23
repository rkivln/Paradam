import React, { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "./components/CustomCursor";
import MeshAnimation from "./components/MeshAnimation";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ServicesHorizontal from "./components/ServicesHorizontal";
import ClientShowcase from "./components/ClientShowcase";
import TeamGrid from "./components/TeamGrid";
import ContactForm from "./components/ContactForm";

export default function App() {
  useEffect(() => {
    // Initialize Lenis momentum inertia smooth-scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // standard parabolic easing function
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
    });

    // Handle frame animation ticks manually
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Provide dynamic system message
    console.log("PARADAM DIGITAL ECOSYSTEM // ROOT_NODE_ONLINE // SMOOTH_SCROLL_ESTABLISHED");

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white select-none selection:bg-neon-pink selection:text-white">
      
      {/* Global Hardware-Accelerated Noise / Grain Overlay */}
      <div className="noise-overlay" />

      {/* Dynamic Cursor Tracker with inversion styling */}
      <CustomCursor />

      {/* Shifting Gradient backdrop canvas mesh */}
      <MeshAnimation />

      {/* Glass navigation header bar */}
      <Navigation />

      {/* Core Ecosystem Portals section panels */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <ServicesHorizontal />
        <ClientShowcase />
        <TeamGrid />
        <ContactForm />
      </main>

    </div>
  );
}
