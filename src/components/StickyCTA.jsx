import React from 'react'

function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-charcoal/10 shadow-lg md:hidden">
      <div className="px-4 py-4">
        <button className="w-full bg-charcoal text-white py-4 rounded-lg font-serif text-lg font-semibold hover:bg-champagne transition-colors duration-300">
          Inquiry & Purchase
        </button>
      </div>
    </div>
  )
}

export default StickyCTA
