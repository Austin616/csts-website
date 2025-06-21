import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaDiscord, 
  FaLinkedin, 
  FaEnvelope, 
  FaGlobe, 
  FaClock,
  FaCalendarAlt,
  FaQuestionCircle,
  FaUsers,
  FaChevronDown
} from 'react-icons/fa'

const contactMethods = [
  {
    icon: <FaDiscord className="text-[#5865F2] text-4xl" />,
    title: "Discord Community",
    description: "Join our active Discord community for real-time support and discussions",
    link: "https://discord.gg/rYekqkUA",
    buttonText: "Join Discord Server"
  },
  {
    icon: <FaLinkedin className="text-[#0A66C2] text-4xl" />,
    title: "LinkedIn",
    description: "Follow our organization page for updates and networking opportunities",
    link: "https://www.linkedin.com/company/computer-science-transfer-society?trk=public_profile_experience-group-header",
    buttonText: "Connect on LinkedIn"
  },
  {
    icon: <FaEnvelope className="text-blue-400 text-4xl" />,
    title: "Email Us",
    description: "Reach out directly for specific questions or inquiries",
    link: "mailto:texascsts@gmail.com",
    buttonText: "Send Email"
  },
  {
    icon: <FaGlobe className="text-purple-400 text-4xl" />,
    title: "Website",
    description: "Visit our website for comprehensive resources and information",
    link: "/",
    buttonText: "Visit Website"
  }
]

const faqCategories = [
  {
    title: "Meta Questions",
    questions: [
      {
        question: "What is CSTS?",
        answer: "Computer Science Transfers' Society is a student org created by transfer students, for transfer students. We know firsthand how tough it can be to find your way and your people after transferring into the CS major or into UT more generally. If you're an internal transfer, external transfer, or ATP student we hope to see you around at our events and in our Discord! Prospective transfer students are also welcome to join!"
      },
      {
        question: "What sorts of things does CSTS do?",
        answer: "We offer a variety of events, usually every other week. In the Fall we tend to focus on social events and other fun activities to help provide a community for transfer students, and in the Spring when transfer applications open we start to hold some events to help prospective CS transfers with the transfer process."
      },
      {
        question: "How can I join CSTS? Are there any dues?",
        answer: "No dues! Join our Discord to get in on the action! It's the main place where we announce events, give transfer and career advice, and chat as an org and community. We will be having things like t-shirts that are accessible through donation, but we're otherwise entirely due-free!"
      }
    ]
  },
  {
    title: "Transfer Questions",
    questions: [
      {
        question: "What should I know before trying to transfer?",
        answer: "Internally transferring into CS isn't a sure thing, even if your application is strong. You should ideally have a plan B for if you don't get accepted on your first and/or second try. If you have absolutely no idea where to begin, look at the internal transfer page to get a better idea of what the transfer process will entail."
      },
      {
        question: "Where can I find transfer application deadlines?",
        answer: "The department of Computer Science follows the UT-wide admissions schedule. As such, you can find the current transfer application deadlines on the transfer admission checklist"
      },
      {
        question: "BSA vs the BS Computer Science degrees?",
        answer: "See this page for a nice overview of the differences between the two. Here are the full hours necessary for a BSA and for a BS for the 2020-2022 catalog. The biggest differences are:\n- The BSA requires that you earn a minor/certificate\n- The BSA requires 4 upper division electives (UDEs) instead of 8\n- The BSA requires a couple fewer science and/or math courses"
      },
      {
        question: "What GPA should I have to transfer?",
        answer: "The transfer process is competitive, so the higher your GPA, the better. A GPA of about 3.7 or 3.8 is pretty standard for transfers, which roughly translates to getting A-s for half of your classes and As for the rest. However, GPA is not the only thing being used to approve applicants. People with 4.0s have been rejected, and people around the low 3.3s or 3.4s have been accepted."
      },
      {
        question: "What coding language should I learn?",
        answer: "While most languages can do most things, each language will have its particular forte. If there's a specific field you want to work within (Data Science, Game Dev, etc.), there's likely a language that's used most in that field. If you just want a general language to learn the basics with, Java or Python are good choices; the first two courses in the CS curriculum are in Java, while Python is used in the Elements of Computing certificate, has a less strict type system, and is a bit more beginner friendly and flexible."
      }
    ]
  },
  {
    title: "Career Questions",
    questions: [
      {
        question: "Does a BS or a BSA look better career-wise?",
        answer: "Employers look at the degrees as essentially equivalent. Most applications you fill out only ask for the field of your degree and not necessarily if it's a BS, a BA, a BSA, etc. In interviews, you'll tend to be more frequently asked about projects on your resume, internship experience, your exposure to technical concepts, and behavioral questions."
      },
      {
        question: "What are behavioral interviews?",
        answer: "In behavioral interviews, the interviewers tend to ask you questions about your experiences working on tough problems, in groups, or as leadership. Questions like, \"How do you handle conflict in a group?\" or \"Tell me about a time you got stuck on a problem and how you figured it out,\" are common. It's best to prepare a list of answers to questions like these that fit the STAR technique: Situation, Task, Action, Result. For bonus points, make sure your answers are in line with the company's values."
      },
      {
        question: "What GPA is good for jobs and internships?",
        answer: "The advice is typically that if your GPA is over 3.5, include it on your resume. Most jobs won't have a GPA requirement, and those that do have a requirement have it at 3.0 and only rarely 3.5. If you've successfully transferred into CS, your GPA is likely good enough for you to not worry about it too much anymore."
      }
    ]
  }
]

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-700">
    <button
      className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
      onClick={onClick}
    >
      <span className="font-medium text-white">{question}</span>
      <FaChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-300 whitespace-pre-line">
        {answer}
      </div>
    )}
  </div>
)

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

const Contact = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
              Get in Touch
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Have questions about transferring to UT Austin CS? We're here to help!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/80 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{method.description}</p>
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
                >
                  {method.buttonText}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900/60">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <div className="flex justify-center mb-4">
                <FaQuestionCircle className="text-4xl text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">
                If you see any issues with this document, need more information, or would like to join the Computer Science Transfer Society, feel free to join the Discord!
              </p>
            </motion.div>

            <motion.div className="space-y-8" variants={containerVariants}>
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-800/80 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{category.title}</h3>
                  <div className="space-y-2">
                    {category.questions.map((faq, questionIndex) => (
                      <FAQItem
                        key={questionIndex}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openQuestions[`${categoryIndex}-${questionIndex}`]}
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
