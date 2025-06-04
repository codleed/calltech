import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import image1 from '../assets/images/1.jpg'
import image2 from '../assets/images/2.jpg'
import image3 from '../assets/images/3.webp'
import image4 from '../assets/images/4.webp'
import image5 from '../assets/images/5.webp'
import image6 from '../assets/images/6.webp'
import image7 from '../assets/images/7.webp'
import image8 from '../assets/images/8.webp'

const Gallery = () => {
  const controls = useAnimation()

  // Gallery images
  const galleryImages = [
    { id: 1, src: image1, alt: 'HVAC Repair Work 1' },
    { id: 2, src: image2, alt: 'HVAC Repair Work 2' },
    { id: 3, src: image3, alt: 'HVAC Repair Work 3' },
    { id: 4, src: image4, alt: 'HVAC Repair Work 4' },
    { id: 5, src: image5, alt: 'HVAC Repair Work 5' },
    { id: 6, src: image6, alt: 'HVAC Repair Work 6' },
    { id: 7, src: image7, alt: 'HVAC Repair Work 7' },
    { id: 8, src: image8, alt: 'HVAC Repair Work 8' }
  ]

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...galleryImages, ...galleryImages]

  // Slow continuous scroll animation (left to right)
  useEffect(() => {
    const startAnimation = async () => {
      const imageWidth = 350 // Width of each image including padding
      const totalWidth = imageWidth * galleryImages.length

      // Start from the left edge of duplicated content
      controls.set({ x: -totalWidth })

      // Continuous scroll animation - left to right
      await controls.start({
        x: 0,
        transition: {
          duration: galleryImages.length * 6, // 6 seconds per image
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      })
    }

    startAnimation()
  }, [controls, galleryImages.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
            GALLERY
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Work in Action
          </h2>
        </motion.div>

        {/* Gallery Carousel */}
        <div className="relative overflow-hidden py-5">
          <motion.div
            className="flex"
            animate={controls}
            style={{ width: 'max-content' }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => {
              // Resume from current position and continue left to right
              controls.start({
                x: 0, // Continue left to right movement
                transition: {
                  duration: galleryImages.length * 6, // Same slower speed
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }
              })
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: '350px' }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-4 shadow-lg border border-blue-200 relative overflow-hidden group">
                  {/* Blue Glow Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 blur-sm group-hover:blur-md transition-all duration-300"></div>
                  
                  {/* Image Container */}
                  <div className="relative z-10">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
