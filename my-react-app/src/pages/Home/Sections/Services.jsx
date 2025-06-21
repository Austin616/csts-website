import React from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaPencilAlt, FaLightbulb, FaGraduationCap } from 'react-icons/fa'

const services = [
  {
    icon: <FaFileAlt />,
    title: "Resume Reviews",
    description: "Expert feedback to make your resume stand out to admissions"
  },
  {
    icon: <FaPencilAlt />,
    title: "Essay Workshops",
    description: "Craft compelling essays that tell your unique story"
  },
  {
    icon: <FaLightbulb />,
    title: "Application Strategy",
    description: "Personalized guidance for a strong application"
  },
  {
    icon: <FaGraduationCap />,
    title: "Transfer Mentorship",
    description: "Learn from successful UT CS transfer students"
  }
]

const Services = ({ containerVariants, itemVariants }) => {
  return (
    <section className="py-16 bg-gray-900/40">
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
            How We Help You Succeed
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg"
            variants={itemVariants}
          >
            Comprehensive support for your transfer journey
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800/80 p-6 rounded-lg shadow-xl border border-gray-700/50 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 