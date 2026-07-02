import React from 'react'
import TestimonialBg from '../../assets/Components/Testimonials/testimonialbg.jpg'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Nabin Agrawal',
    role: 'Student',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Nabin Agrawal',
    role: 'Student',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Nabin Agrawal',
    role: 'Student',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
]

const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#ffffff"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279L0 9.306l8.332-1.151z" />
  </svg>
)

const Testimonials = () => {
  return (
    <section
  className="relative w-full bg-cover bg-center bg-fixed py-24 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40"
  style={{ backgroundImage: `url(${TestimonialBg})` }}
>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#000000]/70"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 bg-black border border-white/15 rounded-full pl-2 pr-6 py-2 mb-6"
        >
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/12.jpg"
              alt=""
              className="w-9 h-9 rounded-full object-cover border-2 border-black"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
              className="w-9 h-9 rounded-full object-cover border-2 border-black -ml-4"
            />
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt=""
              className="w-9 h-9 rounded-full object-cover border-2 border-black -ml-4"
            />
          </div>
          <span className="text-lg text-white font-medium">Testimonials</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            What they say about us?
          </h2>
        </motion.div>

        {/* Testimonial Cards - infinite horizontal scroll */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] gap-6">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl p-6 bg-black/44 border border-white/30 "
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Easy to Understand
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet consectetur. adipisicing elit. Iure,
                  ipsum similique, eveniet
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Testimonials