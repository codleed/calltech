import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { PhoneOutlined, ArrowRightOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import bgImage from '../assets/images/bg-2.jpg'

const Hero = () => {
  const { businessInfo } = useSelector((state) => state.business)
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  const fullText = "Professional HVAC Services"
  const secondLineText = "in Murfreesboro, TN"

  // Smooth typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 60) // Smoother speed (60ms per character)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const handleCallClick = () => {
    window.location.href = `tel:${businessInfo.contact.phone}`
  }

  const handleDiscoverClick = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Blue overlay with 50% opacity for better text readability */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center text-white"
        >
          {/* Main Heading with Smooth Typewriter Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 mt-16 sm:mt-8 lg:mt-0"
          >
            <span className="inline-block">
              {displayedText}
            </span>
            <br />
            <motion.span
              className="text-blue-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex >= fullText.length ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {secondLineText}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            CallTech Company LLC - Your local HVAC experts providing mechanical,
            electrical, and restaurant equipment services with old-fashioned customer
            service and top-notch delivery.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                onClick={handleDiscoverClick}
                className="bg-blue-600 border-blue-600 hover:bg-blue-700 h-12 px-8 text-lg font-semibold"
              >
                Discover more
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="large"
                icon={<PhoneOutlined />}
                onClick={handleCallClick}
                className="h-12 px-8 text-lg font-semibold bg-white text-blue-600 border-white hover:bg-gray-100"
              >
                (615) 955-5505
              </Button>
            </motion.div>
          </motion.div>

          {/* Bottom Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm opacity-80 mb-8 sm:mb-4"
          >
            <div className="flex items-center gap-2">
              <EnvironmentOutlined className="text-blue-300" />
              <span>2215 E Main St, Murfreesboro, TN</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockCircleOutlined className="text-blue-300" />
              <span>Open 24 Hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
