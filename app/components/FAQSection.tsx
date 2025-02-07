import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradientButton from './ui/GradientButton';

interface FAQItem {
  category: string;
  questions: {
    question: string;
    answer: string | string[];
  }[];
}

const faqData: FAQItem[] = [
  {
    category: "Getting Started: Your Free Strategy Session",
    questions: [
      {
        question: "What happens during the free AI strategy session?",
        answer: "During the session, we'll discuss your specific business goals, challenges, and current operations. We'll explore how AI can be used to streamline your workflows, automate tasks, and unlock growth opportunities. This is a no-obligation conversation focused on understanding your needs and identifying potential solutions tailored to your business. It is not just a sales call, we will provide you with value."
      },
      {
        question: "Who is the strategy session for?",
        answer: [
          "This session is ideal for solopreneurs and small to medium-sized business (SME) owners who are:",
          "• Feeling overwhelmed by repetitive tasks and operational bottlenecks",
          "• Struggling to scale their business efficiently",
          "• Looking for ways to improve customer engagement and retention",
          "• Interested in exploring the potential of AI but unsure where to start",
          "• Wanting to free up time to focus on the bigger picture"
        ]
      },
      {
        question: "How should I prepare for the strategy session?",
        answer: [
          "To make the most of our time, consider the following beforehand:",
          "• Identify your biggest pain points: What are the most time-consuming or frustrating aspects of your business operations?",
          "• Think about your goals: What are your key business objectives for the next 6-12 months?",
          "• Jot down any questions: What are you curious about regarding AI and its potential applications for your business?",
          "• Come with an open mind: Be ready to explore new ideas and possibilities"
        ]
      },
      {
        question: "What happens after the strategy session?",
        answer: "Following the session, we'll provide you with a personalized summary of our discussion, outlining potential AI solutions tailored to your needs. If we both agree that there's a good fit, we can discuss next steps, including a more in-depth discovery phase to map out your specific requirements and develop a customized implementation plan."
      },
      {
        question: "I'm not very technical, is this still for me?",
        answer: "Absolutely! You don't need to be a tech expert to benefit from AI. We handle the technical complexities, designing and implementing user-friendly systems that are easy for you and your team to use. Our goal is to make AI accessible and beneficial for businesses of all sizes and technical levels. We do the hard work for you."
      }
    ]
  },
  {
    category: "Understanding Our Approach",
    questions: [
      {
        question: "What makes your approach to AI implementation different?",
        answer: "We don't believe in one-size-fits-all solutions. We take a holistic, partnership-based approach, treating your business as a unique system. We start by thoroughly understanding your vision, then meticulously map your processes to design and build bespoke AI systems that seamlessly integrate into your existing workflows and evolve with your needs. We focus on your whole business as one system and work with you to improve it."
      },
      {
        question: "What is involved in your process?",
        answer: [
          "Our process is designed to ensure a smooth and successful AI implementation:",
          "• Discovery: We get to know your business, goals, and challenges",
          "• System Design: We blueprint a custom AI solution tailored to your needs",
          "• Implementation: We build, integrate, and test your system, training your team along the way",
          "• Continued Partnership: We provide ongoing monitoring, optimization, and support to ensure long-term success"
        ]
      },
      {
        question: "Do you offer any guarantees?",
        answer: "While specific outcomes can vary depending on the complexity of the project and the nature of your business, we are committed to delivering measurable results. During the discovery phase, we'll work with you to establish clear goals and KPIs (Key Performance Indicators) to track the success of your AI system. We're confident in our ability to deliver value and build long-term partnerships."
      }
    ]
  },
  {
    category: "Addressing Common Concerns",
    questions: [
      {
        question: "Is my data secure with your AI systems?",
        answer: "Data security is our top priority. We employ industry-leading security measures, including encryption, access controls, and regular security audits, to protect your sensitive information. We are compliant with relevant data privacy regulations and committed to maintaining the highest standards of data protection. We can answer any questions in our strategy session."
      },
      {
        question: "Will I lose the personal touch in my business if I automate too much?",
        answer: "We understand this concern. Our approach is to use AI to enhance, not replace, human interaction. We focus on automating repetitive, time-consuming tasks, freeing up you and your team to focus on building relationships, providing personalized service, and engaging in higher-level strategic work. The aim is for technology and people to work hand in hand."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string | string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`relative rounded-xl transition-all duration-300 ${isOpen ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.005 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 sm:py-6 px-4 sm:px-6 flex justify-between items-start text-left group"
      >
        <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
          <div className="flex-1">
            <span className={`text-base sm:text-lg font-medium transition-colors duration-200 ${isOpen ? 'bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent' : 'text-white/90 group-hover:text-white'}`}>
              {question}
            </span>
          </div>
        </div>
        <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`w-0.5 h-5 sm:h-6 rounded-full transition-colors duration-200 ${isOpen ? 'bg-gradient-to-b from-[#8A7FFB] to-[#B4B0FF]' : 'bg-white/60 group-hover:bg-white/80'}`} />
          </motion.div>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`w-5 sm:w-6 h-0.5 rounded-full transition-colors duration-200 ${isOpen ? 'bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF]' : 'bg-white/60 group-hover:bg-white/80'}`} />
          </motion.div>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-white/60">
              {Array.isArray(answer) ? (
                <div className="space-y-2">
                  {answer.map((line, index) => (
                    <p key={index} className="text-sm sm:text-base transition-colors duration-200 hover:text-white/80">
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-sm sm:text-base transition-colors duration-200 hover:text-white/80">
                  {answer}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-8 sm:py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Unlocking Growth with AI
          </h2>
          <p className="text-lg sm:text-xl text-white/80">
            Your Questions Answered
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((category, index) => (
            <motion.div 
              key={index} 
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                {category.category}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {category.questions.map((item, qIndex) => (
                  <FAQItem
                    key={qIndex}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="max-w-3xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white/90 mb-4">
            Ready to Explore the Possibilities?
          </h3>
          <GradientButton href="/survey" variant="wide" className="max-w-md mx-auto">
            Get Price
          </GradientButton>
          <p className="mt-4 text-white/60">
            Let's discuss how AI can transform your business and unlock effortless growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 