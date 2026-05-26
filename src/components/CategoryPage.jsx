import React, { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Heart, ShoppingBag, Star, SlidersHorizontal,
  ChevronDown, X, Check,
} from 'lucide-react'

/* ── Data ─────────────────────────────────────────────────────────── */
export const categoryData = {
  necklaces: {
    label: 'Statement Necklaces',
    items: [
      { id: 1, name: 'Royal Gold Necklace',        price: 42500, mrp: 48000, discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: 'Bestseller', metal: '22KT Yellow Gold', weight: '12.4 g', sku: 'NCK001', rating: 4.7, reviews: 128 },
      { id: 2, name: 'Diamond Solitaire Necklace', price: 68000, mrp: 75000, discount: '9% OFF',  image: '/images/gold_necklace.png',              tag: 'New',        metal: '18KT White Gold',  weight: '8.2 g',  sku: 'NCK002', rating: 4.9, reviews: 74  },
      { id: 3, name: 'Pearl Strand Necklace',      price: 31200, mrp: 35000, discount: '11% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '18KT Rose Gold',   weight: '10.1 g', sku: 'NCK003', rating: 4.5, reviews: 52  },
      { id: 4, name: 'Gemstone Pendant Set',       price: 54800, mrp: 60000, discount: '9% OFF',  image: '/images/gemstone_necklace.png',          tag: 'Trending',   metal: '22KT Yellow Gold', weight: '9.6 g',  sku: 'NCK004', rating: 4.8, reviews: 96  },
      { id: 5, name: 'Layered Chain Necklace',     price: 27400, mrp: 30000, discount: '9% OFF',  image: '/images/gallery_statement_necklace.png', tag: '',           metal: '18KT Yellow Gold', weight: '7.3 g',  sku: 'NCK005', rating: 4.4, reviews: 38  },
      { id: 6, name: 'Kundan Bridal Necklace',     price: 88500, mrp: 95000, discount: '7% OFF',  image: '/images/gold_necklace.png',              tag: 'Premium',    metal: '22KT Yellow Gold', weight: '22.8 g', sku: 'NCK006', rating: 4.9, reviews: 211 },
      { id: 7, name: 'Rose Gold Choker',           price: 22900, mrp: 26000, discount: '12% OFF', image: '/images/pearl_necklace.png',             tag: 'New',        metal: '18KT Rose Gold',   weight: '6.1 g',  sku: 'NCK007', rating: 4.6, reviews: 45  },
      { id: 8, name: 'Temple Gold Necklace',       price: 46300, mrp: 52000, discount: '11% OFF', image: '/images/gemstone_necklace.png',          tag: '',           metal: '22KT Yellow Gold', weight: '14.5 g', sku: 'NCK008', rating: 4.7, reviews: 83  },
    ],
  },
  bangles: {
    label: 'Stunning Bangles',
    items: [
      { id: 1, name: 'Classic Gold Bangle',   price: 28800, mrp: 32000, discount: '10% OFF', image: '/images/gold_necklace.png',              tag: 'Bestseller', metal: '22KT Yellow Gold', weight: '11.2 g', sku: 'BNG001', rating: 4.8, reviews: 154 },
      { id: 2, name: 'Diamond-set Bangle',    price: 52000, mrp: 58000, discount: '10% OFF', image: '/images/gallery_statement_necklace.png', tag: 'New',        metal: '18KT White Gold',  weight: '9.4 g',  sku: 'BNG002', rating: 4.9, reviews: 67  },
      { id: 3, name: 'Twisted Rope Bangle',   price: 19500, mrp: 22000, discount: '11% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '22KT Yellow Gold', weight: '8.1 g',  sku: 'BNG003', rating: 4.5, reviews: 42  },
      { id: 4, name: 'Enamelled Bangle Set',  price: 34200, mrp: 38000, discount: '10% OFF', image: '/images/gemstone_necklace.png',          tag: 'Trending',   metal: '22KT Yellow Gold', weight: '18.6 g', sku: 'BNG004', rating: 4.7, reviews: 88  },
      { id: 5, name: 'Broad Polki Bangle',    price: 61000, mrp: 68000, discount: '10% OFF', image: '/images/gold_necklace.png',              tag: 'Premium',    metal: '22KT Yellow Gold', weight: '24.3 g', sku: 'BNG005', rating: 4.9, reviews: 176 },
      { id: 6, name: 'Slim Stack Bangles',    price: 12400, mrp: 14000, discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: '',           metal: '18KT Rose Gold',   weight: '5.8 g',  sku: 'BNG006', rating: 4.4, reviews: 31  },
      { id: 7, name: 'Antique Finish Bangle', price: 23700, mrp: 27000, discount: '12% OFF', image: '/images/pearl_necklace.png',             tag: 'New',        metal: '22KT Yellow Gold', weight: '13.2 g', sku: 'BNG007', rating: 4.6, reviews: 59  },
      { id: 8, name: 'Bridal Bangle Set',     price: 94000, mrp: 102000, discount: '8% OFF', image: '/images/gemstone_necklace.png',          tag: 'Premium',    metal: '22KT Yellow Gold', weight: '38.4 g', sku: 'BNG008', rating: 5.0, reviews: 232 },
    ],
  },
  earrings: {
    label: 'Stunning Earrings',
    items: [
      { id: 1, name: 'Diamond Drop Earrings', price: 18200, mrp: 21000, discount: '13% OFF', image: '/images/gemstone_necklace.png',          tag: 'Bestseller', metal: '18KT White Gold',  weight: '4.2 g',  sku: 'ERG001', rating: 4.8, reviews: 196 },
      { id: 2, name: 'Gold Jhumka',           price: 11500, mrp: 13500, discount: '15% OFF', image: '/images/gold_necklace.png',              tag: 'Trending',   metal: '22KT Yellow Gold', weight: '6.8 g',  sku: 'ERG002', rating: 4.7, reviews: 143 },
      { id: 3, name: 'Pearl Stud Earrings',   price:  8900, mrp: 10500, discount: '15% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '18KT White Gold',  weight: '2.4 g',  sku: 'ERG003', rating: 4.5, reviews: 62  },
      { id: 4, name: 'Chandelier Earrings',   price: 32600, mrp: 37000, discount: '12% OFF', image: '/images/gallery_statement_necklace.png', tag: 'New',        metal: '22KT Yellow Gold', weight: '9.3 g',  sku: 'ERG004', rating: 4.6, reviews: 77  },
      { id: 5, name: 'Hoop Earrings',         price: 14300, mrp: 16500, discount: '13% OFF', image: '/images/gemstone_necklace.png',          tag: '',           metal: '18KT Rose Gold',   weight: '5.1 g',  sku: 'ERG005', rating: 4.4, reviews: 49  },
      { id: 6, name: 'Floral Cluster Studs',  price: 22800, mrp: 26000, discount: '12% OFF', image: '/images/gold_necklace.png',              tag: 'New',        metal: '18KT White Gold',  weight: '3.8 g',  sku: 'ERG006', rating: 4.7, reviews: 91  },
      { id: 7, name: 'Kundan Earrings',       price: 27500, mrp: 31000, discount: '11% OFF', image: '/images/pearl_necklace.png',             tag: 'Premium',    metal: '22KT Yellow Gold', weight: '8.6 g',  sku: 'ERG007', rating: 4.8, reviews: 118 },
      { id: 8, name: 'Bridal Earring Set',    price: 48000, mrp: 54000, discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: 'Premium',    metal: '22KT Yellow Gold', weight: '16.2 g', sku: 'ERG008', rating: 4.9, reviews: 204 },
    ],
  },
  rings: {
    label: 'Sleek Rings',
    items: [
      { id: 1, name: 'Diamond Solitaire Ring', price: 14900, mrp: 17000, discount: '12% OFF', image: '/images/pearl_necklace.png',             tag: 'Bestseller', metal: '18KT White Gold',  weight: '3.1 g',  sku: 'RNG001', rating: 4.9, reviews: 287 },
      { id: 2, name: 'Gold Band Ring',          price:  8200, mrp:  9500, discount: '14% OFF', image: '/images/gold_necklace.png',              tag: '',           metal: '22KT Yellow Gold', weight: '4.4 g',  sku: 'RNG002', rating: 4.5, reviews: 73  },
      { id: 3, name: 'Emerald Cocktail Ring',   price: 38400, mrp: 43000, discount: '11% OFF', image: '/images/gemstone_necklace.png',          tag: 'Trending',   metal: '18KT Yellow Gold', weight: '6.2 g',  sku: 'RNG003', rating: 4.7, reviews: 112 },
      { id: 4, name: 'Stackable Ring Set',      price: 11700, mrp: 13500, discount: '13% OFF', image: '/images/gallery_statement_necklace.png', tag: 'New',        metal: '18KT Rose Gold',   weight: '5.8 g',  sku: 'RNG004', rating: 4.6, reviews: 58  },
      { id: 5, name: 'Twisted Band Ring',       price: 16500, mrp: 19000, discount: '13% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '22KT Yellow Gold', weight: '4.9 g',  sku: 'RNG005', rating: 4.5, reviews: 41  },
      { id: 6, name: 'Kundan Finger Ring',      price: 21200, mrp: 24000, discount: '12% OFF', image: '/images/gold_necklace.png',              tag: 'New',        metal: '22KT Yellow Gold', weight: '7.3 g',  sku: 'RNG006', rating: 4.7, reviews: 89  },
      { id: 7, name: 'Rose Gold Ring',          price: 12800, mrp: 14800, discount: '14% OFF', image: '/images/gemstone_necklace.png',          tag: '',           metal: '18KT Rose Gold',   weight: '3.6 g',  sku: 'RNG007', rating: 4.4, reviews: 37  },
      { id: 8, name: 'Bridal Statement Ring',   price: 56000, mrp: 63000, discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: 'Premium',    metal: '22KT Yellow Gold', weight: '12.1 g', sku: 'RNG008', rating: 5.0, reviews: 319 },
    ],
  },
}

const FILTERS = ['All', 'Yellow Gold', 'White Gold', 'Rose Gold', 'Under ₹20K', 'Under ₹50K', 'Premium']

const SORT_OPTIONS = [
  { label: 'Recommended',     value: 'default'    },
  { label: 'Price: Low → High', value: 'price_asc'  },
  { label: 'Price: High → Low', value: 'price_desc' },
  { label: 'Top Rated',       value: 'rating'     },
  { label: 'Most Reviewed',   value: 'reviews'    },
]

const TAG_STYLES = {
  Bestseller: 'bg-[#D4AF37] text-white',
  New:        'bg-emerald-500 text-white',
  Trending:   'bg-rose-500 text-white',
  Premium:    'bg-[#2D2D2D] text-white',
}

/* ── Stars ─────────────────────────────────────────────────────────── */
function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-[#D4AF37] text-[#D4AF37]' : i < rating ? 'fill-[#D4AF37]/50 text-[#D4AF37]/50' : 'fill-neutral-200 text-neutral-200'}`}
        />
      ))}
    </div>
  )
}

