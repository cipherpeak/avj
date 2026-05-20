import React from 'react'
import { motion } from 'framer-motion'

function JewelryGrid() {
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-4"
        >
          {/* Top Subheading Text banner */}
          <p className="text-center text-xs sm:text-sm tracking-widest text-neutral-800 font-sans uppercase mb-6">
            Sparkle through the festive nights with timeless diamonds
          </p>

          {/* Asymmetric Bento Grid Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Card 1: Main Statement Necklaces (Left Tall Block) */}
            <motion.div 
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden md:col-span-5 aspect-[4/5] bg-neutral-900 group shadow-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="/images/gallery/model-necklace.jpg" 
                alt="Statement Necklaces" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-white tracking-wide">
                  Statement Necklaces
                </h3>
              </div>
            </motion.div>

            {/* Right Column Structure (Holds Bangles, Earrings, and Rings stacked) */}
            <div className="md:col-span-7 flex flex-col gap-4">
              
              {/* Card 2: Stunning Bangles (Top Wide / Half-height Block) */}
              <motion.div 
                variants={itemVariants}
                className="relative rounded-2xl overflow-hidden aspect-[1.8/1] bg-neutral-900 group shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/60 z-10" />
                <img 
                  src="/images/gallery/bangles.jpg" 
                  alt="Stunning Bangles" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-1/2 right-8 -translate-y-1/2 text-right z-20 max-w-[50%]">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-200 leading-tight">
                    Stunning <br />Bangles
                  </h3>
                </div>
              </motion.div>

              {/* Sub-grid nesting Earrings and Rings safely side-by-side */}
              <div className="grid grid-cols-2 gap-4 flex-1">
                
                {/* Card 3: Stunning Earrings */}
                <motion.div 
                  variants={itemVariants}
                  className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto bg-neutral-900 group shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                  <img 
                    src="/images/gallery/earrings.jpg" 
                    alt="Stunning Earrings" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="font-serif text-lg lg:text-2xl font-semibold text-amber-200 leading-tight">
                      Stunning <br />Earrings
                    </h3>
                  </div>
                </motion.div>

                {/* Card 4: Sleek Rings */}
                <motion.div 
                  variants={itemVariants}
                  className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto bg-neutral-900 group shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                  <img 
                    src="/images/gallery/rings.jpg" 
                    alt="Sleek Rings" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 right-6 text-right z-20">
                    <h3 className="font-serif text-lg lg:text-2xl font-semibold text-amber-200 leading-tight">
                      Sleek<br />Rings
                    </h3>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JewelryGrid