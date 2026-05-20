import React from 'react'

function DetailedSpecs({ selectedSize, setSelectedSize, selectedGoldColor, setSelectedGoldColor }) {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-8 lg:mb-12">
          Set Components
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* Component 1: Necklace */}
          <div className="bg-soft-white rounded-lg p-6 border border-charcoal/5 hover:border-champagne/30 transition-colors duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  Mine Diamond Necklace
                </h3>
                <p className="text-charcoal/50 text-sm mt-1">SKU: MPHRGEN033NK2</p>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center">
              <svg className="w-16 h-16 text-champagne/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 3h12l4 6-10 13L2 9z" />
              </svg>
            </div>
          </div>

          {/* Component 2: Earring */}
          <div className="bg-soft-white rounded-lg p-6 border border-charcoal/5 hover:border-champagne/30 transition-colors duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">
                  Mine Diamond Earring
                </h3>
                <p className="text-charcoal/50 text-sm mt-1">SKU: MPHRGEN033ER2</p>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center">
              <svg className="w-16 h-16 text-champagne/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Selection Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Size Selection */}
          <div>
            <h3 className="font-sans text-sm font-medium text-charcoal mb-3 tracking-wide">
              Size
            </h3>
            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedSize('16')}
                className={`px-6 py-3 rounded-md border transition-all duration-300 font-medium text-sm ${
                  selectedSize === '16'
                    ? 'border-champagne bg-champagne/10 text-champagne'
                    : 'border-charcoal/20 text-charcoal/70 hover:border-champagne/50 hover:text-charcoal'
                }`}
              >
                16
              </button>
              <button
                onClick={() => setSelectedSize('18')}
                className={`px-6 py-3 rounded-md border transition-all duration-300 font-medium text-sm ${
                  selectedSize === '18'
                    ? 'border-champagne bg-champagne/10 text-champagne'
                    : 'border-charcoal/20 text-charcoal/70 hover:border-champagne/50 hover:text-charcoal'
                }`}
              >
                18
              </button>
            </div>
          </div>

          {/* Gold Color Selection */}
          <div>
            <h3 className="font-sans text-sm font-medium text-charcoal mb-3 tracking-wide">
              Gold Color
            </h3>
            <div className="flex space-x-3">
              <button
                onClick={() => setSelectedGoldColor('Rose')}
                className={`px-6 py-3 rounded-md border transition-all duration-300 font-medium text-sm ${
                  selectedGoldColor === 'Rose'
                    ? 'border-champagne bg-champagne/10 text-champagne'
                    : 'border-charcoal/20 text-charcoal/70 hover:border-champagne/50 hover:text-charcoal'
                }`}
              >
                Rose
              </button>
              <button
                onClick={() => setSelectedGoldColor('Yellow')}
                className={`px-6 py-3 rounded-md border transition-all duration-300 font-medium text-sm ${
                  selectedGoldColor === 'Yellow'
                    ? 'border-champagne bg-champagne/10 text-champagne'
                    : 'border-charcoal/20 text-charcoal/70 hover:border-champagne/50 hover:text-charcoal'
                }`}
              >
                Yellow
              </button>
              <button
                onClick={() => setSelectedGoldColor('White')}
                className={`px-6 py-3 rounded-md border transition-all duration-300 font-medium text-sm ${
                  selectedGoldColor === 'White'
                    ? 'border-champagne bg-champagne/10 text-champagne'
                    : 'border-charcoal/20 text-charcoal/70 hover:border-champagne/50 hover:text-charcoal'
                }`}
              >
                White
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DetailedSpecs
