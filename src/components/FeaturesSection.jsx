import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Priya Sharma',  location: 'Mumbai',    rating: 5, initials: 'PS',
    title: 'Absolutely Stunning Necklace',
    review: "The craftsmanship is beyond anything I've seen. The diamonds catch light beautifully and the gold setting is flawless. Received so many compliments at my sister's wedding!",
    date: 'March 2026',
  },
  {
    name: 'Ananya Reddy',  location: 'Hyderabad', rating: 5, initials: 'AR',
    title: 'Worth Every Penny',
    review: 'I was hesitant about buying fine jewelry online, but AVG exceeded all my expectations. The IGI certification gave me confidence, and the piece itself is breathtaking.',
    date: 'Feb 2026',
  },
  {
    name: 'Meera Iyer',    location: 'Chennai',   rating: 5, initials: 'MI',
    title: 'Perfect Anniversary Gift',
    review: "My husband surprised me with the Mine Diamond set for our 10th anniversary. The attention to detail is remarkable — every diamond is perfectly placed. I wear it every day.",
    date: 'Jan 2026',
  },
  {
    name: 'Kavitha Nair',  location: 'Kochi',     rating: 4, initials: 'KN',
    title: 'Elegant & Timeless Design',
    review: 'The design feels both modern and traditional — exactly what I was looking for. Customer service was wonderful, they helped me choose the right piece through a video call.',
    date: 'Dec 2025',
  },
  {
    name: 'Deepika Joshi', location: 'Delhi',     rating: 5, initials: 'DJ',
    title: 'Exceptional Quality',
    review: "Third purchase from AVG and they never disappoint. The diamond clarity is outstanding and the gold quality is premium. Free lifetime maintenance is a huge plus!",
    date: 'Nov 2025',
  },
  {
    name: 'Roshni Patel',  location: 'Ahmedabad', rating: 5, initials: 'RP',
    title: 'Made Me Feel Special',
    review: 'From unboxing to wearing it — the entire experience felt premium. The velvet box, the certificate, the handwritten note. This brand truly cares about its customers.',
    date: 'Oct 2025',
  },
]

function Stars({ rating, size = 'sm' }) {
  const cls = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${cls} ${i < rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'fill-neutral-200 text-neutral-200'}`}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex-shrink-0 snap-center w-[290px] sm:w-[320px] md:w-[340px]
                 bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4
                 hover:border-neutral-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]
                 transition-all duration-400"
    >
      {/* Stars + date */}
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <span className="text-[10px] text-neutral-400 tabular-nums">{review.date}</span>
      </div>

      {/* Quote */}
      <div>
        <h4 className="font-serif text-base font-semibold text-neutral-900 leading-snug mb-2">
          "{review.title}"
        </h4>
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-4">
          {review.review}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-100 mt-auto" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] font-bold text-neutral-500 tracking-wide">{review.initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-800 truncate leading-none mb-0.5">{review.name}</p>
          <p className="text-xs text-neutral-400 truncate">{review.location} · ✓ Verified</p>
        </div>
      </div>
    </motion.div>
  )
}

function FeaturesSection() {
  const scrollRef = useRef(null)
  const [canScrollLeft,  setCanScrollLeft]  = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 10)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
    }
    el.addEventListener('scroll', update, { passive: true })
    update()
    return () => el.removeEventListener('scroll', update)
  }, [])

  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 380, behavior: 'smooth' })

  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1)

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-semibold mb-2">
              ✦ Customer Stories
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
              What Our Customers Say
            </h2>
          </div>

          {/* Rating summary — minimal */}
          <div className="flex items-center gap-3">
            <div>
              <p className="font-serif text-2xl font-semibold text-charcoal leading-none">{avgRating}</p>
              <Stars rating={5} />
            </div>
            <div className="w-px h-8 bg-neutral-200" />
            <p className="text-sm text-neutral-500 leading-snug">
              Based on<br />
              <span className="font-semibold text-charcoal">2,500+ reviews</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Cards ── */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory
                     px-4 sm:px-6 lg:px-8 pb-2"
        >
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-7 flex items-center gap-2">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-250 ${
              canScrollLeft
                ? 'border-neutral-300 text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50'
                : 'border-neutral-150 text-neutral-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-250 ${
              canScrollRight
                ? 'border-neutral-300 text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50'
                : 'border-neutral-150 text-neutral-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="border border-neutral-200 rounded-2xl px-8 py-10 md:px-12 md:py-12
                     flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-1.5">
              Ready to Find Your Piece?
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              Speak with our jewellery experts for a personalised consultation.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 px-7 py-3 bg-charcoal text-white text-sm font-semibold
                       rounded-full hover:bg-neutral-800 transition-colors duration-300 tracking-wide"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

    </section>
  )
}

export default FeaturesSection
