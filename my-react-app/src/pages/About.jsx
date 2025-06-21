import React from 'react'
import { motion } from 'framer-motion'
import { FaDiscord, FaUsers, FaLaptopCode, FaHandshake } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import austin from '../assets/austin.png'

const officers = [
  {
    name: "Austin Tran",
    role: "President, Treasurer",
    image: austin,
    description: "CS Senior at UT Austin. Internal transferred from Undeclared in 2023. Passionate about helping others achieve their transfer goals.",
  },
  {
    name: "Hannah Lee",
    role: "Events Director",
    image: "https://images.unsplash.com/",
    description: "Student at UT Austin. Focused on creating an inclusive space for all transfer students.",
  },
  {
    name: "Dillon Quigley",
    role: "Outreach Director",
    image: "https://images.unsplash.com/",
    description: "Student at UT Austin. Focused on creating an inclusive space for all transfer students.",
  }
]

const activities = [
  {
    icon: <FaLaptopCode className="text-4xl text-blue-400" />,
    title: "Technical Workshops",
    description: "Regular workshops on resume building, technical interview prep, and project development to strengthen your application."
  },
  {
    icon: <FaUsers className="text-4xl text-blue-400" />,
    title: "Peer Mentorship",
    description: "Connect with successful transfer students who guide you through the application process and share their experiences."
  },
  {
    icon: <FaHandshake className="text-4xl text-blue-400" />,
    title: "Application Support",
    description: "Get personalized feedback on your essays, resume, and overall application strategy from those who've succeeded."
  },
  {
    icon: <FaDiscord className="text-4xl text-blue-400" />,
    title: "Active Community",
    description: "Join our vibrant Discord community where you can ask questions, share resources, and connect with fellow aspirants."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Our Mission
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              CSTS is dedicated to empowering students in their journey to transfer into UT Austin's Computer Science program. We believe every dedicated student deserves a chance to pursue their dreams at a top-tier institution.
            </motion.p>
            <motion.div 
              className="text-lg text-gray-400"
              variants={itemVariants}
            >
              <p>
                Through mentorship, resources, and a supportive community, we help transform the challenging transfer process into an achievable goal.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Officers Section */}
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
              Meet Our Officers
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg"
              variants={itemVariants}
            >
              Successful transfers helping the next generation
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {officers.map((officer, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/80 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={officer.image} 
                  alt={officer.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{officer.name}</h3>
                <p className="text-blue-400 mb-3">{officer.role}</p>
                <p className="text-gray-300 mb-4">{officer.description}</p>
                <a 
                  href={officer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
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
              What We Do
            </motion.h2>
            <motion.p 
              className="text-gray-300 text-lg max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We provide comprehensive support through various programs and initiatives designed to maximize your chances of a successful transfer.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {activities.map((activity, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/80 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
                <p className="text-gray-300">{activity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.div 
              className="flex-1"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Free Transfer Resources
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Access our comprehensive collection of transfer guides, application templates, and study materials.
              </p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Transfer Application Templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Essay Writing Guides
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Course Planning Worksheets
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  Technical Interview Prep
                </li>
              </ul>
              <Link 
                to="/resources"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Access Resources
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            <motion.div 
              className="flex-1 relative"
              variants={itemVariants}
            >
              <div className="relative z-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-8 backdrop-blur-sm border border-white/10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-purple-400 mb-2 text-center">Growing Resource Library</div>
                    <div className="text-sm text-gray-300 text-center">Constantly expanding collection of transfer guides and materials</div>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-purple-400 mb-2 text-center">Curated Content</div>
                    <div className="text-sm text-gray-300 text-center">Hand-picked resources vetted by successful transfers</div>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-purple-400 mb-2 text-center">Comprehensive Guides</div>
                    <div className="text-sm text-gray-300 text-center">From application essays to technical interviews</div>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div className="text-xl font-bold text-purple-400 mb-2 text-center">Community Driven</div>
                    <div className="text-sm text-gray-300 text-center">Resources shaped by student experiences</div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gray-900/80">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join our community and take the first step towards your transfer to UT Austin CS.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a 
                href="https://discord.gg/rYekqkUA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#4752C4] transition-colors inline-flex items-center gap-2"
              >
                <FaDiscord className="text-xl" />
                Join Our Discord
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
