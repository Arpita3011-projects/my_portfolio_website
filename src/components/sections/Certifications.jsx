import { motion } from 'framer-motion'
import { FiFileText, FiTool } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { FaServer } from 'react-icons/fa'

import Section from '../ui/Section'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { certificationsContent } from '../../data/certifications'

const iconMap = {
  nptel: SiLeetcode,
  dsa: FiTool,
  react: MdOutlineCloudUpload,
  api: FaServer,
}


function Certifications() {
  const unique = []
  const seenDevTown = new Set()

  for (const cert of certificationsContent.certifications) {
    if (cert.organization === 'DevTown') {
      const key = 'devtown-apis'
      if (seenDevTown.has(key)) continue
      seenDevTown.add(key)
    }
    unique.push(cert)
  }

  return (
    <Section
      id="certifications"
      eyebrow={certificationsContent.eyebrow}
      title={certificationsContent.title}
      className="bg-white/70"
    >
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-slate-600">{certificationsContent.intro}</p>
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          {unique.map((cert, index) => {
            const Icon = iconMap[cert.icon] || FiFileText

            return (
              <motion.article
                key={cert.id || cert.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <Heading as="h3" className="mb-2">
                      {cert.title}
                    </Heading>

                    <p className="text-sm font-medium tracking-tight text-slate-900">{cert.organization}</p>
                    {cert.year ? (
                      <p className="mt-1 text-sm text-slate-600">{cert.year}</p>
                    ) : null}

                    <p className="mt-3 text-sm leading-7 text-slate-600">{cert.description}</p>
                  </div>

                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                    <Icon size={18} />
                  </span>
                </div>

                {cert.certificate ? (
                  <div className="mt-5">
                    <Button
                      variant="secondary"
                      leftIcon={<FiFileText size={16} />}
                      href={cert.certificate}
                      className="w-full justify-center"
                      target={cert.certificate?.startsWith('http') ? '_blank' : undefined}
                      rel={cert.certificate?.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      View Certificate
                    </Button>
                  </div>
                ) : null}
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}

export default Certifications

