// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Section from './components/ui/Section'
import Button from './components/ui/Button'
import Heading from './components/ui/Heading'
import { heroContent } from './data/hero'

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
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
                {heroContent.eyebrow}
              </p>
              <Heading as="h1" className="max-w-xl">
                {heroContent.title}
              </Heading>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                {heroContent.description}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            >
              <Button variant={heroContent.buttons[0].variant}>{heroContent.buttons[0].label}</Button>
              <Button variant={heroContent.buttons[1].variant}>{heroContent.buttons[1].label}</Button>
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
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
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
            <div className="group relative w-full max-w-[22rem] rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1 sm:max-w-[24rem] sm:p-4 lg:max-w-[20rem]">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(125,211,252,0.08),rgba(255,255,255,0.85))] opacity-90" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100">
                <div className="aspect-[4/5] w-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.2),transparent_35%),linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)]" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/20 to-transparent p-6">
                  <div className="rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur">
                    {heroContent.profileLabel}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-slate-500"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em]">{heroContent.scrollLabel}</span>
          <span className="mt-2 h-6 w-[1px] bg-slate-300" />
        </motion.div>
      </Section>

      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default App