import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

function DetailsSection() {
  const sliderRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const items = [
    {
      id: 1,
      title: 'Diamond Necklace',
      price: 'Starts from ₹65,000',
      image: '/images/diamond_necklace.png'
    },
    {
      id: 2,
      title: 'Gold Necklace',
      price: 'Starts from ₹35,000',
      image: '/images/gold_necklace.png'
    },
    {
      id: 3,
      title: 'Gemstone Necklace',
      price: 'Starts from ₹55,000',
      image: '/images/gemstone_necklace.png'
    },
    {
      id: 4,
      title: 'Uncut Necklace',
      price: 'Starts from ₹55,000',
      image: '/images/uncut_necklace.png'
    },
    {
      id: 5,
      title: 'Pearl Necklace',
      price: 'Starts from ₹45,000',
      image: '/images/pearl_necklace.png'
    }
  ]

  const updateArrows = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setShowLeftArrow(scrollLeft > 10)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('scroll', updateArrows)
      // Check initially
      updateArrows()
      // Also check on window resize
      window.addEventListener('resize', updateArrows)
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', updateArrows)
      }
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-soft-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-10"
        >
          {/* Header Area */}
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-charcoal tracking-wide">
              Trendy Necklaces
            </h2>
            <a 
              href="#view-all" 
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-champagne hover:text-charcoal transition-colors duration-300 group/link"
            >
              View All 
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Slider Container with absolute positioning for floating arrows */}
          <div className="relative group/slider px-4 md:px-0">
            {/* Left Floating Arrow */}
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute -left-4 md:-left-6 top-[35%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white hover:bg-neutral-50 shadow-lg flex items-center justify-center text-charcoal border border-neutral-100 hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Right Floating Arrow */}
            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute -right-4 md:-right-6 top-[35%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-charcoal text-white hover:bg-champagne shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* The Horizontal Scrollable Div */}
            <div
              ref={sliderRef}
              className="flex overflow-x-auto no-scrollbar gap-6 pb-4 snap-x snap-mandatory scroll-smooth"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="min-w-[85%] sm:min-w-[46%] md:min-w-[30%] lg:min-w-[23.5%] snap-start group cursor-pointer"
                >
                  {/* Image container with rounded corners and overflow hidden */}
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 shadow-sm border border-neutral-200/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Details below the image */}
                  <h3 className="font-serif text-lg font-semibold text-charcoal mt-4 group-hover:text-champagne transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-500 font-medium mt-1">
                    {item.price}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DetailsSection