import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Section from '../ui/Section'
import Heading from '../ui/Heading'
import { achievementsContent } from '../../data/achievements'

function Achievements() {
  return (
    <Section id="achievements" eyebrow={achievementsContent.eyebrow} title={achievementsContent.title} className="bg-white">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-slate-600">{achievementsContent.intro}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {achievementsContent.groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
            >
              <Heading as="h3" className="mb-4">
                {group.title}
              </Heading>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-[0.95rem] border border-slate-200 bg-slate-50/80 px-3.5 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-white hover:shadow-sm"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="truncate text-xs text-slate-600">{item.issuer} · {item.year}</p>
                    </div>
                    <FiArrowUpRight className="ml-3 h-4 w-4 shrink-0 text-slate-500" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Achievements
