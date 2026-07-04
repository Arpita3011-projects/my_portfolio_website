import { useMemo, useRef } from 'react'

import { motion, useInView } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
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
import { skillsContent } from '../../data/skills'

const iconMap = {
  code: FiCode,
  layers: FiLayers,
  terminal: FiTerminal,
  globe: FiGlobe,
  server: FiServer,
  tool: FiTool,
  database: FiDatabase,
  branch: FiGitBranch,
  github: FiGithub,
}

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const groups = useMemo(() => skillsContent.groups, [])

  return (
    <Section id="skills" eyebrow={skillsContent.eyebrow} title={skillsContent.title} className="bg-slate-50/70">
      <div ref={ref} className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-lg leading-8 text-slate-600">{skillsContent.intro}</p>
        </motion.div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => (
            <motion.div
              layout
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: 0.06 * index, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
            >
              <Heading as="h3" className="mb-5">
                {group.title}
              </Heading>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || FiLayers

                  return (
                    <span
                      key={skill.name}
                      className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-600 transition-colors duration-200 group-hover:text-blue-600">
                        <Icon className="h-4 w-4" />
                      </span>
                      {skill.name}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}


export default Skills
