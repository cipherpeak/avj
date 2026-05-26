import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Heart, ShoppingBag, ChevronLeft, ChevronRight,
  Truck, ShieldCheck, Star, MapPin, Phone, Video, BadgeCheck, Share2
} from 'lucide-react'
import { categoryData } from './CategoryPage'

const allImages = [
  '/images/gallery_statement_necklace.png',
  '/images/gold_necklace.png',
  '/images/pearl_necklace.png',
  '/images/gemstone_necklace.png',
]

function ProductPage() {
  const { category, id } = useParams()
  const navigate = useNavigate()
  const [activeImg, setActiveImg] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [pincode, setPincode] = useState('')

  const data = categoryData[category]
  const item = data?.items.find(i => i.id === parseInt(id))

  if (!item) return (
    <div className="min-h-screen flex items-center justify-center text-gray-500">
      Product not found. <button onClick={() => navigate(-1)} className="ml-2 text-[#dca932] underline">Go back</button>
    </div>
  )

  // Build gallery: item's image first, then the rest
  const images = [item.image, ...allImages.filter(src => src !== item.image)]

  const prev = () => setActiveImg(i => (i - 1 + images.length) % images.length)
  const next = () => setActiveImg(i => (i + 1) % images.length)

  const relatedItems = data.items.filter(i => i.id !== item.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Top Nav */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#dca932] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <div className="h-4 w-px bg-gray-200" />
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 flex items-center gap-1.5">
            <span className="hover:text-[#dca932] cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span>/</span>
            <span className="hover:text-[#dca932] cursor-pointer capitalize" onClick={() => navigate(`/category/${category}`)}>{data.label}</span>
            <span>/</span>
            <span className="text-gray-600 font-medium line-clamp-1">{item.name}</span>
          </nav>
          <button className="ml-auto text-gray-400 hover:text-[#dca932] transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* ── Left: Image Gallery ── */}
          <div className="flex gap-4">
            {/* Vertical Thumbnails */}
            <div className="hidden md:flex flex-col gap-3 flex-shrink-0">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImg === i ? 'border-[#dca932] shadow-md' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div className="relative bg-neutral-50 rounded-3xl overflow-hidden aspect-square">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={images[activeImg]}
                    alt={item.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain p-8"
                  />
                </AnimatePresence>

                {/* Tag */}
                {item.tag && (
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${
                    { Bestseller: 'bg-amber-400 text-white', New: 'bg-emerald-500 text-white', Trending: 'bg-rose-500 text-white', Premium: 'bg-indigo-600 text-white' }[item.tag]
                  }`}>{item.tag}</span>
                )}

                {/* Arrows */}
                <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Mobile Thumbnails */}
              <div className="flex md:hidden gap-2 mt-3 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImg === i ? 'border-[#dca932]' : 'border-gray-200'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Product Details ── */}
          <div className="flex flex-col gap-6">

            {/* Name & SKU */}
            <div>
              <p className="text-xs font-semibold text-[#dca932] tracking-widest uppercase mb-2">{item.sku}</p>
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{item.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(item.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                ))}
              </div>
              <span className="font-bold text-gray-800">{item.rating}</span>
              <span className="text-sm text-gray-400">({item.reviews} reviews)</span>
              <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold ml-auto">
                <BadgeCheck className="w-4 h-4" /> Certified
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-100 rounded-2xl px-6 py-5">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold text-gray-900">{item.price}</span>
                <span className="text-base text-gray-400 line-through">{item.mrp}</span>
                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  {item.discount} on Making
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Inclusive of all taxes · Making charges included</p>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, label: 'Ready to Dispatch', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
                { icon: <Truck className="w-4 h-4" />, label: 'Transit Insurance', color: 'text-blue-700 bg-blue-50 border-blue-200' },
                { icon: <BadgeCheck className="w-4 h-4" />, label: 'Hallmarked', color: 'text-amber-700 bg-amber-50 border-amber-200' },
              ].map(b => (
                <div key={b.label} className={`flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1.5 ${b.color}`}>
                  {b.icon} {b.label}
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-5">
              {[
                ['Metal', item.metal],
                ['Gross Weight', item.weight],
                ['Purity', item.metal.split(' ')[0]],
                ['SKU Code', item.sku],
                ['Occasion', 'Everyday & Festive'],
                ['Origin', 'Handcrafted in India'],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-gray-800">{val}</p>
                </div>
              ))}
            </div>

            {/* Pincode */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#dca932]" /> Check Delivery Date
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={pincode}
                  onChange={e => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit Pincode"
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#dca932]/40 focus:border-[#dca932]"
                />
                <button className="px-5 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                  Check
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#dca932] hover:bg-[#c99c2d] text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-amber-200 text-base">
                <ShoppingBag className="w-5 h-5" /> Add to Bag
              </button>
              <button
                onClick={() => setWishlisted(w => !w)}
                className={`w-14 flex items-center justify-center rounded-2xl border-2 transition-colors ${
                  wishlisted ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
            </div>

            {/* Expert Help */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#dca932] hover:bg-amber-50 transition-colors text-left">
                <Video className="w-5 h-5 text-[#dca932] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Closer Look?</p>
                  <p className="text-[10px] text-gray-400">Schedule a video call</p>
                </div>
              </button>
              <button className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#dca932] hover:bg-amber-50 transition-colors text-left">
                <Phone className="w-5 h-5 text-[#dca932] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Talk to Expert</p>
                  <p className="text-[10px] text-gray-400">+91 6827 422 224</p>
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* ── Related Products ── */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {relatedItems.map((rel, i) => (
              <motion.div
                key={rel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => { navigate(`/category/${category}/product/${rel.id}`); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square bg-neutral-50 overflow-hidden">
                  <img src={rel.image} alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-400 mb-0.5">{rel.metal}</p>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">{rel.name}</h3>
                  <p className="text-sm font-bold text-gray-900 mt-1">{rel.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
