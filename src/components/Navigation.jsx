import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'

function Navigation() {
  const { scrollY } = useScroll()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  
  // Hero section is 300vh tall, show navbar after scrolling past it
  const heroHeight = window.innerHeight * 3
  const navOpacity = useTransform(scrollY, [heroHeight - 100, heroHeight], [0, 1])
  const navY = useTransform(scrollY, [heroHeight - 100, heroHeight], [-100, 0])

  return (
    <motion.nav
      style={{ opacity: navOpacity, y: navY }}
      className="fixed top-0 left-0 right-0 z-50 bg-soft-white/95 backdrop-blur-sm border-b border-charcoal/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <h1 className="font-serif text-xl md:text-2xl font-semibold text-charcoal tracking-wide">
              MINE
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.05 }}
              className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              Collections
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 text-sm font-medium tracking-wide"
            >
              About Us
            </motion.a>
          </motion.div>

          {/* Shopping Bag Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-charcoal hover:text-champagne transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-charcoal hover:text-champagne transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
          className="mt-2 flex flex-col items-center space-y-4 overflow-hidden border-t border-charcoal/10"
        >
          <a href="#collections" className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 text-sm font-medium">
            Collections
          </a>
          <a href="#about" className="text-charcoal/70 hover:text-charcoal transition-colors duration-300 text-sm font-medium">
            About Us
          </a>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
