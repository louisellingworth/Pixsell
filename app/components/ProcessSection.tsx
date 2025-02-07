import { Timeline } from './ui/timeline'
import Card from './ui/Card'
import { motion } from 'framer-motion'
import WarningBanner from './ui/WarningBanner'

const timelineData = [
  {
    title: 'Discovery',
    subtitle: 'Laying the Foundation',
    shortDescription: 'Every successful transformation begins with a shared understanding.',
    content: {
      mainPoints: [
        'Deep Dive: We immerse ourselves in your world, learning the intricacies of your operations.',
        'Alignment: We discuss your goals, constraints, and vision, ensuring our capabilities align with your needs.',
        'Transparency: We build a foundation of trust, setting the stage for a successful, collaborative journey.',
      ],
      details: 'Just as a master architect studies the landscape before designing a building, we begin by deeply understanding your business. We conduct a comprehensive review of your workflows, processes, and operational challenges, identifying your pain points and uncovering hidden opportunities for optimization.'
    },
  },
  {
    title: 'System Design',
    subtitle: 'Envisioning the Future',
    shortDescription: 'From understanding comes a clear vision.',
    content: {
      mainPoints: [
        'Blueprint for Success: We meticulously map the systems and processes, designing a custom AI solution tailored to your specific needs.',
        'Visualizing the Transformation: We share detailed visuals, mappings, and workflows, giving you a clear picture of the proposed architecture.',
        'Early Wins: We provide tangible demonstrations or prototypes, showcasing the potential impact and solidifying confidence in our approach.',
      ],
      details: 'With a shared understanding of your unique landscape, we shift into strategic design. We are not just drawing up plans; we are creating a blueprint for your future success, a future powered by seamlessly integrated AI.'
    },
  },
  {
    title: 'Implementation',
    subtitle: 'From Vision to Reality',
    shortDescription: 'The turning point: where strategy meets execution.',
    content: {
      mainPoints: [
        'Building Your Future: We develop the complete system, ensuring all components are aligned and functioning cohesively as the engine of your growth.',
        'Seamless Integration: We connect your AI solution with your existing technology stack, creating smooth, efficient, and automated workflows.',
        'Empowering Your Team: We provide comprehensive training and resources, ensuring your team is equipped to maximize the system\'s potential.',
      ],
      details: 'This is where your custom AI system comes to life, seamlessly integrating into your operations, transforming the way you do business. This isn\'t just about installing software; it\'s about empowering your team and revolutionizing your workflows.'
    },
  },
  {
    title: 'Optimization',
    subtitle: 'Evolving Together',
    shortDescription: 'Our journey together doesn\'t end at implementation; it\'s just the beginning.',
    content: {
      mainPoints: [
        'Always-On Optimization: We continuously monitor performance, fine-tuning the system to meet your changing needs and maximize its impact.',
        'Adaptive Growth: We establish feedback loops, using insights to adapt and improve the solution over time.',
        'Innovation at Every Step: We proactively identify and propose enhancements or additional builds, unlocking new opportunities to keep you ahead of the curve.',
      ],
      details: 'We believe in long-term partnerships, a continuous evolution where your AI system adapts and grows alongside your business. We are your strategic partner, proactively identifying opportunities for the system and business to improve as a whole.'
    },
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="w-full py-8 sm:py-12 md:py-16 relative">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center px-6 sm:px-8 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
          What if your business worked for you?
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
          We don't just automate tasks; we install bespoke AI systems.
        </p>
        <p className="text-base sm:text-lg text-white/60 mx-4 sm:mx-8">
          We partner with you to understand your unique needs. Then build, test, learn, iterate and improve. 
          This is a partnership. Our systems become the engine of your growth, adapting and evolving as you do.
        </p>
      </div>

      {/* Timeline */}
      <Timeline data={timelineData} />

      {/* Warning Banner */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <WarningBanner 
          className="mt-8 sm:mt-12 md:mt-16"
          label="2025 Notice"
          message="Due to the nature of this 1-on-1 mentorship and implementation program, spots are extremely limited. If you're a founder already over $10k monthly revenue, then we invite you to join the waitlist and be first to find out when new spots open up."
        />
      </div>
    </section>
  )
} 