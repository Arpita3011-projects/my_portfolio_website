import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'

import Education from './components/sections/Education'
import CurrentlyLearning from './components/sections/CurrentlyLearning'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'



import Section from './components/ui/Section'
import Button from './components/ui/Button'
import Heading from './components/ui/Heading'
import { heroContent } from './data/hero'
import heroImage from './assets/images/hero.png'
import Footer from './components/sections/Footer'
import ScrollToTop from './components/ui/ScrollToTop'


function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Section id="hero" className="relative min-h-screen pt-24 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">{heroContent.title}</p>
              <Heading as="h1" className="max-w-xl">
                {heroContent.name}
              </Heading>
              <p className="max-w-xl text-lg leading-8 text-slate-600">{heroContent.intro}</p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              {heroContent.buttons.map((button) => (
                <Button
                  key={button.label}
                  variant={button.variant}
                  href={button.href}
                  target={button.href?.startsWith('http') ? '_blank' : undefined}
                  rel={button.href?.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {button.label}
                </Button>
              ))}
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
            >
              {heroContent.socialLinks.map((item) => {
                const iconMap = {
                  github: <FiGithub size={18} />,
                  linkedin: <FiLinkedin size={18} />,
                  mail: <FiMail size={18} />,
                  leetcode: <SiLeetcode size={18} />,
                  resume: <FiFileText size={18} />,
                }


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
                    {iconMap[item.icon]}
                  </a>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div className="group relative w-full max-w-88 rounded-4xl border border-slate-200 bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 sm:max-w-[24rem] sm:p-4 lg:max-w-[20rem]">
              <div className="absolute inset-0 rounded-4xl bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(125,211,252,0.08),rgba(255,255,255,0.85))] opacity-90" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
                <img
                  src={heroImage}
                  alt={`${heroContent.name} profile`}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <About />
      <Education />
      <Skills />
      <CurrentlyLearning />

      <Projects />
      <Certifications />


      <Contact />

      <Footer />
      <ScrollToTop />
    </main>
  )
}



export default App


