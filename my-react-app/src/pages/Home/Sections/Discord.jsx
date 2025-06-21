import React from 'react'
import { motion } from 'framer-motion'
import { FaDiscord, FaComments, FaUserFriends, FaQuestionCircle } from 'react-icons/fa'

const discordFeatures = [
  {
    icon: <FaUserFriends />,
    title: "Connect with Transfer Students",
    description: "Join a community of students who are on the same journey as you. Share experiences, tips, and support each other."
  },
  {
    icon: <FaComments />,
    title: "Real-time Discussions",
    description: "Get immediate answers to your questions from current UT CS students and successful transfers."
  },
  {
    icon: <FaQuestionCircle />,
    title: "Application Support",
    description: "Access resources, get feedback on your essays, and receive guidance on your transfer application."
  }
]

const Discord = ({ containerVariants, itemVariants }) => {
  return (
    <section className="py-16 bg-gray-900/80">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Discord Info */}
            <motion.div 
              className="flex-1"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <FaDiscord className="text-7xl mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our Thriving Discord Community
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Connect with fellow transfer students, get real-time support, and access exclusive resources in our active Discord community.
                </p>
                <a 
                  href="https://discord.gg/rYekqkUA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#5865F2] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#4752C4] transition duration-300 inline-flex items-center gap-2"
                >
                  <FaDiscord className="text-xl" />
                  Join Discord
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - Features */}
            <motion.div 
              className="flex-1 grid gap-6"
              variants={containerVariants}
            >
              {discordFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-lg rounded-lg p-6 border border-gray-700/50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Community Stats */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
          >
            <motion.div 
              className="bg-gray-800/80 backdrop-blur-lg rounded-lg p-6 border border-gray-700/50"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Active Members</div>
            </motion.div>
            <motion.div 
              className="bg-gray-800/80 backdrop-blur-lg rounded-lg p-6 border border-gray-700/50"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Community Support</div>
            </motion.div>
            <motion.div 
              className="bg-gray-800/80 backdrop-blur-lg rounded-lg p-6 border border-gray-700/50"
              variants={itemVariants}
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80">Free Advice</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Discord 