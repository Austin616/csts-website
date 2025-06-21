import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaDiscord, FaLinkedin } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'


const Navbar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const isActiveRoute = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'
  }

  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <nav className="bg-gray-900 shadow-md relative">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Left section - CSTS Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-200 flex items-center">
              <span className="text-2xl font-bold">CSTS</span>
            </Link>
          </div>

          {/* Center section - Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            <Link to="/" className={`${isActiveRoute('/')} transition-colors duration-200 font-medium text-white`}>
              Home
            </Link>
            {/* <Link to="/results" className={`${isActiveRoute('/results')} transition-colors duration-200 font-medium text-white`}>
              Results
            </Link> */}
            <Link to="/resources" className={`${isActiveRoute('/resources')} transition-colors duration-200 font-medium text-white`}>
              Resources
            </Link>
            <Link to="/about" className={`${isActiveRoute('/about')} transition-colors duration-200 font-medium text-white`}>
              About
            </Link>
            <Link to="/contact" className={`${isActiveRoute('/contact')} transition-colors duration-200 font-medium text-white`}>
              Contact
            </Link>
          </div>
          
          {/* Right section - Social Icons (hidden on mobile) */}
          <div className="hidden md:flex flex-shrink-0 items-center space-x-4">
            <a 
              href="https://discord.gg/rYekqkUA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <FaDiscord className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/company/computer-science-transfer-society?trk=public_profile_experience-group-header"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed left-0 top-16 w-64 h-screen bg-gray-900 shadow-lg z-50 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className={`${isActiveRoute('/')} transition-colors duration-200 font-medium text-white`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/results" 
                className={`${isActiveRoute('/results')} transition-colors duration-200 font-medium text-white`}
                onClick={() => setIsOpen(false)}
              >
                Results
              </Link>
              <Link 
                to="/about" 
                className={`${isActiveRoute('/about')} transition-colors duration-200 font-medium text-white`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`${isActiveRoute('/contact')} transition-colors duration-200 font-medium text-white`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className={`${isActiveRoute('/faq')} transition-colors duration-200 font-medium text-white`}
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>

              <div className="pt-4 border-t border-gray-700">
                <div className="flex space-x-4">
                  <a 
                    href="https://discord.gg/rYekqkUA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaDiscord className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/computer-science-transfer-society?trk=public_profile_experience-group-header" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
