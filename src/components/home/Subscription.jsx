import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const features = [
  'Full Figma Design System',
  'Libraries',
  'Templates',
  'Icon System',
  'Free Limited updates',
  'Unlimited users',
]

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M12.25 3.5L5.25 10.5L1.75 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const TiltCard = ({ children, className, variants }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1200px" }} className="h-full">
      <motion.div
        variants={variants}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={className}
      >
        <div
          style={{ transform: "translateZ(35px)" }}
          className="h-full w-full flex flex-col flex-1"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const Subscription = () => {
  return (
    <section className="relative w-full bg-[#160823] py-20 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="flex items-center gap-5 mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Pricing Plans of Your Art Journey
          </h2>
          <div className="flex flex-col gap-[10px] mt-1">
            <div className="h-[2px] w-16 bg-[#A855F7]"></div>
            <div className="h-[2px] w-8 bg-[#A855F7]"></div>
          </div>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Preview Card */}
        <TiltCard 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="rounded-2xl p-7 bg-[#0A0A0A] border-[2.573px] border-[#848484] flex flex-col h-full"
        >
          <h3 className="text-s font-semibold tracking-wider text-white/80 mb-3">
            PREVIEW
          </h3>
          <p className="text-xs text-white/50 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quis
            laudantium libero expedita totam doloremque. Amet quibusdam
            repudiandae sapiente voluptatem mollitia soluta nulla quam alias,
            esque doloremque modi laboriosam esse eos?
          </p>

          <div className="text-5xl font-bold text-white mb-6">FREE</div>

          <button className="w-full py-3 rounded-full bg-[#484848]  text-white font-medium mb-8 shadow-[0_5.147px_35.77px_0_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.02] flex items-center justify-center whitespace-nowrap">
            Get it Now!
          </button>

          <p className="text-sm text-white/60 mb-4">Everything in PREVIEW plus:</p>
          <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <span className="text-white/50">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </TiltCard>

        {/* Solo Pro Card */}
        <TiltCard 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="rounded-2xl p-7 flex flex-col border-[2.573px] border-[#848484] bg-[linear-gradient(180deg,#000_0%,#326678_35%,#FFF_55%,#188DAE_60%,#033C79_80%,#020204_100%)] h-full"
        >
          <h3 className="text-s font-semibold tracking-wider text-white/90 mb-3">
            SOLO PRO
          </h3>
          <p className="text-xs text-white/80 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas
            laudantium libero expedita totam doloremque. Amet quibusdam
            repudiandae sapiente voluptatem mollitia soluta nulla quam alias,
            esque doloremque modi laboriosam esse eos?
          </p>

          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-white leading-none">$60</span>
            <span className="flex flex-col leading-tight pb-1">
              <span className="text-xs font-semibold text-white">USD</span>
              <span className="text-xs text-white/80 whitespace-nowrap">One time purchase</span>
            </span>
          </div>

          <button className="w-full py-3 font-medium mb-8 transition-transform hover:scale-[1.02] text-black flex items-center justify-center whitespace-nowrap rounded-[36.671px] bg-white shadow-[0_5.147px_35.77px_0_rgba(0,0,0,0.25)]">
            Get it Now!
          </button>

          <p className="text-sm text-white/90 mb-4">Everything in PREVIEW plus:</p>
          <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <span className="text-white/80">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </TiltCard>

        {/* Team Pro Card */}
        <TiltCard 
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="rounded-2xl p-7 flex flex-col border-[2.573px] border-[#848484] bg-[linear-gradient(180deg,#000_0%,#4D1561_35%,#FFF_55%,#7D0BA8_60%,#2A0270_80%,#020204_100%)] h-full"
        >
          <h3 className="text-s font-semibold tracking-wider text-white/90 mb-3">
            TEAM PRO
          </h3>
          <p className="text-xs text-white/80 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quas
            laudantium libero expedita totam doloremque. Amet quibusdam
            repudiandae sapiente voluptatem mollitia soluta nulla quam alias,
            esque doloremque modi laboriosam esse eos?
          </p>

          <div className="flex items-end gap-2 mb-6">
            <span className="text-5xl font-bold text-white leading-none">$180</span>
            <span className="flex flex-col leading-tight pb-1">
              <span className="text-xs font-semibold text-white">USD</span>
              <span className="text-xs text-white/80 whitespace-nowrap">One time purchase</span>
            </span>
          </div>

          <button className="w-full py-3 font-medium mb-8 transition-transform hover:scale-[1.02] text-black flex items-center justify-center whitespace-nowrap rounded-[36.671px] bg-white shadow-[0_5.147px_35.77px_0_rgba(0,0,0,0.25)]">
            Get it Now!
          </button>

          <p className="text-sm text-white/90 mb-4">Everything in PREVIEW plus:</p>
          <ul className="flex flex-col gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-white/90"
              >
                <span className="text-white/80">
                  <CheckIcon />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </TiltCard>
      </motion.div>
    </section>
  )
}

export default Subscription