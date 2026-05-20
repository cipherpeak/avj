import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function PriceBreakup() {
  const [isOpen, setIsOpen] = useState(false)

  const priceItems = [
    { label: 'Gold', amount: 'AED 2,237.76' },
    { label: 'Diamond', amount: 'AED 3,112.16' },
    { label: 'Making Charges', amount: 'AED 665.37' },
    { label: 'Tax', amount: 'AED 0.00' },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white/80 backdrop-blur-sm rounded-lg border border-charcoal/10 p-6 hover:border-champagne/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl md:text-2xl font-semibold text-charcoal">
                Price Breakup
              </h2>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-charcoal/60" />
              ) : (
                <ChevronDown className="w-5 h-5 text-charcoal/60" />
              )}
            </div>

            {isOpen && (
              <div className="mt-6 space-y-4">
                {priceItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-charcoal/5 last:border-0"
                  >
                    <span className="text-charcoal/70 font-sans text-sm">{item.label}</span>
                    <span className="text-charcoal font-sans text-sm font-medium">{item.amount}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between py-4 border-t-2 border-charcoal/10 mt-4">
                  <span className="text-charcoal font-semibold font-sans text-base">Total</span>
                  <span className="text-charcoal font-semibold font-serif text-xl">AED 6,015.29</span>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PriceBreakup
