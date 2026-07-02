import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { navbarContent } from '../../data/navbar'

function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? 'border-slate-800/80 bg-slate-950/80'
          : 'border-slate-200/80 bg-white/70'
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a
          href="#home"
          className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] transition-colors ${
            isDark ? 'text-slate-100' : 'text-slate-900'
          }`}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-base font-medium ${
              isDark
                ? 'border-slate-700 bg-slate-900 text-slate-100'
                : 'border-slate-200 bg-slate-100 text-slate-700'
            }`}
          >
            {navbarContent.logo.initials}
          </span>
          <span>{navbarContent.logo.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navbarContent.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant={isDark ? 'secondary' : 'primary'}
            onClick={() => setIsDark((value) => !value)}
            className="px-3 py-2 text-xs sm:px-4 sm:text-sm"
          >
            {isDark ? (
              <span className="flex items-center gap-2">
                <FiSun size={14} />
                <span>{navbarContent.themeButton.light}</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <FiMoon size={14} />
                <span>{navbarContent.themeButton.dark}</span>
              </span>
            )}
          </Button>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 md:hidden ${
              isDark
                ? 'border-slate-700 bg-slate-900 text-slate-100 hover:border-slate-600'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
            }`}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`overflow-hidden border-t md:hidden ${
              isDark ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'
            }`}
          >
            <Container className="flex flex-col gap-3 py-4">
              {navbarContent.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-2 py-2 text-sm font-medium transition-colors ${
                    isDark ? 'text-slate-300 hover:bg-slate-900 hover:text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
