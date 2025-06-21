import React from 'react'
import { Link } from 'react-router-dom'
import { FaDiscord, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Resources", path: "/resources" },
      { name: "Contact", path: "/contact" }
    ]
  },
  {
    title: "Community",
    links: [
      { name: "Discord Server", path: "https://discord.gg/rYekqkUA" },
      { name: "LinkedIn Group", path: "https://www.linkedin.com/company/computer-science-transfer-society?trk=public_profile_experience-group-header" },
      { name: "Hornslink", path: "https://utexas.campuslabs.com/engage/organization/csts" },
    ]
  }
]

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Questions?</h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">University of Texas at Austin</p>
              <p>Gates Dell Complex</p>
              <p>2317 Speedway, Austin, TX</p>
              <a 
                href="mailto:texascsts@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                texascsts@gmail.com
              </a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://discord.gg/your-invite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#5865F2] transition-colors"
              >
                <FaDiscord size={24} />
              </a>
              <a 
                href="https://linkedin.com/company/your-company" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="mailto:texascsts@gmail.com" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.path.startsWith('http') ? (
                      <a 
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.path}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} CSTS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 