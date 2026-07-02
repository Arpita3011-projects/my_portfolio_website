import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FiCode,
  FiDatabase,
  FiDownload,
  FiGitBranch,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiServer,
  FiTerminal,
  FiTool,
} from 'react-icons/fi'
import Section from '../ui/Section'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { aboutContent } from '../../data/about'

const iconMap = {
  code: <FiCode size={16} />,
  layers: <FiLayers size={16} />,
  terminal: <FiTerminal size={16} />,
  globe: <FiGlobe size={16} />,
  server: <FiServer size={16} />,
  tool: <FiTool size={16} />,
  database: <FiDatabase size={16} />,
  branch: <FiGitBranch size={16} />,
  github: <FiGithub size={16} />,
}

function AnimatedCounter({ value, suffix, label }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1200
    const end = value
    const startTime = performance.now()

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(end * eased))

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }, [isInView, value])

  return (
    <div ref={ref} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-3xl font-semibold text-slate-900 sm:text-4xl">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{label}</p>
    </div>
  )
}

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section id="about" eyebrow={aboutContent.eyebrow} title={aboutContent.title} className="bg-white/70">
      <div ref={ref} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="space-y-4">
            {aboutContent.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutContent.highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
        >
          <Heading as="h3" className="mb-6">
            {aboutContent.builderTitle}
          </Heading>
          <p className="text-lg leading-8 text-slate-600">
            {aboutContent.builderText}
          </p>

          <div className="mt-6">
            <Button
              variant="primary"
              leftIcon={<FiDownload size={16} />}
              className="w-full justify-center sm:w-auto"
              onClick={() => window.open(aboutContent.resume.href, '_blank', 'noopener,noreferrer')}
            >
              {aboutContent.resume.label}
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {aboutContent.stats.map((stat) => (
          <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>

      <div className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{aboutContent.techHeading}</h3>
          <p className="text-sm text-slate-500">{aboutContent.techSubheading}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {aboutContent.technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-blue-600">
                {iconMap[tech.icon]}
              </span>
              <span className="text-sm font-medium text-slate-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default About
