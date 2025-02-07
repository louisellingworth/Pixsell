import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '../../ui/Card'
import FoundersTestimonials from './FoundersTestimonials'
import TeamTestimonials from './TeamTestimonials'

interface ChallengeProps {
  title: string
  description: string
}

interface SolutionProps {
  title: string
  description: string[]
}

interface ResultProps {
  metric: string
  value: string
  description: string
}

const challenges: ChallengeProps[] = [
  {
    title: "Lack of Operations Structure",
    description: "No formal operations in place, with team members wearing multiple hats leading to unclear roles and responsibilities."
  },
  {
    title: "Poor Lead Targeting",
    description: "Struggled with targeting and identifying the right customers, with subpar data providers and no systematic approach."
  },
  {
    title: "Absent Marketing Strategy",
    description: "No organized marketing strategy or supporting materials, leading to sporadic lead generation."
  },
  {
    title: "Inefficient Sales-CS Handover",
    description: "Information loss during Sales to Customer Success transitions, causing inefficient onboarding."
  },
  {
    title: "Unclear Product Direction",
    description: "Difficulty turning product ideas into actionable development plans, resulting in slow progress."
  },
  {
    title: "Documentation Gaps",
    description: "Outdated knowledge base and limited up-to-date product documentation or video content."
  }
]

const solutions: SolutionProps[] = [
  {
    title: "Operations Overhaul",
    description: [
      "Implemented optimized systems and clear KPI tracking",
      "Clarified roles and responsibilities",
      "Established structured processes"
    ]
  },
  {
    title: "Targeted Lead Generation",
    description: [
      "Refined ICP based on customer data",
      "Set up qualified account generation system",
      "Implemented lead prioritization framework",
      "Conducted TAM/SAM/SOM analysis"
    ]
  },
  {
    title: "Marketing Infrastructure",
    description: [
      "Implemented automation tools for lead scaling",
      "Established content production system",
      "Created regular content calendar"
    ]
  },
  {
    title: "Sales-CS Integration",
    description: [
      "Structured handover process implementation",
      "Information transfer optimization",
      "Enhanced onboarding experience"
    ]
  },
  {
    title: "Product Development Structure",
    description: [
      "Created structured product development process",
      "Implemented actionable DevOps roadmap",
      "Enhanced product direction communication"
    ]
  },
  {
    title: "Knowledge Management",
    description: [
      "Updated entire knowledge base",
      "Created high-quality video guides",
      "Implemented documentation update system"
    ]
  }
]

const results: ResultProps[] = [
  {
    metric: "Series A Funding",
    value: "$5M",
    description: "Successfully secured in a challenging investment market"
  },
  {
    metric: "Operations Efficiency",
    value: "100%",
    description: "Improvement in team coordination and task management"
  },
  {
    metric: "Lead Quality",
    value: "3x",
    description: "Increase in qualified lead generation"
  },
  {
    metric: "Customer Satisfaction",
    value: "95%",
    description: "Positive feedback on improved onboarding process"
  }
]

export default function KlusterCaseStudy() {
  return (
    <article className="max-w-5xl mx-auto pt-32">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[400px] mb-16 rounded-2xl overflow-hidden"
      >
        <Image
          src="/case-studies/kluster-hero.jpg"
          alt="Kluster Success Story"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
          How We Helped Kluster Scale and Secure a Series A
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          From operational chaos to securing $5M in Series A funding, discover how we transformed Kluster's business operations through AI-driven systems and strategic improvements.
        </p>
      </motion.div>

      {/* Background Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Background
          </h3>
          <p className="text-white/80 mb-6">
            When we first started working with Kluster, they were a typical fast-paced startup with lots of potential but without the operational foundation needed for sustainable growth. Like many early-stage companies, Kluster faced several key challenges that needed to be addressed to enable their next phase of growth.
          </p>
        </Card>
      </motion.section>

      {/* Challenges Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-3xl font-semibold mb-8 text-center">Challenges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <h4 className="text-xl font-medium mb-3 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {challenge.title}
                </h4>
                <p className="text-white/70">{challenge.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Solutions Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-3xl font-semibold mb-8 text-center">Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <h4 className="text-xl font-medium mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {solution.title}
                </h4>
                <ul className="space-y-2">
                  {solution.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-3xl font-semibold mb-8 text-center">Results</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={result.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {result.value}
                </div>
                <h4 className="text-lg font-medium mb-2 text-white/90">
                  {result.metric}
                </h4>
                <p className="text-sm text-white/70">
                  {result.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Conclusion Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Conclusion
          </h3>
          <p className="text-white/80 mb-6">
            Kluster was able to lay down the operational foundations necessary to scale effectively and secure the investment needed to fuel their next stage of growth. With a focus on implementation, Kluster now has the systems and processes in place to grow sustainably while delivering value to both their customers and investors.
          </p>
        </Card>
      </motion.section>

      {/* Testimonials */}
      <FoundersTestimonials />
      <TeamTestimonials />
    </article>
  )
} 