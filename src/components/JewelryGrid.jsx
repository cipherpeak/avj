import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const cards = [
  { id: 1, title: 'Statement Necklaces', subtitle: 'From ₹42,500', image: '/images/gallery_statement_necklace.png', route: 'necklaces', tag: 'Bestseller' },
  { id: 2, title: 'Stunning Bangles',    subtitle: 'From ₹28,800', image: '/images/gold_necklace.png',              route: 'bangles',   tag: 'New'        },
  { id: 3, title: 'Stunning Earrings',   subtitle: 'From ₹8,900',  image: '/images/gemstone_necklace.png',          route: 'earrings',  tag: 'Trending'   },
  { id: 4, title: 'Sleek Rings',         subtitle: 'From ₹8,200',  image: '/images/pearl_necklace.png',             route: 'rings',     tag: ''           },
]

const TAG_STYLES = {
  Bestseller: 'bg-champagne text-white',
  New:        'bg-emerald-500 text-white',
  Trending:   'bg-rose-500 text-white',
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] },
  }
}

function Card({ card, className, titleClass = 'text-2xl md:text-3xl', subtitleClass = 'text-sm', smallTag = false }) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/category/${card.route}`)}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${className}`}
    >
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-all duration-500 group-hover:from-black/90" />

      {card.tag && (
        <span className={`absolute top-4 left-4 font-bold rounded-full uppercase tracking-wide ${smallTag ? 'text-[9px] px-2 py-0.5' : 'text-[10px] px-2.5 py-1'} ${TAG_STYLES[card.tag]}`}>
          {card.tag}
        </span>
      )}

      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-0.5 group-hover:translate-y-0 transition-transform duration-400">
        <h3 className={`font-serif font-semibold text-white leading-tight ${titleClass}`}>{card.title}</h3>
        <p className={`text-white/55 mt-1 font-light ${subtitleClass}`}>{card.subtitle}</p>
        <div className="mt-3 flex items-center gap-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-[10px] font-semibold text-champagne uppercase tracking-[0.15em]">Shop Now</span>
          <div className="flex-1 h-px bg-champagne/40" />
        </div>
      </div>
    </div>
  )
}

function JewelryGrid() {
  return (
    /*
     * bg-soft-white is the true background.
     * The dark overlay on top (absolute, pointer-events-none) fades from solid
     * black → transparent over 580px, matching the hero's black bottom exactly.
     * Header text is white so it reads cleanly in the dark zone.
     * Cards emerge below as the overlay dissolves into soft-white.
     */
    <section className="relative bg-soft-white overflow-hidden -mt-px">

      {/* Dark overlay — seamless continuation of hero's black bottom */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-0"
        style={{
          height: '340px',
          background: 'linear-gradient(to bottom, #000000 0%, #000000 30%, transparent 100%)',
        }}
      />

      {/* All content sits above the overlay */}
      <div className="relative z-10 pt-16 md:pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header — white text, lives entirely in the dark overlay zone */}
          <motion.div {...fadeUp(0)} className="text-center mb-10 md:mb-14">
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-semibold mb-3">
              ✦ Our Collections
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
              Crafted for Every Occasion
            </h2>
            <div className="w-12 h-px bg-[#D4AF37] mx-auto mt-5 mb-4" />
            <p className="text-white/50 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
              Timeless pieces for every moment in your story.
            </p>
          </motion.div>

          {/* Bento Grid — cards emerge as the overlay dissolves */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">

            {/* Large card — left */}
            <motion.div {...fadeUp(0.1)} className="sm:col-span-2 md:col-span-5">
              <Card
                card={cards[0]}
                className="h-[380px] sm:h-[420px] md:h-full md:min-h-[520px]"
                titleClass="text-2xl md:text-3xl lg:text-4xl"
              />
            </motion.div>

            {/* Right column */}
            <div className="sm:col-span-2 md:col-span-7 flex flex-col gap-4 md:gap-5">

              {/* Wide banner card */}
              <motion.div {...fadeUp(0.2)}>
                <Card
                  card={cards[1]}
                  className="h-[200px] md:h-[215px]"
                  titleClass="text-xl md:text-2xl"
                />
              </motion.div>

              {/* Two equal cards */}
              <div className="grid grid-cols-2 gap-4 md:gap-5 flex-1">
                <motion.div {...fadeUp(0.3)} className="h-[200px] md:h-full md:min-h-[220px]">
                  <Card card={cards[2]} className="h-full" titleClass="text-base md:text-lg" subtitleClass="text-xs" smallTag />
                </motion.div>
                <motion.div {...fadeUp(0.4)} className="h-[200px] md:h-full md:min-h-[220px]">
                  <Card card={cards[3]} className="h-full" titleClass="text-base md:text-lg" subtitleClass="text-xs" smallTag />
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default JewelryGrid
