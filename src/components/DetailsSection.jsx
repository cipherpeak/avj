import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

function DetailsSection() {
  const [selectedSize, setSelectedSize] = useState('16')
  const [selectedGoldColor, setSelectedGoldColor] = useState('Rose')
  const [isPriceOpen, setIsPriceOpen] = useState(false)

  const priceItems = [
    { label: 'Gold', amount: 'AED 2,237.76' },
    { label: 'Diamond', amount: 'AED 3,112.16' },
    { label: 'Making Charges', amount: 'AED 665.37' },
    { label: 'Tax', amount: 'AED 0.00' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <section className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          
          {/* LEFT: Image Model Gallery Grid (7 Columns wide on desktop) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-4">
            
            {/* Top Subheading Label matching the design banner */}
            <p className="text-center text-xs tracking-widest text-neutral-500 font-sans uppercase mb-4">
              Sparkle through the festive nights with timeless diamonds
            </p>

            {/* Asymmetric Bento Grid Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card 1: Main Statement Necklaces (Left Tall Block) */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 group shadow-sm">
                {/* Image Placeholder - Replace src with your actual image asset */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img 
                  src="/images/gallery/model-necklace.jpg" 
                  alt="Statement Necklaces" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Floating Bottom Label */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-white tracking-wide">
                    Statement Necklaces
                  </h3>
                </div>
              </div>

              {/* Right Column Structure (Holds Bangles, Earrings, and Rings stacked) */}
              <div className="flex flex-col gap-4">
                
                {/* Card 2: Stunning Bangles (Top Wide / Half-height Block) */}
                <div className="relative rounded-2xl overflow-hidden aspect-[1.6/1] bg-neutral-900 group shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/60 z-10" />
                  <img 
                    src="/images/gallery/bangles.jpg" 
                    alt="Stunning Bangles" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-1/2 right-6 -translate-y-1/2 text-right z-20 max-w-[50%]">
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-amber-200 leading-tight">
                      Stunning Bangles
                    </h3>
                  </div>
                </div>

                {/* Sub-grid nesting Earrings and Rings safely side-by-side */}
                <div className="grid grid-cols-2 gap-4 flex-1">
                  
                  {/* Card 3: Stunning Earrings */}
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-neutral-900 group shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                    <img 
                      src="/images/gallery/earrings.jpg" 
                      alt="Stunning Earrings" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="font-serif text-base lg:text-lg font-semibold text-amber-200 leading-tight">
                        Stunning Earrings
                      </h3>
                    </div>
                  </div>

                  {/* Card 4: Sleek Rings */}
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-neutral-900 group shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                    <img 
                      src="/images/gallery/rings.jpg" 
                      alt="Sleek Rings" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute bottom-4 right-4 text-right z-20">
                      <h3 className="font-serif text-base lg:text-lg font-semibold text-amber-200 leading-tight">
                        Sleek<br />Rings
                      </h3>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default DetailsSection