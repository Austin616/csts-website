import React from 'react'
import Hero from './Sections/Hero'
import Discord from './Sections/Discord'
import Services from './Sections/Services'
import Timeline from './Sections/Timeline'

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
      duration: 0.6
    }
  }
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
      <div className="relative">
        <Hero containerVariants={containerVariants} itemVariants={itemVariants} />
        <Timeline containerVariants={containerVariants} itemVariants={itemVariants} />
        <Discord containerVariants={containerVariants} itemVariants={itemVariants} />
        <Services containerVariants={containerVariants} itemVariants={itemVariants} />
      </div>
    </div>
  )
}

export default Home
