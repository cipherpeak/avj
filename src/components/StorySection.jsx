import React from 'react'
import { motion } from 'framer-motion'

function StorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-soft-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16 md:space-y-24"
        >
          {/* 1. Widescreen Media Banner */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-[16/8] sm:aspect-[21/9] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-200/10 group cursor-pointer"
          >
            {/* Background image zoom on group-hover */}
            <img
              src="/images/gallery_statement_necklace.png"
              alt="Luxury Showcase Boutique"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out"
              loading="lazy"
            />
            {/* Inner Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 flex flex-col items-center justify-center p-4">
              
              {/* Play Button Overlay */}
              <button 
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/40 bg-white/10 hover:bg-white/25 hover:border-white/80 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105 mb-4 md:mb-6 shadow-2xl active:scale-95 group/play"
                aria-label="Play boutique film"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8 text-white translate-x-[2px] transition-transform duration-300 group-hover/play:scale-110">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>

              {/* Explore Now Pill Button */}
              <button 
                className="px-6 py-2.5 md:px-8 md:py-3 rounded-full bg-white hover:bg-champagne hover:text-white text-charcoal shadow-lg font-sans font-semibold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Explore Now
                <span className="font-serif text-sm">&gt;</span>
              </button>
            </div>
          </motion.div>

          {/* 2. Text Quote Divider */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 max-w-5xl mx-auto px-2"
          >
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-neutral-300/60" />
            <div className="flex items-center gap-1.5 text-champagne/80 shrink-0">
              <span className="text-[10px] md:text-xs">✦</span>
              <span className="text-xs md:text-sm font-serif">❖</span>
              <span className="text-[10px] md:text-xs">✦</span>
            </div>
            <p className="text-center font-serif italic text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed text-balance px-1">
              Trust us to be part of your precious moments and to deliver jewellery that you'll cherish forever.
            </p>
            <div className="flex items-center gap-1.5 text-champagne/80 shrink-0">
              <span className="text-[10px] md:text-xs">✦</span>
              <span className="text-xs md:text-sm font-serif">❖</span>
              <span className="text-[10px] md:text-xs">✦</span>
            </div>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-neutral-300/60" />
          </motion.div>

          {/* 3. Brand Promise Badges Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            
            {/* Badge 1: Mine Exchange */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-4 group/badge cursor-pointer"
            >
              <div className="relative w-20 h-20 rounded-full bg-champagne/5 border border-champagne/20 flex items-center justify-center transition-all duration-500 group-hover/badge:bg-champagne/10 group-hover/badge:border-champagne/40 group-hover/badge:scale-105 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-12 h-12 text-champagne" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="38" strokeWidth="1.5" strokeDasharray="5 3" />
                  <path d="M50 20 A30 30 0 0 1 80 50 A30 30 0 0 1 50 80 A30 30 0 0 1 20 50 A30 30 0 0 1 45 20" strokeLinecap="round" />
                  <polygon points="50 14 52 25 44 21" fill="currentColor" />
                  <text x="50" y="58" textAnchor="middle" fill="currentColor" stroke="none" className="font-serif text-2xl font-bold tracking-tight">M</text>
                </svg>
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-charcoal group-hover:text-champagne transition-colors duration-300">
                Mine Exchange
              </h3>
            </motion.div>

            {/* Badge 2: The Purity Guarantee */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-4 group/badge cursor-pointer"
            >
              <div className="relative w-20 h-20 rounded-full bg-champagne/5 border border-champagne/20 flex items-center justify-center transition-all duration-500 group-hover/badge:bg-champagne/10 group-hover/badge:border-champagne/40 group-hover/badge:scale-105 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-12 h-12 text-champagne" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="50 15 85 75 15 75" strokeLinejoin="round" />
                  <polygon points="50 36 70 70 30 70" strokeWidth="1.5" />
                  <circle cx="50" cy="54" r="5" fill="currentColor" />
                  <line x1="50" y1="15" x2="50" y2="36" />
                </svg>
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-charcoal group-hover:text-champagne transition-colors duration-300">
                The Purity Guarantee
              </h3>
            </motion.div>

            {/* Badge 3: Complete Transparency */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-4 group/badge cursor-pointer"
            >
              <div className="relative w-20 h-20 rounded-full bg-champagne/5 border border-champagne/20 flex items-center justify-center transition-all duration-500 group-hover/badge:bg-champagne/10 group-hover/badge:border-champagne/40 group-hover/badge:scale-105 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-12 h-12 text-champagne" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="50 15 80 40 50 85 20 40" strokeWidth="2.5" />
                  <line x1="20" y1="40" x2="80" y2="40" />
                  <line x1="50" y1="15" x2="50" y2="85" />
                  <line x1="35" y1="40" x2="50" y2="15" />
                  <line x1="65" y1="40" x2="50" y2="15" />
                  <line x1="35" y1="40" x2="50" y2="85" />
                  <line x1="65" y1="40" x2="50" y2="85" />
                </svg>
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-charcoal group-hover:text-champagne transition-colors duration-300">
                Complete Transparency <br className="hidden md:inline" /> and Trust
              </h3>
            </motion.div>

            {/* Badge 4: Lifetime Maintenance */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-4 group/badge cursor-pointer"
            >
              <div className="relative w-20 h-20 rounded-full bg-champagne/5 border border-champagne/20 flex items-center justify-center transition-all duration-500 group-hover/badge:bg-champagne/10 group-hover/badge:border-champagne/40 group-hover/badge:scale-105 shadow-sm">
                <svg viewBox="0 0 100 100" className="w-12 h-12 text-champagne" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M50 15 C65 15 80 20 80 20 C80 20 80 50 70 70 C60 85 50 90 50 90 C50 90 40 85 30 70 C20 50 20 20 20 20 C20 20 35 15 50 15 Z" strokeWidth="2.5" />
                  <path d="M50 35 L62 48 L50 62 L38 48 Z" fill="currentColor" />
                  <circle cx="50" cy="48" r="8" fill="none" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-charcoal group-hover:text-champagne transition-colors duration-300">
                Lifetime Maintenance
              </h3>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
