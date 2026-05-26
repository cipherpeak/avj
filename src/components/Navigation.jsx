import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, User, Heart, ShoppingBag, Menu, X, Phone, BadgePercent, Truck } from 'lucide-react'

const NAV_LINKS = [
  { label: 'New Arrivals', href: '#' },
  { label: 'Earrings', href: '#' },
  { label: 'Pendants', href: '#' },
  { label: 'Rings', href: '#' },
  { label: 'Diamond Jewellery', href: '#' },
  { label: 'More Jewellery', href: '#' },
  { label: 'Gifting', href: '#' },
  { label: 'Wedding Collections', href: '#' },
]

function Navigation() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const heroHeight = window.innerHeight * 3
    const handleScroll = () => {
      setVisible(window.scrollY >= heroHeight - window.innerHeight * 0.1)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.header
            key="nav"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-neutral-100"
          >
            {/* Promo Banner */}
            <div className="bg-charcoal text-white/75 text-center py-1.5 text-[10px] font-medium tracking-[0.15em] uppercase hidden sm:block">
              ✦ &nbsp; Free shipping above ₹10,000 &nbsp;·&nbsp; Lifetime maintenance &nbsp;·&nbsp; IGI certified diamonds &nbsp; ✦
            </div>

            {/* Main Row */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex items-center gap-4">

                {/* Logo */}
                <a href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
                  <div className="relative w-8 h-9 flex items-center justify-center">
                    <div className="absolute w-[18px] h-[26px] border-2 border-neutral-300 rounded-full rotate-[28deg]" />
                    <div className="absolute w-[18px] h-[26px] border-2 border-champagne rounded-full -rotate-[28deg]" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-serif text-[22px] font-bold text-champagne tracking-tight">AVG</span>
                    <span className="text-[8px] text-neutral-400 tracking-[0.22em] uppercase">Fine Jewellery</span>
                  </div>
                </a>

                {/* Search */}
                <div className="flex-1 max-w-md hidden md:block">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Search for diamond, gold, earrings..."
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-full py-2.5 pl-4 pr-10 text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-champagne/40 focus:ring-2 focus:ring-champagne/15 transition-all duration-200"
                    />
                    <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                  <a
                    href="tel:+916827422224"
                    className="hidden xl:flex items-center gap-1.5 text-xs text-neutral-500 hover:text-champagne transition-colors duration-200 pr-3 border-r border-neutral-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-champagne" />
                    +91 6827 422 224
                  </a>
                  <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-neutral-600 hover:text-champagne hover:bg-champagne/8 transition-all duration-200">
                    <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </button>
                  <button className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full text-neutral-600 hover:text-champagne hover:bg-champagne/8 transition-all duration-200">
                    <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
                  </button>
                  <button className="relative w-9 h-9 flex items-center justify-center rounded-full text-neutral-600 hover:text-champagne hover:bg-champagne/8 transition-all duration-200">
                    <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-champagne text-white text-[8px] rounded-full flex items-center justify-center font-bold leading-none">0</span>
                  </button>
                  <button
                    onClick={() => setMenuOpen(true)}
                    className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full text-neutral-600 hover:text-champagne hover:bg-champagne/8 transition-all duration-200"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Category Bar */}
            <div className="hidden lg:block border-t border-neutral-100">
              <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <ul className="flex items-center py-1.5 gap-0.5">
                  {NAV_LINKS.map(link => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="px-3 py-2 text-[13px] font-medium text-neutral-600 hover:text-champagne hover:bg-champagne/6 rounded-md transition-all duration-200 whitespace-nowrap block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li className="ml-auto flex items-center gap-2">
                    <a href="#" className="flex items-center gap-1.5 text-[13px] font-semibold text-champagne hover:text-[#c99c2d] transition-colors whitespace-nowrap px-2 py-2">
                      Today's Gold Rate
                    </a>
                    <a href="#" className="flex items-center gap-1.5 bg-champagne text-white px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-[#c99c2d] transition-colors whitespace-nowrap">
                      <BadgePercent className="w-3.5 h-3.5" /> Offers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.header>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                />
                <motion.aside
                  key="drawer"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed top-0 right-0 h-full w-[290px] sm:w-[320px] bg-white z-[70] flex flex-col shadow-2xl"
                >
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-8">
                        <div className="absolute w-4 h-[22px] border-[1.5px] border-neutral-300 rounded-full rotate-[28deg]" />
                        <div className="absolute w-4 h-[22px] border-[1.5px] border-champagne rounded-full -rotate-[28deg]" />
                      </div>
                      <span className="font-serif text-xl font-bold text-champagne">AVG</span>
                    </div>
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Search */}
                  <div className="px-5 py-3.5 border-b border-neutral-100">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search jewellery..."
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-full py-2.5 pl-4 pr-9 text-sm focus:outline-none focus:border-champagne/40 focus:ring-2 focus:ring-champagne/15 transition-all"
                      />
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    </div>
                  </div>

                  {/* Links */}
                  <nav className="flex-1 overflow-y-auto px-5 py-2">
                    {NAV_LINKS.map((link, i) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center justify-between py-3.5 text-sm font-medium text-neutral-700 hover:text-champagne border-b border-neutral-50 transition-colors"
                      >
                        {link.label}
                        <span className="text-neutral-300 text-base">›</span>
                      </motion.a>
                    ))}
                    <div className="mt-4 space-y-1 pb-4">
                      <a href="#" className="flex items-center gap-2 py-3 text-sm font-semibold text-champagne hover:text-[#c99c2d] transition-colors">
                        <BadgePercent className="w-4 h-4" /> Current Offers
                      </a>
                      <a href="#" className="flex items-center gap-2 py-3 text-sm font-medium text-neutral-600 hover:text-champagne transition-colors">
                        <Truck className="w-4 h-4 text-champagne" /> Express Delivery
                      </a>
                    </div>
                  </nav>

                  {/* Drawer Footer */}
                  <div className="px-5 py-4 border-t border-neutral-100 bg-neutral-50/80">
                    <div className="flex items-center gap-5 mb-3">
                      <button className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-champagne transition-colors">
                        <User className="w-4 h-4" strokeWidth={1.5} /> Account
                      </button>
                      <button className="flex items-center gap-1.5 text-sm text-neutral-600 hover:text-champagne transition-colors">
                        <Heart className="w-4 h-4" strokeWidth={1.5} /> Wishlist
                      </button>
                    </div>
                    <a href="tel:+916827422224" className="flex items-center gap-2 text-xs text-neutral-500">
                      <Phone className="w-3.5 h-3.5 text-champagne" />
                      +91 6827 422 224
                    </a>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}

export default Navigation
