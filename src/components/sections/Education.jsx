import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Heading from '../ui/Heading'
import { educationContent } from '../../data/education'

function Education() {
  return (
    <Section id="education" eyebrow={educationContent.eyebrow} title={educationContent.title} className="bg-white/70">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-slate-600">{educationContent.educations.length} learning milestones</p>
        </div>


        <div className="grid gap-6 md:grid-cols-2">
          {educationContent.educations.map((edu, index) => (
            <motion.article
              key={`${edu.degree}-${edu.university}-${index}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="space-y-3">
                <Heading as="h3">{edu.degree}</Heading>
                <p className="text-sm font-medium tracking-tight text-slate-900">{edu.branch}</p>

                <div className="space-y-2 rounded-[1rem] border border-slate-200 bg-slate-50/60 p-4">
                  <p className="text-sm font-semibold text-slate-800">{edu.collegeName}</p>
                  <p className="text-sm text-slate-600">{edu.university}</p>

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-600">{edu.duration}</p>
                    {edu.cgpa ? (
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                        CGPA {edu.cgpa}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Education

