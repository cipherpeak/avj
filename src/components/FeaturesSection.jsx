import React from 'react'
import { motion } from 'framer-motion'
import { Diamond, Shield, Truck, Sparkles } from 'lucide-react'

function FeaturesSection() {
  const features = [
    {
      icon: Diamond,
      title: 'Certified Diamonds',
      description: 'Every diamond is IGI certified for authenticity and quality assurance.'
    },
    {
      icon: Shield,
      title: 'Secure Checkout',
      description: 'Your payment information is protected with bank-level encryption.'
    },
    {
      icon: Truck,
      title: 'Free Insured Shipping',
      description: 'Complimentary worldwide delivery with full insurance coverage.'
    },
    {
      icon: Sparkles,
      title: 'Lifetime Care',
      description: 'Free cleaning and maintenance services for the lifetime of your jewelry.'
    }
  ]

  return (
    <section className="py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block text-champagne font-serif text-sm tracking-[0.3em] uppercase mb-6">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-8">
            The Mine Promise
          </h2>
          <p className="text-charcoal/60 text-lg md:text-xl max-w-3xl mx-auto">
            We're committed to providing an exceptional experience from the moment you browse 
            to the day you receive your jewelry and beyond.
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
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-soft-white flex items-center justify-center group-hover:bg-champagne/10 transition-colors duration-300"
              >
                <feature.icon className="w-10 h-10 text-charcoal group-hover:text-champagne transition-colors duration-300" />
              </motion.div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 md:mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-charcoal to-charcoal/80 rounded-3xl p-12 md:p-16 lg:p-20">
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Ready to Experience Luxury?
            </h3>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Connect with our jewelry experts for personalized assistance and make this 
              exquisite piece yours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-champagne text-charcoal px-12 py-5 rounded-full font-serif text-lg font-semibold hover:bg-champagne-light transition-colors duration-300"
            >
              Inquiry & Purchase
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
