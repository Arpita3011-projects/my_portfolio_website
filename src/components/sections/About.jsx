import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import Section from '../ui/Section'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { aboutContent } from '../../data/about'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <Section id="about" eyebrow={aboutContent.eyebrow} title={aboutContent.title} className="bg-white/70">
      <div ref={ref} className="max-w-3xl">
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

          <Heading as="h3" className="mt-8">
            {aboutContent.builderTitle}
          </Heading>
          <p className="text-lg leading-8 text-slate-600">{aboutContent.builderText}</p>

          <div className="mt-6 grid gap-3">
            {aboutContent.focusAreas.map((item) => (
              <div key={item} className="rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>

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
    </Section>
  )
}

export default About


