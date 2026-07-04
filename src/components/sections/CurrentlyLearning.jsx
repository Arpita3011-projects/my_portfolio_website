import { motion } from 'framer-motion'
import {
FiCode,
  FiLayers,
  FiPenTool,
  FiServer,
  FiTool,
  FiTrendingUp,
} from 'react-icons/fi'
import Section from '../ui/Section'
import { currentlyLearningContent } from '../../data/currentlyLearning'

const iconMap = {
  TypeScript: FiCode,
  React: FiLayers,
  Testing: FiPenTool,
  TestingLibrary: FiPenTool,
  Backend: FiServer,
  API: FiServer,
  System: FiTool,
  design: FiTrendingUp,
}

function resolveIcon(topicName) {
  const key = Object.keys(iconMap).find((k) => topicName.toLowerCase().includes(k.toLowerCase()))
  const Icon = key ? iconMap[key] : FiTool
  return <Icon className="h-4 w-4" />
}

function CurrentlyLearning() {
  return (
    <Section
      id="currently-learning"
      eyebrow={currentlyLearningContent.eyebrow}
      title={currentlyLearningContent.title}
      className="bg-white/70"
    >
      <div className="space-y-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="whitespace-pre-line text-lg leading-8 text-slate-600"
          >
            {currentlyLearningContent.intro}
          </motion.p>
        </div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2"
        >
          {currentlyLearningContent.topics.map((topic, index) => (
            <motion.article
              key={topic.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-700">
                  {resolveIcon(topic.name)}
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900">{topic.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Learning a relevant topic to apply in everyday development.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default CurrentlyLearning


