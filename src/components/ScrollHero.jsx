import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

// All scenes left-aligned with CTA buttons
const SCENES = [
  {
    range: [0, 0.25],
    eyebrow: '✦ The Art of Fine Jewellery',
    headline: ['Born in Light,', 'Crafted in Gold'],
    sub: 'Every piece tells a story older than time.',
    btn: 'Explore the Collection',
    btnHref: '#collections',
  },
  {
    range: [0.25, 0.50],
    eyebrow: '✦ Diamond Collection',
    headline: ['Pure Brilliance,', 'Forever Yours'],
    sub: 'Certified diamonds. Uncompromising clarity.',
    btn: 'Shop Diamonds',
    btnHref: '#diamonds',
  },
  {
    range: [0.50, 0.75],
    eyebrow: '✦ Handcrafted Heritage',
    headline: ['Where Tradition', 'Meets Elegance'],
    sub: 'Master artisans. Timeless designs passed through generations.',
    btn: 'Discover Craftsmanship',
    btnHref: '#craftsmanship',
  },
  {
    range: [0.75, 1.0],
    eyebrow: '✦ Mine Diamond Necklace Set',
    headline: ['Wear the', 'Moment'],
    sub: 'Discover the collection made exclusively for you.',
    btn: 'Shop Now',
    btnHref: '#shop',
  },
]

function getActiveScene(progress) {
  for (let i = 0; i < SCENES.length; i++) {
    const [start, end] = SCENES[i].range
    if (progress >= start && progress < end) return i
  }
  return SCENES.length - 1
}

// Staggered letter animation for headlines
function AnimatedHeadline({ lines }) {
  return (
    <div>
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className="overflow-hidden">
          <motion.span
            className="block text-white font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.6)' }}
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-60%', opacity: 0 }}
            transition={{
              duration: 0.75,
              delay: lineIdx * 0.12 + 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  )
}

function ScrollHero() {
  const containerRef = useRef(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeScene, setActiveScene] = useState(0)
  const totalFrames = 209

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1])

  // Preload all frames
  useEffect(() => {
    const loadImages = async () => {
      let loaded = 0
      const imagePromises = []
      for (let i = 1; i <= totalFrames; i++) {
        const frameNumber = i.toString().padStart(3, '0')
        const img = new Image()
        img.src = `/images/herosections/ezgif-frame-${frameNumber}.png`
        imagePromises.push(
          new Promise((resolve) => {
            img.onload = () => { loaded++; setLoadingProgress(Math.round((loaded / totalFrames) * 100)); resolve() }
            img.onerror = () => { loaded++; setLoadingProgress(Math.round((loaded / totalFrames) * 100)); resolve() }
          })
        )
      }
      await Promise.all(imagePromises)
      setImagesLoaded(true)
    }
    loadImages()
  }, [])

  useEffect(() => {
    const unsubFrame = frameIndex.on('change', (v) => setCurrentFrame(Math.round(v)))
    const unsubProgress = scrollYProgress.on('change', (v) => {
      setScrollProgress(v)
      setActiveScene(getActiveScene(v))
    })
    return () => { unsubFrame(); unsubProgress() }
  }, [frameIndex, scrollYProgress])

  const getFrameUrl = (frame) => {
    const n = (frame + 1).toString().padStart(3, '0')
    return `/images/herosections/ezgif-frame-${n}.png`
  }

  const scene = SCENES[activeScene]

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* Frame image */}
        <div className="absolute inset-0">
          {imagesLoaded ? (
            <img
              src={getFrameUrl(currentFrame)}
              alt={`Hero frame ${currentFrame}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            /* Loading screen */
            <div className="w-full h-full flex flex-col items-center justify-center bg-black">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-8"
              >
                <Sparkles className="w-10 h-10 text-[#dca932]" />
              </motion.div>
              <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">Preparing your experience</p>
              <div className="w-56 h-[1px] bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#dca932] to-white"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-white/30 text-xs mt-4 tabular-nums">{loadingProgress}%</p>
            </div>
          )}
        </div>

        {/* Deep left-side gradient for text area */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.05) 70%, transparent 100%)',
          }}
        />
        {/* Bottom vignette — solid black shelf at very bottom for seamless section blend */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #000000 0%, rgba(0,0,0,0.75) 12%, rgba(0,0,0,0.25) 28%, transparent 48%)' }}
        />

        {/* ─── Text Block (always left) ─── */}
        <div className="absolute inset-0 flex items-center z-10 pointer-events-none">
          <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5 max-w-xl pointer-events-auto"
              >
                {/* Eyebrow pill */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex items-center gap-2"
                >
                  <span className="text-[#dca932] text-xs font-medium tracking-[0.22em] uppercase">
                    {scene.eyebrow}
                  </span>
                </motion.div>

                {/* Animated headline lines */}
                <AnimatedHeadline key={`h-${activeScene}`} lines={scene.headline} />

                {/* Gold rule */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px w-20 bg-gradient-to-r from-[#dca932] to-transparent origin-left"
                />

                {/* Subline */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, delay: 0.4 }}
                  className="text-white/65 text-sm md:text-base font-light leading-relaxed tracking-wide"
                >
                  {scene.sub}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, delay: 0.5 }}
                >
                  <a
                    href={scene.btnHref}
                    className="group inline-flex items-center gap-3 mt-2"
                  >
                    <span className="relative px-7 py-3 text-sm font-medium tracking-[0.12em] uppercase text-white border border-white/30 hover:border-[#dca932] rounded-sm transition-all duration-300 overflow-hidden">
                      {/* shimmer fill on hover */}
                      <span className="absolute inset-0 bg-[#dca932] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                        {scene.btn}
                      </span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#dca932] group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scene dot indicators (right side) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {SCENES.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                i === activeScene
                  ? 'w-1.5 h-6 bg-[#dca932]'
                  : 'w-1.5 h-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Scroll cue — fades out after first scroll */}
        <motion.div
          animate={{ opacity: scrollProgress > 0.12 ? 0 : 1, y: scrollProgress > 0.12 ? 10 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-9 border border-white/30 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-[3px] h-[6px] bg-white/60 rounded-full" />
          </motion.div>
          <p className="text-white/30 text-[9px] tracking-[0.35em] uppercase">Scroll</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ScrollHero