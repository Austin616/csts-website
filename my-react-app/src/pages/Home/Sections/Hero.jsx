import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../../../assets/csts-logo.png'


const Hero = ({ containerVariants, itemVariants }) => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text and Logo */}
          <motion.div 
            className="flex-1 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <img 
                src={logo} 
                alt="CSTS Logo" 
                className="h-20 w-auto mb-8"
              />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
              variants={itemVariants}
            >
              Your Path to UT Austin Computer Science
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              variants={itemVariants}
            >
              We guide transfer students through every step of the journey into UT Austin's prestigious CS program.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                to="/about"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Mentorship Image */}
          <motion.div 
            className="flex-1 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.div
              className="relative z-10"
              variants={itemVariants}
            >
              <img 
                src={"https://static.vecteezy.com/system/resources/thumbnails/004/984/585/small_2x/helping-hand-silhouette-mountain-moonlight-illustration-free-vector.jpg"} 
                alt="CSTS Mentorship" 
                className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
