import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const CATEGORIES = [
  { label: 'Office Wear',       image: '/images/gallery_statement_necklace.png', tagline: 'Minimal elegance for the modern professional' },
  { label: 'Party Wear',        image: '/images/gemstone_necklace.png',          tagline: 'Turn heads at every celebration'               },
  { label: 'Bridal Collection', image: '/images/gold_necklace.png',              tagline: 'Timeless pieces for your special day'          },
  { label: 'Day Wear',          image: '/images/pearl_necklace.png',             tagline: 'Effortless style for everyday luxury'           },
  { label: 'Heritage',          image: '/images/uncut_necklace.png',             tagline: 'Traditional artistry meets modern design'      },
  { label: 'Diamond Edit',      image: '/images/diamond_necklace.png',           tagline: 'Curated brilliance for connoisseurs'           },
]

function CraftsmanshipSection() {
  const scrollRef  = useRef(null)
  const cardRefs   = useRef([])
  const [activeIdx, setActiveIdx]         = useState(0)
  const [canScrollLeft, setCanScrollLeft]   = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  /* ── scroll a specific card into centre view ── */
  const scrollToCard = useCallback((idx) => {
    const el = scrollRef.current
    if (!el) return
    const card = cardRefs.current[idx]
    if (!card) return
    const target = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2
    el.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
    setActiveIdx(idx)                       // animate immediately — don't wait for scroll
    setCanScrollLeft(idx > 0)
    setCanScrollRight(idx < CATEGORIES.length - 1)
  }, [])

  /* ── keep activeIdx in sync while free-scrolling ── */
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      const centre = el.scrollLeft + el.clientWidth / 2
      let closest = 0, closestDist = Infinity
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - centre)
        if (dist < closestDist) { closestDist = dist; closest = i }
      })
      setActiveIdx(closest)
      setCanScrollLeft(el.scrollLeft > 10)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
        >
          <div>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-semibold mb-2">
              ✦ Shop by Occasion
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-charcoal leading-tight">
              Find Your Perfect Look
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-[220px] leading-relaxed hidden sm:block">
            From boardrooms to ballrooms — curated for every moment.
          </p>
        </motion.div>
      </div>

      {/* ── Carousel ── */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8 py-6"
          style={{ scrollPaddingInline: '1.5rem' }}
        >
          {CATEGORIES.map((cat, i) => {
            const isActive = i === activeIdx
            /* distance from active — used for graduated dimming */
            const dist = Math.abs(i - activeIdx)

            return (
              <motion.div
                key={i}
                ref={el => cardRefs.current[i] = el}
                data-card
                /* ── per-card motion state ── */
                animate={{
                  scale:   isActive ? 1 : dist === 1 ? 0.95 : 0.89,
                  opacity: isActive ? 1 : dist === 1 ? 0.72 : 0.48,
                  y:       isActive ? 0  : dist === 1 ? 10   : 18,
                  boxShadow: isActive
                    ? '0 20px 56px rgba(0,0,0,0.38), 0 0 0 2.5px #D4AF37'
                    : '0 4px 20px rgba(0,0,0,0.12), 0 0 0 0px transparent',
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollToCard(i)}
                className="relative flex-shrink-0 snap-center rounded-2xl overflow-hidden cursor-pointer
                           w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px]
                           h-[440px] md:h-[480px]"
              >
                {/* Image with zoom on active */}
                <motion.img
                  src={cat.image}
                  alt={cat.label}
                  animate={{ scale: isActive ? 1.06 : 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />

                {/* Gradient — deeper on active */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.7 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                />

                {/* Gold shimmer on active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="shimmer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/12 via-transparent to-white/5 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Active badge */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="badge"
                      initial={{ opacity: 0, scale: 0.7, y: -6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.7, y: -6 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#D4AF37] text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                    >
                      <span className="w-1 h-1 rounded-full bg-white/80 animate-pulse" />
                      Selected
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card number */}
                <div className="absolute top-4 right-4">
                  <motion.span
                    animate={{ opacity: isActive ? 0 : 0.35 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-white text-xs tracking-widest"
                  >
                    0{i + 1}
                  </motion.span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">

                  {/* Tagline — only on active */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.p
                        key={`tag-${i}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="text-white/60 text-xs tracking-wide mb-2.5 leading-relaxed"
                      >
                        {cat.tagline}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Label */}
                  <motion.h3
                    animate={{
                      fontSize: isActive ? '1.2rem' : '1rem',
                      color: isActive ? '#ffffff' : 'rgba(255,255,255,0.75)',
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif font-semibold tracking-wide leading-tight"
                  >
                    {cat.label}
                  </motion.h3>

                  {/* Gold underline — grows on active */}
                  <motion.div
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.45, delay: isActive ? 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
                    className="h-[1.5px] w-full bg-gradient-to-r from-[#D4AF37] to-transparent mt-3 origin-left"
                  />

                  {/* Shop CTA — only on active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key={`cta-${i}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.38, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4"
                      >
                        <button className="inline-flex items-center gap-2 text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.18em] hover:gap-3 transition-all duration-300 group">
                          Shop Collection
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Navigation ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-between">

          <div className="flex items-center gap-4">
            {/* Prev */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToCard(Math.max(0, activeIdx - 1))}
              disabled={!canScrollLeft}
              className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'border-neutral-300 text-neutral-600 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/6'
                  : 'border-neutral-150 text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {CATEGORIES.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  animate={{
                    width:           i === activeIdx ? 24 : 6,
                    backgroundColor: i === activeIdx ? '#D4AF37' : '#d1d5db',
                    opacity:         i === activeIdx ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-1.5 rounded-full cursor-pointer"
                  aria-label={`Go to ${CATEGORIES[i].label}`}
                />
              ))}
            </div>

            {/* Next */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToCard(Math.min(CATEGORIES.length - 1, activeIdx + 1))}
              disabled={!canScrollRight}
              className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'border-neutral-300 text-neutral-600 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/6'
                  : 'border-neutral-150 text-neutral-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Active label */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIdx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block font-serif text-sm text-charcoal font-medium"
            >
              {CATEGORIES[activeIdx].label}
              <span className="text-[#D4AF37] ml-2 text-xs font-sans tracking-widest">
                0{activeIdx + 1} / 0{CATEGORIES.length}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default CraftsmanshipSection
