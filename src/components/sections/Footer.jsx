import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

import Section from '../ui/Section'
import { footerContent } from '../../data/footer'

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  leetcode: SiLeetcode,
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <Section className="bg-slate-50/0 pt-0" eyebrow={null} title={null}>
      <div className="border-t border-slate-200/80">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="pb-10 pt-8"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-tight text-slate-900">{footerContent.name}</p>
              <p className="text-sm text-slate-600">{footerContent.tagline}</p>
            </div>

            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                {footerContent.socialLinks.map((item) => {
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
          </div>

          <div className="pt-10">
            <p className="text-sm text-slate-500">© {year} {footerContent.name}. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Footer

