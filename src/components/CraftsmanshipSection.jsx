import React from 'react'
import { motion } from 'framer-motion'

function CraftsmanshipSection() {
  const features = [
    {
      title: 'Hand-Selected Diamonds',
      description: 'Each diamond is meticulously chosen for its exceptional clarity, cut, and brilliance.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 3h12l4 6-10 13L2 9z" />
        </svg>
      )
    },
    {
      title: 'Master Artisans',
      description: 'Our craftsmen bring decades of experience to every piece they create.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      title: 'Ethical Sourcing',
      description: 'All our diamonds are conflict-free and sourced from responsible suppliers.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Lifetime Warranty',
      description: 'We stand behind our craftsmanship with comprehensive warranty coverage.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-champagne font-serif text-sm tracking-[0.3em] uppercase mb-6">
            The Art of Perfection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
            Exceptional Craftsmanship
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            Every Mine Diamond piece is a testament to our unwavering commitment to excellence, 
            combining traditional techniques with modern precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-champagne/50 transition-all duration-500 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-full bg-champagne/20 flex items-center justify-center mb-6 text-champagne"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-serif text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Large Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 md:mt-24 bg-gradient-to-r from-champagne/20 to-champagne/5 rounded-3xl p-8 md:p-12 lg:p-16 border border-champagne/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                IGI Certified Excellence
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Every diamond in the Mine Diamond Necklace Set comes with an IGI certification, 
                guaranteeing its authenticity and quality. This independent verification ensures 
                you receive exactly what you deserve—nothing less than perfection.
              </p>
              <ul className="space-y-3">
                {['Diamond Clarity Grade', 'Color Certification', 'Cut Quality Assessment', 'Carat Weight Verification'].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-champagne" />
                    <span className="text-white/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-champagne/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M6 3h12l4 6-10 13L2 9z" />
                  </svg>
                </div>
                <p className="text-champagne font-serif text-2xl font-semibold">IGI Certified</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CraftsmanshipSection
