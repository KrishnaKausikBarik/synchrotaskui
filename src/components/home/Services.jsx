import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: 1,
    icon: "mdi:file-document-outline",
    title: "Resume Creation",
    description:
      "Crafted a detailed resume to showcase your experience, skills, and achievements. Our AI-powered tools help you stand out to recruiters and hiring managers.",
  },
  {
    id: 2,
    icon: "mdi:chart-box-outline",
    title: "Business Report",
    description:
      "Develop comprehensive business reports that analyze market trends, performance metrics, and strategic opportunities with data-driven insights.",
  },
  {
    id: 3,
    icon: "mdi:presentation",
    title: "Pitch Deck Design",
    description:
      "Professional pitch decks crafted to impress investors. Our design expertise ensures your vision is communicated clearly and compellingly.",
  },
  {
    id: 4,
    icon: "mdi:chart-line",
    title: "Data Visualisation",
    description:
      "Convert complex data into clear, engaging visual representations. Make data insights accessible and actionable for your audience.",
  },
  {
    id: 5,
    icon: "mdi:post-outline",
    title: "Blog Post Drafting",
    description:
      "From conceptualization to final draft. Our AI assists in creating engaging, SEO-optimized content that resonates with your target audience.",
  },
  {
    id: 6,
    icon: "mdi:spellcheck",
    title: "Proofreading",
    description:
      "Transform raw manuscripts into polished, publication-ready content. Grammar, style, and tone perfected by design experts.",
  },
  {
    id: 7,
    icon: "mdi:share-variant-outline",
    title: "Social Media Content",
    description:
      "Eye-turning, growth-focused content tailored for all social media platforms. Increase engagement and build your brand presence.",
  },
  {
    id: 8,
    icon: "mdi:clipboard-list-outline",
    title: "Project Planning Tools",
    description:
      "From Gantt charts to Kanban boards. Streamlined project management solutions for organizing and tracking your initiatives.",
  },
];

const Services = () => {
  return (
    <section className="relative w-full bg-[#07000E] py-10 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="flex items-center gap-5 mb-2">
          <h2 className="text-[33px] sm:text-[28px] md:text-[50px] lg:text-3xl xl:text-[3.5rem] font-bold text-white">
            Services we offer
          </h2>
          <div className="flex flex-col gap-[10px] mt-1">
            <div className="h-[2px] w-16 bg-[#A855F7]"></div>
            <div className="h-[2px] w-8 bg-[#A855F7]"></div>
          </div>
        </div>
      </motion.div>

     {/* Services Grid */}
<div className="max-w-7xl mx-auto">
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-10"
  >
    {SERVICES.map((service) => (
      <motion.div
        key={service.id}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        className="group relative flex flex-col bg-transparent border border-[#8B8599]/30 rounded-[14px] p-6 sm:p-8 transition-all duration-300 min-h-0 sm:min-h-[380px]"
        onMouseEnter={e => {
  e.currentTarget.style.boxShadow = "-25px 30px 40px -20px #9E33F7";
  e.currentTarget.style.border = "1px solid #767676";
}}
onMouseLeave={e => {
  e.currentTarget.style.boxShadow = "none";
  e.currentTarget.style.border = "1px solid rgba(139,133,153,0.3)";
}}
      >
        {/* Hover background */}
        <div
          className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(180deg, #13041E 0%, #9C32F4 100%)",
          }}
        />
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <Icon
                    icon={service.icon}
                    className="w-12 h-12 text-white transition-colors duration-300"
                  />
                </div>

                {/* Title + animated underline */}
<div className="flex flex-col items-center mb-3">
  <div className="inline-flex flex-col items-start">
    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight text-center whitespace-nowrap">
      {service.title}
    </h3>
    <span className="block h-[1.5px] bg-white rounded-full mt-[6px] w-0 group-hover:w-full transition-all duration-500 ease-out" />
  </div>
</div>

                {/* Description — hidden on hover */}
                <p className="text-sm text-white/60 leading-relaxed transition-all duration-300 group-hover:opacity-0 mb-4">
                  {service.description}
                </p>

                {/* Get Started button — shown on hover */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border border-white/70 text-white bg-[#A234FD] transition-all duration-200">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(22, 8, 35, 0) 0%, rgba(52, 21, 84, 0.3) 100%)",
        }}
      />
    </section>
  );
};

export default Services;