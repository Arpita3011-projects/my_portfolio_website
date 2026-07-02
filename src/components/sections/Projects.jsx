import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Section from '../ui/Section'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { projectsContent } from '../../data/projects'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectsContent.projects
    return projectsContent.projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <Section id="projects" eyebrow={projectsContent.eyebrow} title={projectsContent.title} className="bg-white">
      <div className="space-y-8">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-slate-600">{projectsContent.intro}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {projectsContent.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.005, transition: { duration: 0.18 } }}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition-shadow duration-200 hover:shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured ? (
                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 backdrop-blur">
                    Featured
                  </span>
                ) : null}
              </div>

              <div className="space-y-5 p-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <Heading as="h3">{project.title}</Heading>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    variant="secondary"
                    className="px-4! py-2.5!"
                    leftIcon={<FiGithub size={16} />}
                    href={project.links?.github}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="primary"
                    className="px-4! py-2.5!"
                    leftIcon={<FiExternalLink size={16} />}
                    href={project.links?.demo}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </Section>
  )
}

export default Projects
