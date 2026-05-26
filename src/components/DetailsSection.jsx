import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Heart, ShoppingBag } from 'lucide-react'

const items = [
  { id: 1, title: 'Diamond Necklace',  price: '₹65,000', originalPrice: '₹72,000', tag: 'Premium',  image: '/images/diamond_necklace.png'  },
  { id: 2, title: 'Gold Necklace',     price: '₹35,000', originalPrice: '₹39,000', tag: 'Classic',  image: '/images/gold_necklace.png'     },
  { id: 3, title: 'Gemstone Necklace', price: '₹55,000', originalPrice: '₹61,000', tag: 'Trending', image: '/images/gemstone_necklace.png' },
  { id: 4, title: 'Uncut Necklace',    price: '₹55,000', originalPrice: '₹60,000', tag: 'Heritage', image: '/images/uncut_necklace.png'    },
  { id: 5, title: 'Pearl Necklace',    price: '₹45,000', originalPrice: '₹50,000', tag: 'Elegant',  image: '/images/pearl_necklace.png'    },
  { id: 6, title: 'Kundan Necklace', price: '₹78,000', originalPrice: '₹85,000', tag: 'Royal', image: '/images/kundan_necklace.png' },
  { id: 7, title: 'Platinum Necklace', price: '₹92,000', originalPrice: '₹1,00,000', tag: 'Luxury', image: '/images/platinum_necklace.png' },
  { id: 8, title: 'Temple Necklace', price: '₹48,000', originalPrice: '₹54,000', tag: 'Traditional', image: '/images/temple_necklace.png' },
]

const TAG = {
  Premium:     { bg: 'bg-[#D4AF37]',       text: 'text-white'      },
  Classic:     { bg: 'bg-amber-100',        text: 'text-amber-700'  },
  Trending:    { bg: 'bg-rose-500',         text: 'text-white'      },
  Heritage:    { bg: 'bg-stone-800',        text: 'text-stone-100'  },
  Elegant:     { bg: 'bg-violet-100',       text: 'text-violet-700' },
  Royal:       { bg: 'bg-emerald-700',      text: 'text-white'      },
  Luxury:      { bg: 'bg-slate-900',        text: 'text-slate-100'  },
  Traditional: { bg: 'bg-orange-100',       text: 'text-orange-700' },
}

function ProductCard({ item, index }) {
  const [wished, setWished] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full min-w-0"
    >
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.13)] transition-shadow duration-400 cursor-pointer group"
      >
        {/* Image Area */}
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          <motion.img
            src={item.image}
            alt={item.title}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Dark overlay on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 bg-black/25"
          />

          {/* Tag */}
          <div className={`absolute top-2.5 left-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${TAG[item.tag].bg} ${TAG[item.tag].text}`}>
            {item.tag}
          </div>

          {/* Wishlist */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); setWished(w => !w) }}
            whileTap={{ scale: 0.85 }}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors duration-200"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-all duration-300 ${wished ? 'fill-rose-500 text-rose-500' : 'text-neutral-400'}`}
            />
          </motion.button>

          {/* Slide-up Shop button */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key="cta"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 p-2.5"
              >
                <button className="w-full flex items-center justify-center gap-1.5 py-2 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-[0.12em] rounded-xl hover:bg-[#c99c2d] transition-colors duration-200">
                  <ShoppingBag className="w-3 h-3" />
                  Quick Shop
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Card Body */}
        <div className="p-3.5">
          <h3 className="font-serif text-sm font-semibold text-charcoal leading-snug truncate group-hover:text-[#D4AF37] transition-colors duration-300">
            {item.title}
          </h3>
          <div className="flex items-baseline gap-1.5 mt-1.5">
            <span className="text-sm font-bold text-charcoal">{item.price}</span>
            <span className="text-[10px] text-neutral-400 line-through">{item.originalPrice}</span>
          </div>

          {/* Thin gold divider that grows on hover */}
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2.5 h-px bg-[#D4AF37] origin-left"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

function DetailsSection() {
  return (
    <section className="py-16 md:py-24 bg-soft-white overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-semibold mb-2">
              ✦ Handpicked for You
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
              Trendy Necklaces
            </h2>
          </div>
          <a
            href="#view-all"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-charcoal transition-colors duration-300 group"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Card Grid — 2 rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((item, i) => (
            <ProductCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile View All */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-8 sm:hidden"
      >
        <a
          href="#view-all"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-charcoal transition-colors duration-300 group"
        >
          View All Necklaces
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>

    </section>
  )
}

export default DetailsSection
