import React, { useEffect, useState } from "react";

const PLANETS = [
  { light: "#00FF1E", dark: "#006E00", glow: "#00FF1E", size: 24, radius: 0.96, duration: 30, phase: 0.42, dir: 1 },
  { light: "#FF6DF0", dark: "#6800AE", glow: "#FF6DF0", size: 22, radius: 0.80, duration: 24, phase: 0.68, dir: -1 },
  { light: "#6DE7FF", dark: "#004BAE", glow: "#6DE7FF", size: 20, radius: 0.64, duration: 19, phase: 0.05, dir: 1 },
  { light: "#FFB16D", dark: "#AE0000", glow: "#FFB16D", size: 22, radius: 0.50, duration: 15, phase: 0.30, dir: -1 },
  { light: "#FF6DF0", dark: "#6800AE", glow: "#FF6DF0", size: 22, radius: 0.34, duration: 11, phase: 0.95, dir: 1 },
  { light: "#AE5400", dark: "#000000", glow: "#AE5400", size: 18, radius: 0.20, duration: 8, phase: 0.10, dir: -1 },
];

const RINGS = [0.20, 0.34, 0.50, 0.64, 0.80, 0.96];

export default function OrbitalSystem() {
  const [t, setT] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  // Get responsive values based on screen size
  const getResponsiveValues = () => {
    const width = windowSize.width;
    
    // Mobile: width < 640px
    if (width < 640) {
      return {
        BASE: 500,
        TILT: 64,
        X_SCALE: 0.65,
        SCALE_MULTIPLIER: 0.55,
        RING_OPACITY: 0.25,
        RING_BORDER: 1.3,
      };
    }
    // Tablet: 640px - 1024px
    if (width < 1024) {
      return {
        BASE: 850,
        TILT: 64,
        X_SCALE: 0.77,
        SCALE_MULTIPLIER: 0.75,
        RING_OPACITY: 0.27,
        RING_BORDER: 1.7,
      };
    }
    // Desktop: 1024px+
    return {
      BASE: 1300,
      TILT: 64,
      X_SCALE: 0.85,
      SCALE_MULTIPLIER: 1,
      RING_OPACITY: 0.3,
      RING_BORDER: 2.09,
    };
  };

  const responsive = getResponsiveValues();
  const BASE = responsive.BASE;
  const TILT = responsive.TILT;
  const X_SCALE = responsive.X_SCALE;
  const SCALE_MULTIPLIER = responsive.SCALE_MULTIPLIER;
  const Y_SQUASH = Math.cos((TILT * Math.PI) / 180);
  const RX = (BASE / 2) * X_SCALE;
  const RY = (BASE / 2) * Y_SQUASH;

  useEffect(() => {
    let raf;
    const start = performance.now();
    const loop = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-[7] flex justify-center pointer-events-none">
      <div className="orbital-crop">
        <div className="orbital-stage">
          {RINGS.map((r, i) => {
            const w = BASE * r * X_SCALE;
            const h = w * (Y_SQUASH / X_SCALE);
            return (
              <div
                key={`ring-${i}`}
                className="orbit-ring"
                style={{
                  width: w,
                  height: h,
                  borderWidth: responsive.RING_BORDER,
                  opacity: responsive.RING_OPACITY,
                }}
              />
            );
          })}

          {PLANETS.map((p, i) => {
            const angle = (p.dir * t / p.duration + p.phase) * Math.PI * 2;
            const x = Math.cos(angle) * RX * p.radius;
            const y = Math.sin(angle) * RY * p.radius;
            const back = Math.sin(angle) < 0;
            const depthScale = 1 + Math.sin(angle) * 0.12;
            const scaledSize = p.size * SCALE_MULTIPLIER;
            
            return (
              <div
                key={`planet-${i}`}
                className="planet"
                style={{
                  width: scaledSize * depthScale,
                  height: scaledSize * depthScale,
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  background: `radial-gradient(circle at 32% 28%,
                    #ffffff 0%,
                    ${p.light} 28%,
                    ${p.dark} 100%)`,
                  boxShadow: `0 0 ${scaledSize * 0.7}px ${p.glow}88,
                              inset -${scaledSize * 0.16}px -${scaledSize * 0.16}px ${scaledSize * 0.4}px rgba(0,0,0,0.55)`,
                  zIndex: back ? 1 : 5,
                  opacity: back ? 0.92 : 1,
                }}
              />
            );
          })}
        </div>
      </div>

      <style>{`
        .orbital-crop {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          overflow: visible;
        }

        .orbital-stage {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2.09px solid #9E70C5;
          border-radius: 50%;
          box-sizing: border-box;
          opacity: 0.3;
        }

        .planet {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          will-change: transform;
        }

        /* Mobile styles: width < 640px */
        @media (max-width: 639px) {
          .planet {
            will-change: auto;
          }

          .orbit-ring {
            border: 1.3px solid #9E70C5;
          }
        }

        /* Tablet styles: 640px - 1024px */
        @media (min-width: 640px) and (max-width: 1023px) {
          .orbit-ring {
            border: 1.7px solid #9E70C5;
          }
        }

        /* Desktop styles: 1024px+ */
        @media (min-width: 1024px) {
          .planet {
            will-change: transform;
          }

          .orbit-ring {
            border: 2.09px solid #9E70C5;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 500px) and (orientation: landscape) {
          .orbital-crop {
            height: 100vh;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .planet {
            will-change: auto;
          }
        }

        body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
}