import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

/* ── Animated counter ── */
function Counter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = parseFloat(target)
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(parseFloat(start.toFixed(1)))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {Number.isInteger(parseFloat(target)) ? Math.floor(count) : count}
      {suffix}
    </span>
  )
}

const STATS = [
  { value: '25',   suffix: '+',   label: 'Years of Legacy'    },
  { value: '2500', suffix: '+',   label: 'Happy Families'     },
  { value: '98',   suffix: '%',   label: 'Would Recommend'    },
  { value: '100',  suffix: '%',   label: 'Hallmark Certified' },
]

const PILLARS = [
  { num: '01', title: 'Mine Exchange',      desc: 'Full value credit to upgrade anytime.' },
  { num: '02', title: 'Purity Guarantee',   desc: 'BIS hallmarked & IGI certified always.' },
  { num: '03', title: 'Full Transparency',  desc: 'Live pricing, zero hidden charges.' },
  { num: '04', title: 'Lifetime Care',      desc: 'Free cleaning & polishing, forever.' },
]

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeLeft = (delay = 0) => ({
  initial:    { opacity: 0, x: -36 },
  whileInView: { opacity: 1, x: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

const fadeRight = (delay = 0) => ({
  initial:    { opacity: 0, x: 36 },
  whileInView: { opacity: 1, x: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

function StorySection() {
  return (
    <section className="bg-[#181818] overflow-hidden">

      {/* ── Part 1 : Section label ── */}
      <motion.div
        {...fadeUp(0)}
        className="flex items-center gap-4 px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 max-w-7xl mx-auto"
      >
        <div className="h-px flex-1 bg-white/8" />
        <p className="text-[#D4AF37] text-[10px] tracking-[0.4em] uppercase font-semibold whitespace-nowrap">
          ✦ Our Heritage
        </p>
        <div className="h-px flex-1 bg-white/8" />
      </motion.div>

      {/* ── Part 2 : Editorial split ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left — image with gold frame */}
          <motion.div {...fadeLeft(0.1)} className="lg:col-span-5 relative">
            {/* Outer gold corner frame */}
            <div className="relative">
              {/* Corner accents */}
              <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] z-10" />
              <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] z-10" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="/images/gallery_statement_necklace.png"
                  alt="AVG Jewellery Craftsmanship"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Inner dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#D4AF37]/80 hover:border-[#D4AF37] transition-all duration-400 shadow-2xl"
                    aria-label="Play"
                  >
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </motion.button>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/40 text-[9px] tracking-[0.3em] uppercase mb-1">Established</p>
                  <p className="font-serif text-white text-2xl font-light tracking-widest">1999</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — brand story */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Heading */}
            <motion.div {...fadeRight(0.15)}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15] tracking-tight">
                Born from the Heart<br />
                <span className="text-[#D4AF37]">of Indian Artistry</span>
              </h2>
            </motion.div>

            {/* Body */}
            <motion.p {...fadeRight(0.22)} className="text-white/45 text-sm md:text-base leading-relaxed max-w-lg">
              For over two decades, AVG Jewellers has been weaving stories in gold and diamond. Every
              piece we create carries the soul of our craftsmen — hands that have shaped heirlooms
              for mothers, daughters, and brides across generations.
            </motion.p>

            {/* Quote */}
            <motion.div {...fadeRight(0.28)} className="border-l-2 border-[#D4AF37] pl-5 md:pl-6">
              <p className="font-serif italic text-white/60 text-base md:text-lg leading-relaxed">
                "We don't just sell jewellery. We create memories that outlast lifetimes."
              </p>
              <p className="text-[#D4AF37]/60 text-xs tracking-[0.2em] uppercase mt-2">— AVG Founder</p>
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeRight(0.34)}>
              <a
                href="#"
                className="inline-flex items-center gap-3 group"
              >
                <span className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.15em] rounded-full hover:border-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37]/8">
                  Discover Our Story
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>

            {/* Brand pillars */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-white/8 rounded-xl overflow-hidden mt-2"
            >
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.55, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`
                    group flex items-start gap-4 p-5 cursor-default
                    hover:bg-white/4 transition-colors duration-300
                    ${i % 2 === 0 ? 'sm:border-r border-white/8' : ''}
                    ${i < 2 ? 'border-b border-white/8' : ''}
                  `}
                >
                  <span className="font-serif text-[#D4AF37]/50 text-xs font-light leading-none mt-0.5 flex-shrink-0 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {p.num}
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300 mb-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-white/30 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Part 3 : Stats bar ── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(i * 0.07)}
                className={`
                  text-center
                  ${i < STATS.length - 1 ? 'md:border-r md:border-white/10' : ''}
                `}
              >
                <p className="font-serif text-3xl md:text-4xl font-light text-[#D4AF37] leading-none">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/35 text-xs tracking-[0.18em] uppercase mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default StorySection
