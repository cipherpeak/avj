import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react'

const LINKS = {
  Collections: ['Diamond Jewellery', 'Gold Necklaces', 'Gemstone Rings', 'Pearl Sets', 'Bridal Collection'],
  Occasions:   ['Office Wear', 'Party Wear', 'Day Wear', 'Heritage Pieces', 'Gifting Sets'],
  Support:     ['Track Order', 'Return Policy', 'Care Guide', 'Size Guide', 'FAQ'],
  Company:     ['About AVG', 'Our Craftsmen', 'Store Locator', 'Careers', 'Sustainability'],
}

const SOCIALS = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook,  label: 'Facebook',  href: '#' },
  { Icon: Youtube,   label: 'Youtube',   href: '#' },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-soft-white border-t border-neutral-200">

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-16 pb-10 md:pb-12">

        {/* Top row: brand + newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 border-b border-neutral-200">

          {/* Brand */}
          <div className="max-w-xs">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-9 flex-shrink-0">
                <div className="absolute w-[18px] h-[26px] border-[1.5px] border-neutral-300 rounded-full rotate-[28deg]" />
                <div className="absolute w-[18px] h-[26px] border-[1.5px] border-[#D4AF37] rounded-full -rotate-[28deg]" />
              </div>
              <div className="leading-none">
                <p className="font-serif text-xl font-bold text-[#D4AF37] tracking-tight">AVG</p>
                <p className="text-[8px] text-neutral-400 tracking-[0.22em] uppercase mt-0.5">Fine Jewellery</p>
              </div>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed mb-5">
              Crafting timeless gold & diamond jewellery for life's most cherished moments since 1999.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center
                             text-neutral-400 hover:text-charcoal hover:border-neutral-400
                             transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:max-w-sm w-full">
            <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-medium mb-1.5">Newsletter</p>
            <h4 className="font-serif text-lg font-semibold text-charcoal mb-3">
              Stay in the loop
            </h4>
            <p className="text-sm text-neutral-500 mb-4">
              New arrivals, exclusive offers and styling tips — delivered to you.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 border border-neutral-200 rounded-full px-4 py-2.5 text-sm
                           text-charcoal placeholder-neutral-400 bg-white
                           focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200
                           transition-all duration-200"
              />
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="flex-shrink-0 bg-charcoal text-white px-5 py-2.5 rounded-full text-xs
                           font-semibold hover:bg-neutral-800 transition-colors duration-200 flex items-center gap-1.5"
              >
                Subscribe
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── Link columns ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 pb-12 border-b border-neutral-200">
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[11px] font-semibold text-charcoal uppercase tracking-[0.18em] mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-500 hover:text-charcoal transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            © 2026 AVG Jewellers Group. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(item => (
              <a
                key={item}
                href="#"
                className="text-xs text-neutral-400 hover:text-charcoal transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center
                         text-neutral-400 hover:text-charcoal hover:border-neutral-400
                         transition-all duration-200 ml-2"
              aria-label="Back to top"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
