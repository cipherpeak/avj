import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Heart, ShoppingBag, ChevronLeft, ChevronRight,
  Truck, ShieldCheck, Star, MapPin, Phone, Video,
  BadgeCheck, Share2, ChevronRight as Chevron,
} from 'lucide-react'
import { categoryData } from './CategoryPage'

const allImages = [
  '/images/gallery_statement_necklace.png',
  '/images/gold_necklace.png',
  '/images/pearl_necklace.png',
  '/images/gemstone_necklace.png',
]

const TAG_STYLES = {
  Bestseller: 'bg-[#D4AF37] text-white',
  New:        'bg-emerald-500 text-white',
  Trending:   'bg-rose-500 text-white',
  Premium:    'bg-[#2D2D2D] text-white',
}

/* ── Stars ── */
function Stars({ rating, size = 'md' }) {
  const cls = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4.5 h-4.5'
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${cls} ${
            i < Math.floor(rating)
              ? 'fill-[#D4AF37] text-[#D4AF37]'
              : i < rating
              ? 'fill-[#D4AF37]/40 text-[#D4AF37]/40'
              : 'fill-neutral-200 text-neutral-200'
          }`}
        />
      ))}
    </div>
  )
}

/* ── Related Card ── */
function RelatedCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false)
  const fmt = n => '₹' + n.toLocaleString('en-IN')
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 mb-3 relative">
        <motion.img
          src={item.image}
          alt={item.name}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full object-cover"
        />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/20"
        />
      </div>
      <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.14em] mb-0.5">{item.metal}</p>
      <h4 className="font-serif text-sm font-semibold text-charcoal line-clamp-1 group-hover:text-[#D4AF37] transition-colors duration-200">{item.name}</h4>
      <p className="text-sm font-bold text-charcoal mt-0.5">{fmt(item.price)}</p>
    </motion.div>
  )
}

/* ── Main ── */
function ProductPage() {
  const { category, id } = useParams()
  const navigate = useNavigate()
  const [activeImg, setActiveImg]   = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [pincode, setPincode]       = useState('')
  const [pinMsg, setPinMsg]         = useState('')

  const data = categoryData[category]
  const item = data?.items.find(i => i.id === parseInt(id))

  if (!item) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-soft-white">
      <p className="text-neutral-400 text-sm">Product not found.</p>
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wide"
      >
        Go Back
      </button>
    </div>
  )

  const images = [item.image, ...allImages.filter(s => s !== item.image)]
  const fmt    = n => '₹' + n.toLocaleString('en-IN')

  const checkPin = () => {
    if (pincode.length === 6) setPinMsg('Estimated delivery: 3–5 business days')
    else setPinMsg('Please enter a valid 6-digit pincode')
  }

  const relatedItems = data.items.filter(i => i.id !== item.id).slice(0, 4)

  const SPECS = [
    ['Metal',     item.metal],
    ['Purity',    item.metal.split(' ')[0]],
    ['Weight',    item.weight],
    ['SKU',       item.sku],
    ['Occasion',  'Everyday & Festive'],
    ['Origin',    'Handcrafted in India'],
  ]

  const TRUST = [
    { icon: ShieldCheck, label: 'BIS Hallmarked',      sub: 'Govt. certified purity' },
    { icon: Truck,       label: 'Free Shipping',        sub: 'Insured & tracked'      },
    { icon: BadgeCheck,  label: 'IGI Certified',        sub: 'Authentic diamonds'     },
  ]

  return (
    <div className="min-h-screen bg-soft-white font-sans">

      {/* ── Sticky top bar ───────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_1px_12px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#D4AF37] uppercase tracking-[0.12em] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400">
            <span className="w-px h-3 bg-neutral-200" />
            <span className="hover:text-[#D4AF37] cursor-pointer transition-colors" onClick={() => navigate('/')}>Home</span>
            <Chevron className="w-3 h-3 text-neutral-300" />
            <span className="hover:text-[#D4AF37] cursor-pointer capitalize transition-colors" onClick={() => navigate(`/category/${category}`)}>
              {data.label}
            </span>
            <Chevron className="w-3 h-3 text-neutral-300" />
            <span className="text-charcoal font-medium line-clamp-1 max-w-[180px]">{item.name}</span>
          </div>

          <button className="ml-auto w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20">

          {/* ── Left: Gallery ─────────────────────────── */}
          <div className="lg:sticky lg:top-20 lg:self-start">

            {/* Main image */}
            <div className="relative bg-neutral-100 rounded-3xl overflow-hidden aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={images[activeImg]}
                  alt={item.name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Tag */}
              {item.tag && (
                <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${TAG_STYLES[item.tag]}`}>
                  {item.tag}
                </span>
              )}

              {/* Wishlist */}
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setWishlisted(w => !w)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <Heart className={`w-4.5 h-4.5 transition-all duration-300 ${wishlisted ? 'fill-rose-500 text-rose-500 scale-110' : 'text-neutral-400'}`} />
              </motion.button>

              {/* Image nav arrows */}
              <button
                onClick={() => setActiveImg(i => (i - 1 + images.length) % images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-neutral-600 hover:text-[#D4AF37] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImg(i => (i + 1) % images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-neutral-600 hover:text-[#D4AF37] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dot counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    animate={{ width: i === activeImg ? 20 : 6, backgroundColor: i === activeImg ? '#D4AF37' : 'rgba(255,255,255,0.6)' }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2.5 mt-3 overflow-x-auto no-scrollbar pb-1">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    activeImg === i ? 'border-[#D4AF37] shadow-[0_0_0_3px_rgba(212,175,55,0.2)]' : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Details ────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Category + SKU */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.22em]">{data.label}</span>
              <span className="w-px h-3 bg-neutral-200" />
              <span className="text-[10px] text-neutral-400 tracking-[0.15em] uppercase">{item.sku}</span>
            </div>

            {/* Name */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal leading-tight">
              {item.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 flex-wrap">
              <Stars rating={item.rating} />
              <span className="text-sm font-bold text-charcoal">{item.rating}</span>
              <span className="text-sm text-neutral-400">({item.reviews} reviews)</span>
              <div className="flex items-center gap-1 ml-auto text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                <BadgeCheck className="w-3.5 h-3.5" /> IGI Certified
              </div>
            </div>

            {/* Price */}
            <div className="border border-neutral-200 rounded-2xl p-5 bg-white">
              <div className="flex items-end gap-3 flex-wrap mb-1.5">
                <span className="font-serif text-3xl font-semibold text-charcoal">{fmt(item.price)}</span>
                <span className="text-base text-neutral-400 line-through mb-0.5">{fmt(item.mrp)}</span>
                <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full mb-0.5">
                  {item.discount}
                </span>
              </div>
              <p className="text-xs text-neutral-400">Inclusive of all taxes · Making charges included</p>
            </div>

            {/* Trust pills */}
            <div className="grid grid-cols-3 gap-2.5">
              {TRUST.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 border border-neutral-200 rounded-xl p-3 bg-white text-center">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <p className="text-[10px] font-bold text-charcoal leading-tight">{label}</p>
                  <p className="text-[9px] text-neutral-400 leading-tight">{sub}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-neutral-100" />

            {/* Specifications */}
            <div>
              <p className="text-[10px] font-semibold text-neutral-400 uppercase tracking-[0.18em] mb-3">Specifications</p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {SPECS.map(([label, val]) => (
                  <div key={label}>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-[0.12em] mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-charcoal">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-neutral-100" />

            {/* Delivery checker */}
            <div>
              <p className="text-xs font-semibold text-charcoal flex items-center gap-2 mb-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" /> Check Delivery
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pincode}
                  onChange={e => { setPincode(e.target.value.replace(/\D/g, '').slice(0, 6)); setPinMsg('') }}
                  placeholder="Enter 6-digit pincode"
                  className="flex-1 min-w-0 border border-neutral-200 rounded-full px-4 py-2.5 text-sm text-charcoal placeholder-neutral-400 bg-white focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                />
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={checkPin}
                  className="flex-shrink-0 bg-charcoal text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors uppercase tracking-wide"
                >
                  Check
                </motion.button>
              </div>
              {pinMsg && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs mt-2 font-medium ${pincode.length === 6 ? 'text-emerald-600' : 'text-rose-500'}`}
                >
                  {pinMsg}
                </motion.p>
              )}
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2.5 bg-[#D4AF37] hover:bg-[#c99c2d] text-white font-bold py-4 rounded-2xl transition-colors shadow-[0_6px_24px_rgba(212,175,55,0.35)] text-sm tracking-wide"
              >
                <ShoppingBag className="w-4.5 h-4.5" /> Add to Bag
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setWishlisted(w => !w)}
                className={`w-14 flex items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                  wishlisted ? 'border-rose-400 bg-rose-50' : 'border-neutral-200 hover:border-rose-300 bg-white'
                }`}
              >
                <Heart className={`w-5 h-5 transition-all duration-300 ${wishlisted ? 'fill-rose-500 text-rose-500 scale-110' : 'text-neutral-400'}`} />
              </motion.button>
            </div>

            {/* Expert help */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { Icon: Video, title: 'Closer Look?',    sub: 'Schedule a video call' },
                { Icon: Phone, title: 'Talk to Expert',  sub: '+91 6827 422 224'      },
              ].map(({ Icon, title, sub }) => (
                <button
                  key={title}
                  className="flex items-center gap-3 border border-neutral-200 rounded-2xl px-4 py-3.5 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-200 text-left group"
                >
                  <div className="w-9 h-9 rounded-full bg-neutral-100 group-hover:bg-[#D4AF37]/10 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">{title}</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5">{sub}</p>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* ── Related Products ─────────────────────────── */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-neutral-100">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-semibold mb-2">✦ Explore More</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">You May Also Like</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6">
            {relatedItems.map((rel, i) => (
              <motion.div
                key={rel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <RelatedCard
                  item={rel}
                  onClick={() => { navigate(`/category/${category}/product/${rel.id}`); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductPage
