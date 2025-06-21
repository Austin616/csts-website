import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaFileAlt, FaPencilAlt, FaCheckCircle } from 'react-icons/fa'

const timelineSteps = [
  {
    title: "Application Planning",
    date: "6-8 months before deadline",
    description: "Start early with our guided planning sessions to understand requirements and create a strong strategy.",
    icon: <FaCalendar />
  },
  {
    title: "Resume & Projects",
    date: "4-6 months before deadline",
    description: "Build your technical portfolio and craft a compelling resume with our workshops.",
    icon: <FaFileAlt />
  },
  {
    title: "Essay Development",
    date: "2-4 months before deadline",
    description: "Work with our mentors to write and refine your personal statement and essays.",
    icon: <FaPencilAlt />
  },
  {
    title: "Application Review",
    date: "1-2 months before deadline",
    description: "Get comprehensive feedback on your complete application package.",
    icon: <FaCheckCircle />
  }
]

const Timeline = ({ containerVariants, itemVariants }) => {
  return (
    <section className="py-16 bg-gray-900/60">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Your Transfer Journey
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg mb-12"
            variants={itemVariants}
          >
            We'll be with you every step of the way
          </motion.p>

          <motion.div 
            className="max-w-4xl mx-auto relative"
            variants={containerVariants}
          >
            {/* Vertical Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-blue-500/50 hidden md:block" />

            {timelineSteps.map((step, index) => (
              <motion.div 
                key={index}
                className={`flex items-center gap-8 mb-12 relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Content */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <div className="bg-gray-800/80 p-6 rounded-lg shadow-xl border border-gray-700/50 backdrop-blur-sm">
                    <div className="text-blue-400 text-3xl mb-4 flex justify-center md:justify-start">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-blue-400 text-sm mb-3">{step.date}</p>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center relative">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline 