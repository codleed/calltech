import React from 'react'
import { motion } from 'framer-motion'
import shirtImage from '../assets/images/Shirt.jpg'

const Services = () => {
  const features = [
    {
      icon: '🔨',
      title: 'Mechanical Services',
      description: 'Expert mechanical system installation, repair, and maintenance for residential and commercial properties in Murfreesboro and surrounding areas.'
    },
    {
      icon: '⚡',
      title: 'Electrical Solutions',
      description: 'Professional electrical services including wiring, troubleshooting, and electrical system upgrades performed by licensed electricians.'
    },
    {
      icon: '❄️',
      title: 'HVAC/R Expertise',
      description: 'Complete heating, ventilation, air conditioning, and refrigeration services to keep your home or business comfortable year-round.'
    },
    {
      icon: '🍽️',
      title: 'Restaurant Equipment',
      description: 'Specialized restaurant equipment service and repair to keep your commercial kitchen running efficiently and safely.'
    }
  ]

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

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants}>
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4">
                OUR SERVICES
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Local Home Service Experts with Huge Experience
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                CallTech Company LLC is your trusted Mechanical, Electrical, HVAC/R, and Restaurant Equipment service company located in Murfreesboro, Tennessee. We pride ourselves on being local home service experts with huge experience, providing care and expertise that will leave our customers satisfied.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={shirtImage}
                alt="HVAC Technicians"
                className="w-full h-auto object-cover"
              />
              {/* Blue overlay circle effect */}
              <div className="absolute inset-0 bg-blue-200 opacity-20 rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
