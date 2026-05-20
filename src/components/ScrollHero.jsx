import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function ScrollHero() {
  const containerRef = useRef(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentFrame, setCurrentFrame] = useState(0)
  const totalFrames = 209

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Transform scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1])

  // Preload images with progress
  useEffect(() => {
    const loadImages = async () => {
      let loaded = 0
      const imagePromises = []
      for (let i = 1; i <= totalFrames; i++) {
        const frameNumber = i.toString().padStart(3, '0')
        const img = new Image()
        img.src = `/images/herosections/ezgif-frame-${frameNumber}.png`
        imagePromises.push(
          new Promise((resolve) => {
            img.onload = () => {
              loaded++
              setLoadingProgress(Math.round((loaded / totalFrames) * 100))
              resolve()
            }
            img.onerror = () => {
              loaded++
              setLoadingProgress(Math.round((loaded / totalFrames) * 100))
              resolve()
            }
          })
        )
      }
      await Promise.all(imagePromises)
      setImagesLoaded(true)
    }
    loadImages()
  }, [])

  // Update current frame based on scroll
  useEffect(() => {
    const unsubscribe = frameIndex.on('change', (latest) => {
      setCurrentFrame(Math.round(latest))
    })
    return unsubscribe
  }, [frameIndex])

  const getFrameUrl = (frame) => {
    const frameNumber = (frame + 1).toString().padStart(3, '0')
    return `/images/herosections/ezgif-frame-${frameNumber}.png`
  }

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        
        {/* Image Sequence Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {imagesLoaded ? (
            <img
              src={getFrameUrl(currentFrame)}
              alt={`Frame ${currentFrame}`}
              className="w-full h-full object-cover"
              style={{ maxHeight: '100vh' }}
            />
          ) : (
            <div className="text-white text-center">
              <div className="text-2xl mb-4">Loading images...</div>
              <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <div className="text-sm mt-2 text-white/60">{loadingProgress}%</div>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ScrollHero