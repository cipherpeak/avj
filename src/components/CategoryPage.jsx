import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, Heart, ShoppingBag, ChevronLeft, ChevronRight,
  Truck, ShieldCheck, Star, MapPin, Phone, Video, BadgeCheck
} from 'lucide-react'

const allImages = [
  '/images/gallery_statement_necklace.png',
  '/images/gold_necklace.png',
  '/images/pearl_necklace.png',
  '/images/gemstone_necklace.png',
]

export const categoryData = {
  necklaces: {
    label: 'Statement Necklaces',
    color: 'from-amber-50 to-yellow-100',
    items: [
      { id: 1, name: 'Royal Gold Necklace',        price: '₹ 42,500', mrp: '₹ 48,000', discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: 'Bestseller', metal: '22KT Yellow Gold', weight: '12.4 g', sku: 'NCK001', rating: 4.7, reviews: 128 },
      { id: 2, name: 'Diamond Solitaire Necklace', price: '₹ 68,000', mrp: '₹ 75,000', discount: '9% OFF',  image: '/images/gold_necklace.png',              tag: 'New',        metal: '18KT White Gold',  weight: '8.2 g',  sku: 'NCK002', rating: 4.9, reviews: 74  },
      { id: 3, name: 'Pearl Strand Necklace',      price: '₹ 31,200', mrp: '₹ 35,000', discount: '11% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '18KT Rose Gold',   weight: '10.1 g', sku: 'NCK003', rating: 4.5, reviews: 52  },
      { id: 4, name: 'Gemstone Pendant Set',        price: '₹ 54,800', mrp: '₹ 60,000', discount: '9% OFF',  image: '/images/gemstone_necklace.png',          tag: 'Trending',   metal: '22KT Yellow Gold', weight: '9.6 g',  sku: 'NCK004', rating: 4.8, reviews: 96  },
      { id: 5, name: 'Layered Chain Necklace',      price: '₹ 27,400', mrp: '₹ 30,000', discount: '9% OFF',  image: '/images/gallery_statement_necklace.png', tag: '',           metal: '18KT Yellow Gold', weight: '7.3 g',  sku: 'NCK005', rating: 4.4, reviews: 38  },
      { id: 6, name: 'Kundan Bridal Necklace',      price: '₹ 88,500', mrp: '₹ 95,000', discount: '7% OFF',  image: '/images/gold_necklace.png',              tag: 'Premium',    metal: '22KT Yellow Gold', weight: '22.8 g', sku: 'NCK006', rating: 4.9, reviews: 211 },
      { id: 7, name: 'Rose Gold Choker',            price: '₹ 22,900', mrp: '₹ 26,000', discount: '12% OFF', image: '/images/pearl_necklace.png',             tag: 'New',        metal: '18KT Rose Gold',   weight: '6.1 g',  sku: 'NCK007', rating: 4.6, reviews: 45  },
      { id: 8, name: 'Temple Gold Necklace',        price: '₹ 46,300', mrp: '₹ 52,000', discount: '11% OFF', image: '/images/gemstone_necklace.png',          tag: '',           metal: '22KT Yellow Gold', weight: '14.5 g', sku: 'NCK008', rating: 4.7, reviews: 83  },
    ],
  },
  bangles: {
    label: 'Stunning Bangles',
    color: 'from-rose-50 to-pink-100',
    items: [
      { id: 1, name: 'Classic Gold Bangle',   price: '₹ 28,800', mrp: '₹ 32,000', discount: '10% OFF', image: '/images/gold_necklace.png',              tag: 'Bestseller', metal: '22KT Yellow Gold', weight: '11.2 g', sku: 'BNG001', rating: 4.8, reviews: 154 },
      { id: 2, name: 'Diamond-set Bangle',    price: '₹ 52,000', mrp: '₹ 58,000', discount: '10% OFF', image: '/images/gallery_statement_necklace.png', tag: 'New',        metal: '18KT White Gold',  weight: '9.4 g',  sku: 'BNG002', rating: 4.9, reviews: 67  },
      { id: 3, name: 'Twisted Rope Bangle',   price: '₹ 19,500', mrp: '₹ 22,000', discount: '11% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '22KT Yellow Gold', weight: '8.1 g',  sku: 'BNG003', rating: 4.5, reviews: 42  },
      { id: 4, name: 'Enamelled Bangle Set',  price: '₹ 34,200', mrp: '₹ 38,000', discount: '10% OFF', image: '/images/gemstone_necklace.png',          tag: 'Trending',   metal: '22KT Yellow Gold', weight: '18.6 g', sku: 'BNG004', rating: 4.7, reviews: 88  },
      { id: 5, name: 'Broad Polki Bangle',    price: '₹ 61,000', mrp: '₹ 68,000', discount: '10% OFF', image: '/images/gold_necklace.png',              tag: 'Premium',    metal: '22KT Yellow Gold', weight: '24.3 g', sku: 'BNG005', rating: 4.9, reviews: 176 },
      { id: 6, name: 'Slim Stack Bangles',    price: '₹ 12,400', mrp: '₹ 14,000', discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: '',           metal: '18KT Rose Gold',   weight: '5.8 g',  sku: 'BNG006', rating: 4.4, reviews: 31  },
      { id: 7, name: 'Antique Finish Bangle', price: '₹ 23,700', mrp: '₹ 27,000', discount: '12% OFF', image: '/images/pearl_necklace.png',             tag: 'New',        metal: '22KT Yellow Gold', weight: '13.2 g', sku: 'BNG007', rating: 4.6, reviews: 59  },
      { id: 8, name: 'Bridal Bangle Set',     price: '₹ 94,000', mrp: '₹ 1,02,000', discount: '8% OFF', image: '/images/gemstone_necklace.png',         tag: 'Premium',    metal: '22KT Yellow Gold', weight: '38.4 g', sku: 'BNG008', rating: 5.0, reviews: 232 },
    ],
  },
  earrings: {
    label: 'Stunning Earrings',
    color: 'from-violet-50 to-purple-100',
    items: [
      { id: 1, name: 'Diamond Drop Earrings', price: '₹ 18,200', mrp: '₹ 21,000', discount: '13% OFF', image: '/images/gemstone_necklace.png',          tag: 'Bestseller', metal: '18KT White Gold',  weight: '4.2 g',  sku: 'ERG001', rating: 4.8, reviews: 196 },
      { id: 2, name: 'Gold Jhumka',           price: '₹ 11,500', mrp: '₹ 13,500', discount: '15% OFF', image: '/images/gold_necklace.png',              tag: 'Trending',   metal: '22KT Yellow Gold', weight: '6.8 g',  sku: 'ERG002', rating: 4.7, reviews: 143 },
      { id: 3, name: 'Pearl Stud Earrings',   price: '₹ 8,900',  mrp: '₹ 10,500', discount: '15% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '18KT White Gold',  weight: '2.4 g',  sku: 'ERG003', rating: 4.5, reviews: 62  },
      { id: 4, name: 'Chandelier Earrings',   price: '₹ 32,600', mrp: '₹ 37,000', discount: '12% OFF', image: '/images/gallery_statement_necklace.png', tag: 'New',        metal: '22KT Yellow Gold', weight: '9.3 g',  sku: 'ERG004', rating: 4.6, reviews: 77  },
      { id: 5, name: 'Hoop Earrings',         price: '₹ 14,300', mrp: '₹ 16,500', discount: '13% OFF', image: '/images/gemstone_necklace.png',          tag: '',           metal: '18KT Rose Gold',   weight: '5.1 g',  sku: 'ERG005', rating: 4.4, reviews: 49  },
      { id: 6, name: 'Floral Cluster Studs',  price: '₹ 22,800', mrp: '₹ 26,000', discount: '12% OFF', image: '/images/gold_necklace.png',              tag: 'New',        metal: '18KT White Gold',  weight: '3.8 g',  sku: 'ERG006', rating: 4.7, reviews: 91  },
      { id: 7, name: 'Kundan Earrings',       price: '₹ 27,500', mrp: '₹ 31,000', discount: '11% OFF', image: '/images/pearl_necklace.png',             tag: 'Premium',    metal: '22KT Yellow Gold', weight: '8.6 g',  sku: 'ERG007', rating: 4.8, reviews: 118 },
      { id: 8, name: 'Bridal Earring Set',    price: '₹ 48,000', mrp: '₹ 54,000', discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: 'Premium',    metal: '22KT Yellow Gold', weight: '16.2 g', sku: 'ERG008', rating: 4.9, reviews: 204 },
    ],
  },
  rings: {
    label: 'Sleek Rings',
    color: 'from-emerald-50 to-teal-100',
    items: [
      { id: 1, name: 'Diamond Solitaire Ring', price: '₹ 14,900', mrp: '₹ 17,000', discount: '12% OFF', image: '/images/pearl_necklace.png',             tag: 'Bestseller', metal: '18KT White Gold',  weight: '3.1 g',  sku: 'RNG001', rating: 4.9, reviews: 287 },
      { id: 2, name: 'Gold Band Ring',          price: '₹ 8,200',  mrp: '₹ 9,500',  discount: '14% OFF', image: '/images/gold_necklace.png',              tag: '',           metal: '22KT Yellow Gold', weight: '4.4 g',  sku: 'RNG002', rating: 4.5, reviews: 73  },
      { id: 3, name: 'Emerald Cocktail Ring',   price: '₹ 38,400', mrp: '₹ 43,000', discount: '11% OFF', image: '/images/gemstone_necklace.png',          tag: 'Trending',   metal: '18KT Yellow Gold', weight: '6.2 g',  sku: 'RNG003', rating: 4.7, reviews: 112 },
      { id: 4, name: 'Stackable Ring Set',      price: '₹ 11,700', mrp: '₹ 13,500', discount: '13% OFF', image: '/images/gallery_statement_necklace.png', tag: 'New',        metal: '18KT Rose Gold',   weight: '5.8 g',  sku: 'RNG004', rating: 4.6, reviews: 58  },
      { id: 5, name: 'Twisted Band Ring',       price: '₹ 16,500', mrp: '₹ 19,000', discount: '13% OFF', image: '/images/pearl_necklace.png',             tag: '',           metal: '22KT Yellow Gold', weight: '4.9 g',  sku: 'RNG005', rating: 4.5, reviews: 41  },
      { id: 6, name: 'Kundan Finger Ring',      price: '₹ 21,200', mrp: '₹ 24,000', discount: '12% OFF', image: '/images/gold_necklace.png',              tag: 'New',        metal: '22KT Yellow Gold', weight: '7.3 g',  sku: 'RNG006', rating: 4.7, reviews: 89  },
      { id: 7, name: 'Rose Gold Ring',          price: '₹ 12,800', mrp: '₹ 14,800', discount: '14% OFF', image: '/images/gemstone_necklace.png',          tag: '',           metal: '18KT Rose Gold',   weight: '3.6 g',  sku: 'RNG007', rating: 4.4, reviews: 37  },
      { id: 8, name: 'Bridal Statement Ring',   price: '₹ 56,000', mrp: '₹ 63,000', discount: '11% OFF', image: '/images/gallery_statement_necklace.png', tag: 'Premium',    metal: '22KT Yellow Gold', weight: '12.1 g', sku: 'RNG008', rating: 5.0, reviews: 319 },
    ],
  },
}

const tagColors = {
  Bestseller: 'bg-amber-400 text-white',
  New: 'bg-emerald-500 text-white',
  Trending: 'bg-rose-500 text-white',
  Premium: 'bg-indigo-600 text-white',
}

function CategoryPage() {
  const { category } = useParams()
  const navigate = useNavigate()
  const [wishlist, setWishlist] = useState([])

  const data = categoryData[category] || categoryData['necklaces']

  const toggleWishlist = (id) =>
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
    }),
  }

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Header */}
      <div className={`bg-gradient-to-r ${data.color} border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#dca932] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <div className="h-5 w-px bg-gray-300" />
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">{data.label}</h1>
          <span className="ml-auto text-sm text-gray-500">{data.items.length} designs</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center gap-3 overflow-x-auto">
          {['All Filters', 'Gold', 'Diamond', 'Platinum', 'Silver', 'Under ₹20,000', 'Under ₹50,000'].map((f, i) => (
            <button key={f} className={`border rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${i === 0 ? 'border-gray-300 text-gray-700' : 'border-gray-200 text-gray-600'} hover:border-[#dca932] hover:text-[#dca932]`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.items.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={() => navigate(`/category/${category}/product/${item.id}`)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative aspect-square bg-neutral-50 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                {item.tag && (
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[item.tag]}`}>{item.tag}</span>
                )}
                <button
                  onClick={e => { e.stopPropagation(); toggleWishlist(item.id) }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
                >
                  <Heart className={`w-4 h-4 ${wishlist.includes(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#dca932] font-semibold uppercase tracking-wide mb-1">{item.metal}</p>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1 line-clamp-2">{item.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <Star key={idx} className={`w-3 h-3 ${idx < Math.round(item.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                  ))}
                  <span className="text-[10px] text-gray-400 ml-1">({item.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-base font-bold text-gray-900">{item.price}</p>
                  <p className="text-xs text-gray-400 line-through">{item.mrp}</p>
                </div>
                <button className="mt-3 w-full flex items-center justify-center gap-2 bg-[#dca932] hover:bg-[#c99c2d] text-white text-sm font-semibold py-2 rounded-xl transition-colors">
                  <ShoppingBag className="w-4 h-4" /> View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
