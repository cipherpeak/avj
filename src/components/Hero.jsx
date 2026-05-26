import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-soft-white to-white">
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-champagne rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-charcoal rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Large Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-square max-w-lg mx-auto lg:mx-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden flex items-center justify-center border border-charcoal/5 shadow-2xl">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center p-12"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 rounded-full bg-gradient-to-br from-champagne/30 to-champagne/10 flex items-center justify-center shadow-inner">
                  <motion.svg
                    initial={{ rotate: -10 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-32 h-32 md:w-40 md:h-40 text-champagne/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path d="M6 3h12l4 6-10 13L2 9z" />
                  </motion.svg>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Product Title and Description */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block text-champagne font-serif text-sm tracking-[0.3em] uppercase mb-6">
                Introducing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-charcoal leading-tight mb-8"
            >
              Mine Diamond
              <br />
              <span className="text-champagne">Necklace Set</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-sans text-charcoal/60 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Exquisite craftsmanship meets timeless elegance. Featuring brilliant-cut diamonds 
              set in lustrous rose gold, designed to make every moment unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center justify-center lg:justify-start space-x-4"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-green-100 text-green-800">
                In Stock
              </span>
              <span className="text-charcoal/50 text-sm">SKU: NSMPHRGEN033NK2</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-charcoal/20 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-charcoal/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
