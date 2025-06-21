import React from 'react'
import { motion } from 'framer-motion'
import { FaFileAlt, FaBook, FaCode, FaLightbulb, FaDownload, FaPlayCircle } from 'react-icons/fa'

const resourceCategories = [
  {
    title: "Application Materials",
    icon: <FaFileAlt className="text-4xl text-blue-400" />,
    resources: [
      {
        name: "Transfer Essay Guide",
        description: "Learn how to write a compelling transfer essay that highlights your journey and aspirations.",
        link: "#"
      },
      {
        name: "Resume Template",
        description: "CS-focused resume template with examples of projects and technical skills.",
        link: "#"
      },
      {
        name: "Application Checklist",
        description: "Comprehensive checklist to ensure you've completed all application requirements.",
        link: "#"
      }
    ]
  },
  {
    title: "Academic Planning",
    icon: <FaBook className="text-4xl text-purple-400" />,
    resources: [
      {
        name: "Course Transfer Guide",
        description: "Detailed guide on which courses transfer to UT Austin CS.",
        link: "#"
      },
      {
        name: "Prerequisite Flowchart",
        description: "Visual guide to CS course prerequisites and planning.",
        link: "#"
      },
      {
        name: "GPA Calculator",
        description: "Tool to calculate your technical GPA for transfer admission.",
        link: "#"
      }
    ]
  },
  {
    title: "Technical Preparation",
    icon: <FaCode className="text-4xl text-green-400" />,
    resources: [
      {
        name: "Programming Practice Problems",
        description: "Collection of coding problems to strengthen your technical skills.",
        link: "#"
      },
      {
        name: "Project Ideas Guide",
        description: "List of project ideas that look great on transfer applications.",
        link: "#"
      },
      {
        name: "Technical Interview Prep",
        description: "Guide to preparing for technical interviews at UT Austin.",
        link: "#"
      }
    ]
  },
  {
    title: "Success Stories & Tips",
    icon: <FaLightbulb className="text-4xl text-yellow-400" />,
    resources: [
      {
        name: "Transfer Success Stories",
        description: "Read about successful transfers and their strategies.",
        link: "#"
      },
      {
        name: "Application Tips & Tricks",
        description: "Insider tips from successful transfer students.",
        link: "#"
      },
      {
        name: "Common Pitfalls Guide",
        description: "Learn about common mistakes to avoid in your application.",
        link: "#"
      }
    ]
  }
]

const pastWorkshops = [
  {
    date: "March 2024",
    title: "Resume Building Workshop",
    description: "Learn how to structure your CS resume and highlight your technical projects.",
    slides: "#",
    recording: "#"
  },
  {
    date: "February 2024",
    title: "Transfer Essay Workshop",
    description: "Tips for writing a compelling personal statement for UT CS transfer.",
    slides: "#",
    recording: "#"
  },
  {
    date: "January 2024",
    title: "Technical Interview Prep",
    description: "Practice coding problems and interview strategies with current UT CS students.",
    slides: "#",
    recording: "#"
  },
  {
    date: "December 2023",
    title: "Application Strategy Session",
    description: "Overview of the transfer process and timeline for Fall 2024 admission.",
    slides: "#",
    recording: "#"
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

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
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
              Transfer Resources
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Everything you need to prepare a strong transfer application to UT Austin CS
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            {resourceCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/80 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <div className="space-y-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <a 
                      key={resourceIndex}
                      href={resource.link}
                      className="block bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-colors group"
                    >
                      <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mb-2">
                        {resource.name}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {resource.description}
                      </p>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Workshop Slides Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-4">Past Workshop Materials</h2>
              <p className="text-gray-300">
                Access slides and recordings from our previous workshops
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {pastWorkshops.map((workshop, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/80 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400 mb-1">
                        {workshop.title}
                      </h3>
                      <p className="text-sm text-gray-400">{workshop.date}</p>
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={workshop.slides}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                        title="Download Slides"
                      >
                        <FaDownload />
                        <span className="text-sm">Slides</span>
                      </a>
                      <a 
                        href={workshop.recording}
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                        title="Watch Recording"
                      >
                        <FaPlayCircle />
                        <span className="text-sm">Recording</span>
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {workshop.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resources 