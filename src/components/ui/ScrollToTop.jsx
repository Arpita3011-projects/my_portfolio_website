import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

/**
 * Reusable scroll-to-top button.
 * - Shows after `thresholdPx` scroll.
 * - Smoothly scrolls to `targetId`.
 */
function ScrollToTop({
  targetId = 'hero',
  thresholdPx = 300,
  className = '',
  label = 'Scroll to top',
}) {

  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > thresholdPx)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [thresholdPx])

  function scrollToTop() {
    const el = document.getElementById(targetId)

    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
      return
    }

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.96, pointerEvents: visible ? 'auto' : 'none' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
      style={{ position: 'fixed', right: '1rem', bottom: '1.25rem', zIndex: 60 }}
    >
      <motion.button
        type="button"
        aria-label={label}
        onClick={scrollToTop}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
      >
        <FiArrowUp size={18} />
      </motion.button>
    </motion.div>
  )
}

export default ScrollToTop

