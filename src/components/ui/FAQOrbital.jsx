import React, { useEffect, useRef } from "react";

const BALLS = [
  {
    color1: "#00FF1E",
    color2: "#006E00",
    glow: "#00FF1E",
    size: 24,
    duration: 15,
    phase: 0.42,
    dir: 1,
  },
  {
    color1: "#FF6DF0",
    color2: "#6800AE",
    glow: "#FF6DF0",
    size: 22,
    duration: 12,
    phase: 0.68,
    dir: -1,
  },
];

const FAQOrbital = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const start = performance.now();

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    function draw(now) {
      const t = (now - start) / 1000;
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;

      ctx.clearRect(0, 0, W, H);

      // Center on the right edge → only the left arc is visible
      const cx = W * 1.0;
      
      const base = H * 0.18;

      const gap = base * 0.15;
      const totalH = base * 2 + gap;

      // 🔥 CENTERED VERTICALLY: Remove the offset and center the entire system
      const centerY = H / 2;
      
      // Position both orbits centered around the middle
      const topCY = centerY - totalH / 2 + base * 0.5;
      const botCY = centerY + totalH / 2 - base * 0.5;

      const orbits = [
        { x: cx, y: topCY, r: base },
        { x: cx, y: botCY, r: base * 0.92 },
      ];

      // Clip to full canvas
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, W, H);
      ctx.clip();

      // Rings
      ctx.strokeStyle = "rgba(168,85,247,0.5)";
      ctx.lineWidth = 2.8;
      orbits.forEach((o) => {
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Balls
      BALLS.forEach((ball, i) => {
        const orbit = orbits[i];
        const angle =
          ball.dir * (t / ball.duration) * Math.PI * 2 +
          ball.phase * Math.PI * 2;

        const x = orbit.x + orbit.r * Math.cos(angle);
        const y = orbit.y + orbit.r * Math.sin(angle);
        const back = Math.sin(angle) < 0;
        const radius = (ball.size / 2) * (back ? 0.88 : 1);

        ctx.save();
        ctx.shadowBlur = 22;
        ctx.shadowColor = ball.glow;

        const grad = ctx.createRadialGradient(
          x - radius * 0.35,
          y - radius * 0.35,
          radius * 0.1,
          x,
          y,
          radius
        );
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.3, ball.color1);
        grad.addColorStop(1, ball.color2);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      ctx.restore();

      animationRef.current = requestAnimationFrame(draw);
    }

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
    />
  );
};

export default FAQOrbital;