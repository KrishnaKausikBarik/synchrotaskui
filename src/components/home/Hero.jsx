import React, { useRef, useState } from "react";
import Navbar from "../layout/Navbar";
import OrbitalSystem from "../ui/OrbitalSystem";
import RotatingImage from "../ui/RotatingImage";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="hero-section relative min-h-[50vh] h-[70vh] lg:h-screen w-full overflow-hidden bg-[#160823]"
    >
      <Navbar />

      {/* Rest of your component remains the same... */}
      {/* Cursor-revealed grid */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          opacity: isHovering ? 1 : 0,
          transition: "opacity 150ms ease",
          backgroundImage:
            "linear-gradient(rgba(255, 109, 240, 0.21) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 109, 240, 0.26) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          WebkitMaskImage: `radial-gradient(180px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)`,
          maskImage: `radial-gradient(180px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-[10] flex flex-col items-center justify-center text-center pt-30 sm:pt-32 md:pt-40 pb-8 sm:pb-12 md:pb-0 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40"
      >
        <h1 className="font-bold leading-[1.1] text-[26px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] max-w-5xl bg-gradient-to-r from-[#8B8599] via-white via-[48%] via-white via-[65%] to-[#8B8599] bg-clip-text text-transparent">
          AI-Powered Productivity
          <br />
          with Human Precision
        </h1>

        <p className="mt-6 text-white/70 text-[14px] sm:text-lg md:text-xl max-w-3xl">
          Helping professionals build, find, and use AI agents that drive
          real-world impact
        </p>
      </motion.div>

      <OrbitalSystem />
      <RotatingImage />

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-[8]"
        style={{
          background:
            "linear-gradient(180deg, rgba(35, 26, 8, 0) 15.49%, #341554 95.48%)",
        }}
      />
    </section>
  );
};

export default Hero;