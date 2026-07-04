import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

import Section from '../ui/Section'
import Button from '../ui/Button'
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
                className="text-sm font-semibold text-slate-900 transition-colors hover:text-blue-600"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="pt-2">
            <Button
              variant="primary"
              href={contactContent.resume.href}
              className="w-full justify-center sm:w-auto"
              target={contactContent.resume.href?.startsWith('http') ? '_blank' : undefined}
              rel={contactContent.resume.href?.startsWith('http') ? 'noreferrer' : undefined}
            >
              {contactContent.resume.label}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.06, ease: 'easeOut' }}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
        >
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${contactContent.details.email}`}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-white hover:text-blue-600"
              >
                Email
              </a>
              {contactContent.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-white hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Contact

