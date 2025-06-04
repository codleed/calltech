import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion, useAnimation, useInView } from 'framer-motion'

const Testimonials = () => {
  const { businessInfo } = useSelector((state) => state.business)
  const controls = useAnimation()
  const containerRef = useRef(null)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true })
  const [counter, setCounter] = useState(0)

  // Avatar mapping for customers
  const avatarMap = {
    'Sarah Johnson': '👩‍💼',
    'Mike Rodriguez': '👨‍🔧',
    'Emily Chen': '👩‍💻',
    'David Thompson': '👨‍🏫',
    'Lisa Martinez': '👩‍⚕️',
    'James Alexander': '👨‍💼',
    'Oscar Andrews': '👨‍🦰',
    'Isabella Grace': '👩‍🎨',
    'Robert Wilson': '👨‍🔬',
    'Maria Garcia': '👩‍🍳',
    'John Smith': '👨‍🚀',
    'Amanda Brown': '👩‍🎓'
  }

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedReviews = [...businessInfo.reviews, ...businessInfo.reviews]

  // Counter animation effect
  useEffect(() => {
    if (isInView) {
      const targetValue = 90
      const duration = 2000 // 2 seconds
      const increment = targetValue / (duration / 50) // Update every 50ms

      let currentValue = 0
      const timer = setInterval(() => {
        currentValue += increment
        if (currentValue >= targetValue) {
          setCounter(targetValue)
          clearInterval(timer)
        } else {
          setCounter(Math.floor(currentValue))
        }
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isInView])

  // Slow continuous scroll animation
  useEffect(() => {
    const startAnimation = async () => {
      const cardWidth = 400 // Approximate width of each card including padding
      const totalWidth = cardWidth * businessInfo.reviews.length

      // Continuous scroll animation - much slower
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: businessInfo.reviews.length * 8, // 8 seconds per testimonial (doubled the speed)
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      })
    }

    startAnimation()
  }, [controls, businessInfo.reviews.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-100 via-gray-100 to-gray-50">
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
            TESTIMONIALS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Honest reviews from our clients who have used our services <br/>
           <span className='text-blue-700' ref={counterRef}> {counter}+ 5-star reviews</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden py-5">
          <motion.div
            ref={containerRef}
            className="flex"
            animate={controls}
            style={{ width: 'max-content' }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => {
              const cardWidth = 400
              const totalWidth = cardWidth * businessInfo.reviews.length
              controls.start({
                x: -totalWidth,
                transition: {
                  duration: businessInfo.reviews.length * 7.2, // Same slower speed
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }
              })
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: '400px' }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col min-h-[320px] border border-blue-600 shadow-lg relative overflow-hidden group">
                  {/* Blue Glow Border Effect */}
                  <div className="absolute inset-0 rounded-3xl  blur-sm group-hover:blur-md transition-all duration-300"></div>

                  {/* Content Container */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">"</span>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="flex-1 mb-8">
                      <p className="text-gray-700 leading-relaxed text-base font-medium">
                        {review.text}
                      </p>
                    </div>

                    {/* Customer Info */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-blue-100">
                      {/* <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                        {avatarMap[review.customer] || '👤'}
                      </div> */}
                      <div>
                        <p className="font-bold text-gray-900 text-lg">
                          {review.customer}
                        </p>
                      
                      </div>
                    </div>
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

export default Testimonials
