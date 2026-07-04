import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

import Section from '../ui/Section'
import { contactContent } from '../../data/contact'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  leetcode: SiLeetcode,
}

function Contact() {
  return (
    <Section id="contact" eyebrow={contactContent.eyebrow} title={contactContent.title} className="bg-white/70">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-lg leading-8 text-slate-600 whitespace-pre-line">{contactContent.intro}</p>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
                <FiMail size={18} />
              </div>
              <a
                href={`mailto:${contactContent.details.email}`}
                className="text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
              >
                {contactContent.details.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {contactContent.socialLinks.map((item) => {
                const Icon = iconMap[item.icon]
                const isHttp = item.href.startsWith('http')

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isHttp ? '_blank' : undefined}
                    rel={isHttp ? 'noreferrer' : undefined}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </Section>
  )
}

export default Contact

