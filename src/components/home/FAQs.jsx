import React, { useState } from 'react'
import FAQOrbital from '../ui/FAQOrbital'
import { motion, AnimatePresence } from 'framer-motion'
import faqImage1 from '../../assets/Components/FAQs/image1.png'
import faqImage2 from '../../assets/Components/FAQs/image2.png'
import faqImage3 from '../../assets/Components/FAQs/image3.png'
import faqImage4 from '../../assets/Components/FAQs/image4.png'

const faqs = [
  {
    question: 'What is SynchroTask AI?',
    answer: 'SynchroTask AI is an intelligent task management platform that uses AI to help you organize, prioritize, and complete your work more efficiently.',
    image: faqImage1
  },
  {
    question: 'How does the AI assistant work?',
    answer: 'Our AI analyzes your tasks, deadlines, and work patterns to suggest optimal schedules and automate repetitive workflows.',
    image: faqImage2
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use end-to-end encryption and never share your data with third parties. Your privacy is our top priority.',
    image: faqImage3
  },
  {
    question: 'Can I use it for free?',
    answer: 'We offer a free tier with core features. Premium plans unlock advanced AI capabilities and team collaboration tools.',
    image: faqImage4
  },
  {
    question: 'Does it integrate with other tools?',
    answer: 'SynchroTask integrates with Slack, Notion, Google Calendar, GitHub, and many more popular productivity tools.',
    image: faqImage1
  },
]

const PlusIcon = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {open ? (
      <path d="M5 12h14" />
    ) : (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    )}
  </svg>
)

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[70vh] lg:min-h-screen py-16 md:py-10 lg:py-24 px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 bg-[#160823] overflow-hidden">

      {/* Purple glow - left */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-700/40 blur-[120px] pointer-events-none" />

      {/* Crimson glow - right */}
      <div className="absolute -right-40 top--1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-rose-900/40 blur-[120px] pointer-events-none" />

      {/* Orbital - Centered vertically */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] pointer-events-none overflow-hidden">
        <FAQOrbital />
      </div>

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto mb-10 md:mb-6 lg:mb-16"
      >
        <div className="flex items-center gap-5 mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            FAQ
          </h2>
          <div className="flex flex-col gap-[10px] mt-1">
            <div className="h-[2px] w-16 bg-[#A855F7]"></div>
            <div className="h-[2px] w-8 bg-[#A855F7]"></div>
          </div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl">
          Find answers to common questions about SynchroTask AI
        </p>
      </motion.div>

      {/* Accordion */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
        className="relative z-10 max-w-3xl space-y-3"
      >
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              layout
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className={`rounded-xl overflow-hidden transition-colors duration-300 ${
                isOpen ? '' : 'bg-white shadow-lg'
              }`}
              style={{
                background: isOpen ? 'linear-gradient(to right, #FE80D8, #6A218D)' : 'white'
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {!isOpen ? (
                  <motion.button
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-black font-medium hover:bg-gray-50"
                  >
                    <span>{faq.question}</span>
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-purple-500 text-purple-500 shrink-0 ml-4 transition-colors duration-300 hover:bg-purple-50">
                      <PlusIcon open={isOpen} />
                    </span>
                  </motion.button>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4 px-6 py-5">
                      {/* Image on the left (or top on mobile) */}
                      <div className="flex-shrink-0 w-full sm:w-48 h-48 sm:h-36 rounded-2xl overflow-hidden bg-white">
                        <img 
                          src={faq.image} 
                          alt={faq.question}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Question and Answer on the right */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h4 className="text-base font-semibold text-white mb-1">
                            {faq.question}
                          </h4>
                          <button
                            onClick={() => toggle(i)}
                            className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white text-white shrink-0 ml-4 transition-colors duration-300 hover:bg-white/20"
                          >
                            <PlusIcon open={isOpen} />
                          </button>
                        </div>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default FAQ