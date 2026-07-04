import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Container from '../ui/Container'
import { navbarContent } from '../../data/navbar'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')
  const observerRef = useRef(null)

  const sectionIds = useMemo(() => {
    // navbar links are like #about, #skills, etc. Hero is #hero.
    return ['hero', ...navbarContent.links.map((l) => l.href.replace(/^#/, ''))]
  }, [])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    // Disconnect previous observer if any (e.g., HMR).
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      {
        root: null,
        // Slightly bias towards the top of the viewport.
        rootMargin: '-15% 0px -70% 0px',
        threshold: [0.01, 0.1, 0.25, 0.5, 0.75],
      },
    )

    for (const el of elements) observerRef.current.observe(el)

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [sectionIds])

  function linkClassName(href) {
    const isActive = href === activeHref

    return [
      'text-sm font-medium transition-all duration-200',
      'hover:text-slate-900',
      isActive ? 'text-blue-600' : 'text-slate-600',
    ].join(' ')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a
          href="#hero"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-base font-medium text-slate-700">
            {navbarContent.logo.initials}
          </span>
          <span>{navbarContent.logo.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navbarContent.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={linkClassName(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors duration-200 hover:border-slate-300 md:hidden"
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
            className="overflow-hidden border-t border-slate-200 bg-white/95 md:hidden"
          >
            <Container className="flex flex-col gap-3 py-4">
              {navbarContent.links.map((link) => {
                const isActive = link.href === activeHref

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      'rounded-xl px-2 py-2 text-sm font-medium transition-all',
                      'hover:bg-slate-50 hover:text-slate-900',
                      isActive ? 'text-blue-600' : 'text-slate-600',
                    ].join(' ')}
                  >
                    {link.label}
                  </a>
                )
              })}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