/* ── Product Card ───────────────────────────────────────────────────── */
function ProductCard({ item, index, wished, onWish, onNavigate }) {
  const [hovered, setHovered] = useState(false)
  const fmt = (n) => '₹' + n.toLocaleString('en-IN')

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onNavigate}
      className="group cursor-pointer"
    >
      {/* Image area */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 mb-3">
        <motion.img
          src={item.image}
          alt={item.name}
          animate={{ scale: hovered ? 1.07 : 1 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Dark hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/30"
        />

        {/* Tag */}
        {item.tag && (
          <span className={`absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${TAG_STYLES[item.tag]}`}>
            {item.tag}
          </span>
        )}

        {/* Discount badge */}
        <span className="absolute top-3 right-12 text-[9px] font-bold px-2 py-1 rounded-full bg-white text-[#D4AF37] border border-[#D4AF37]/30">
          {item.discount}
        </span>

        {/* Wishlist */}
        <motion.button
          onClick={e => { e.stopPropagation(); onWish() }}
          whileTap={{ scale: 0.85 }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          <Heart className={`w-3.5 h-3.5 transition-all duration-300 ${wished ? 'fill-rose-500 text-rose-500 scale-110' : 'text-neutral-400'}`} />
        </motion.button>

        {/* Slide-up CTA */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key="cta"
              initial={{ y: 48, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 48, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 right-0 p-3"
            >
              <button
                onClick={e => { e.stopPropagation(); onNavigate() }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-[0.12em] rounded-xl hover:bg-[#c99c2d] transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                View Details
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <div className="px-0.5">
        <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-[0.15em] mb-1">{item.metal}</p>
        <h3 className="font-serif text-sm font-semibold text-charcoal leading-snug line-clamp-2 mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
          {item.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <Stars rating={item.rating} />
          <span className="text-[10px] text-neutral-400">({item.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-bold text-charcoal">{fmt(item.price)}</span>
          <span className="text-xs text-neutral-400 line-through">{fmt(item.mrp)}</span>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Sort Dropdown ──────────────────────────────────────────────────── */
function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const current = SORT_OPTIONS.find(o => o.value === value)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs font-semibold text-charcoal hover:border-[#D4AF37] transition-colors whitespace-nowrap"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
        {current.label}
        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-full mt-2 w-52 bg-white border border-neutral-200 rounded-2xl shadow-xl overflow-hidden z-40"
            >
              {SORT_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => { onChange(opt.value); setOpen(false) }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-xs font-medium transition-colors hover:bg-neutral-50 ${value === opt.value ? 'text-[#D4AF37]' : 'text-charcoal'}`}
                >
                  {opt.label}
                  {value === opt.value && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Main Component ─────────────────────────────────────────────────── */
function CategoryPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [wishlist, setWishlist]     = useState([])
  const [activeFilter, setFilter]   = useState('All')
  const [sortBy, setSort]           = useState('default')

  const data = categoryData[category] || categoryData['necklaces']

  const toggleWishlist = id =>
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  const filtered = useMemo(() => {
    let list = [...data.items]

    // Filter
    if (activeFilter === 'Yellow Gold') list = list.filter(i => i.metal.includes('Yellow'))
    else if (activeFilter === 'White Gold') list = list.filter(i => i.metal.includes('White'))
    else if (activeFilter === 'Rose Gold')  list = list.filter(i => i.metal.includes('Rose'))
    else if (activeFilter === 'Under ₹20K') list = list.filter(i => i.price < 20000)
    else if (activeFilter === 'Under ₹50K') list = list.filter(i => i.price < 50000)
    else if (activeFilter === 'Premium')    list = list.filter(i => i.tag === 'Premium')

    // Sort
    if (sortBy === 'price_asc')  list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price_desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating')     list.sort((a, b) => b.rating - a.rating)
    if (sortBy === 'reviews')    list.sort((a, b) => b.reviews - a.reviews)

    return list
  }, [data.items, activeFilter, sortBy])

  return (
    <div className="min-h-screen bg-soft-white font-sans">

      {/* ── Hero Header ─────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

          {/* Breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-[#D4AF37] text-[10px] tracking-[0.35em] uppercase font-semibold mb-2">✦ AVG Collections</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
                {data.label}
              </h1>
            </div>
            <p className="text-white/30 text-sm tabular-nums">
              {filtered.length} of {data.items.length} designs
            </p>
          </div>
        </div>
      </div>

      {/* ── Sticky Filter Bar ───────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3 overflow-x-auto no-scrollbar">

            {/* Filter pills */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              {FILTERS.map(f => (
                <motion.button
                  key={f}
                  onClick={() => setFilter(f)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeFilter === f
                      ? 'bg-[#D4AF37] text-white shadow-[0_2px_12px_rgba(212,175,55,0.35)]'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {f}
                  {activeFilter === f && f !== 'All' && (
                    <span
                      onClick={e => { e.stopPropagation(); setFilter('All') }}
                      className="ml-1.5 inline-flex items-center"
                    >
                      <X className="w-3 h-3" />
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-5 bg-neutral-200 flex-shrink-0" />

            {/* Sort */}
            <div className="flex-shrink-0">
              <SortDropdown value={sortBy} onChange={setSort} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Product Grid ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter + sortBy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10"
            >
              {filtered.map((item, i) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  index={i}
                  wished={wishlist.includes(item.id)}
                  onWish={() => toggleWishlist(item.id)}
                  onNavigate={() => navigate(`/category/${category}/product/${item.id}`)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-neutral-300" />
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-2">No designs found</h3>
              <p className="text-neutral-400 text-sm mb-5">Try adjusting your filters</p>
              <button
                onClick={() => setFilter('All')}
                className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-white text-xs font-bold uppercase tracking-wide"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}

export default CategoryPage
