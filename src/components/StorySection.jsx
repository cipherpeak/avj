import React from 'react'
import { motion } from 'framer-motion'

function StorySection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-soft-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-champagne font-serif text-sm tracking-[0.3em] uppercase mb-6">
            Our Story
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-8">
            Crafted with Passion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden flex items-center justify-center border border-charcoal/5 shadow-2xl">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="text-center p-12"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-champagne/20 to-champagne/5 flex items-center justify-center">
                  <svg className="w-24 h-24 text-champagne/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-charcoal/50 text-sm font-serif italic">Artisan Craftsmanship</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-charcoal/70 text-lg md:text-xl leading-relaxed"
            >
              Every Mine Diamond piece begins with a vision—a dream of capturing the eternal beauty 
              of nature's most precious creations. Our master craftsmen spend countless hours perfecting 
              each detail, ensuring that every diamond is set with precision and care.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-charcoal/70 text-lg md:text-xl leading-relaxed"
            >
              The Mine Diamond Necklace Set represents the pinnacle of our artistry. Each diamond is 
              hand-selected for its exceptional clarity and brilliance, then carefully set in lustrous 
              rose gold to create a piece that transcends time.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-charcoal/70 text-lg md:text-xl leading-relaxed"
            >
              When you wear Mine Diamond jewelry, you're not just wearing a piece of luxury—you're 
              wearing a story of dedication, passion, and the relentless pursuit of perfection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 border-t border-charcoal/10"
            >
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-champagne mb-2">25+</div>
                  <div className="text-charcoal/60 text-sm">Years of Excellence</div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-champagne mb-2">10K+</div>
                  <div className="text-charcoal/60 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-champagne mb-2">100%</div>
                  <div className="text-charcoal/60 text-sm">Certified Diamonds</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
