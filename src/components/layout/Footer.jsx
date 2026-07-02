import { useState } from "react";

const footerLinks = {
  Product: ["What's New", "Design", "Collaboration", "Prototyping", "Developer Handoff", "All Features"],
  Support: ["What's New", "Design", "Collaboration", "Prototyping", "Developer Handoff", "All Features"],
  Resources: ["What's New", "Design", "Collaboration", "Prototyping", "Developer Handoff", "All Features"],
  About: ["What's New", "Design", "Collaboration", "Prototyping", "Developer Handoff", "All Features"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleJoin = () => {
    if (!agreed || !email) return;
    alert(`Subscribed: ${email}`);
    setEmail("");
    setAgreed(false);
  };

  return (
    <footer className="relative bg-[#160823] text-[#d4cfe8] px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 pt-12 pb-8 font-sans w-full overflow-hidden">
      {/* Glow blob 1 - large circle */}
      <div className="pointer-events-none absolute" style={{width:"200vw",height:"200px",borderRadius:"50%",background:"rgba(162,52,253,0.54)",filter:"blur(100px)",bottom:"-70px",left:"10%",transform:"translateX(-50%)",zIndex:0}} />
      {/* Glow blob 2 - wide ellipse */}
      <div className="pointer-events-none absolute" style={{width:"150vw",maxWidth:"600px",height:"600px",borderRadius:"1169px",background:"rgba(162,52,253,0.54)",filter:"blur(100px)",bottom:"-200px",left:"50%",transform:"translateX(50%)",zIndex:0}} />
      <div className="relative z-10">
        {/* Nav columns - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-[12px] md:text-[13px] font-medium text-[#b0a8cc] mb-2 md:mb-4 tracking-wide">
                <span className="text-[#7c6fa0]">// </span>{section}
              </p>
              <ul className="flex flex-col gap-0.01 md:gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[12px] md:text-[14px] text-[#d4cfe8] hover:text-white transition-colors leading-tight">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full mb-8 md:mb-10">
          <svg width="100%" height="2" viewBox="0 0 1389 2" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="paint0_linear_3_742" x1="0" y1="1" x2="1389" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C0C0C0" />
                <stop offset="0.5" stopColor="#8D8D8D" stopOpacity="0" />
                <stop offset="1" stopColor="#C0C0C0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="1" x2="1389" y2="1" stroke="url(#paint0_linear_3_742)" strokeWidth="2" />
          </svg>
        </div>

        {/* Newsletter */}
        <div className="flex justify-between items-start gap-6 md:gap-10 flex-wrap mb-10 md:mb-12">
          <div className="max-w-sm">
            <h3 className="text-[16px] md:text-[18px] font-semibold text-[#f0ecff] mb-2 md:mb-3">Never miss an update</h3>
            <p className="text-[12px] md:text-[13px] text-[#B9B9B9] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, dolor?
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-[340px] sm:min-w-[340px]">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 w-full">
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 w-full px-4 md:px-5 py-2.5 md:py-3 bg-[#D9D9D9]/18 text-[#d4cfe8] text-[13px] md:text-[14px] outline-none rounded placeholder:text-[#E0E0E0]/60 border-0"
              />
              <button
                onClick={handleJoin}
                className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-white text-[#110d1f] font-semibold text-[13px] md:text-[14px] rounded hover:bg-[#f0ecff] transition-colors whitespace-nowrap shadow-lg"
              >
                Join
              </button>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 accent-[#7c6fa0] cursor-pointer"
              />
              <span className="text-[12px] md:text-[13px] text-[#B9B9B9]">I agree to receive emails</span>
            </label>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <p className="text-[12px] md:text-[13px] text-[#B9B9B9]">
            ©2025 by <strong className="font-semibold">Code-X-Novas</strong>
          </p>
          <div className="flex gap-4 md:gap-8">
            <a href="#" className="text-[12px] md:text-[13px] text-[#B9B9B9] hover:text-[#b0a8cc] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[12px] md:text-[13px] text-[#B9B9B9] hover:text-[#b0a8cc] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}