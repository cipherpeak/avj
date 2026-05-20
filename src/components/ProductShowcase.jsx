import React from 'react'

function ProductShowcase() {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex items-center justify-center border border-charcoal/5">
              <div className="text-center p-8">
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-4 rounded-full bg-gradient-to-br from-champagne/20 to-champagne/5 flex items-center justify-center">
                  <svg className="w-24 h-24 md:w-32 md:h-32 text-champagne/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M6 3h12l4 6-10 13L2 9z" />
                  </svg>
                </div>
                <p className="text-charcoal/50 text-sm font-medium">Mine Diamond Necklace Set</p>
                <p className="text-charcoal/40 text-xs mt-1">SKU: NSMPHRGEN033NK2</p>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            {/* Title and Badge */}
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  In Stock
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
                Mine Diamond Necklace Set
              </h1>
              <p className="text-charcoal/60 mt-2 text-sm font-sans">
                SKU: NSMPHRGEN033NK2
              </p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-charcoal/10 py-6">
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-3xl md:text-4xl font-semibold text-charcoal">
                  AED 19,217
                </span>
              </div>
              <p className="text-charcoal/50 text-sm mt-2">
                VAT @5% applicable for UAE
              </p>
            </div>

            {/* Description */}
            <div className="text-charcoal/70 text-sm leading-relaxed space-y-3">
              <p>
                Exquisite craftsmanship meets timeless elegance in this stunning Mine Diamond Necklace Set. 
                Featuring brilliant-cut diamonds set in lustrous rose gold, this set is designed to make 
                every moment unforgettable.
              </p>
              <p>
                Perfect for special occasions or as a sophisticated addition to your everyday jewelry collection.
              </p>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block pt-4">
              <button className="w-full bg-charcoal text-white py-4 rounded-lg font-serif text-lg font-semibold hover:bg-champagne transition-colors duration-300">
                Inquiry & Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
