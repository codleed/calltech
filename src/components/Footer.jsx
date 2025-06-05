import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined} from '@ant-design/icons'
import { motion } from 'framer-motion'
import logo from '../assets/images/logo.png'

const Footer = () => {
  const { businessInfo } = useSelector((state) => state.business)

  const handleCallClick = () => {
    window.location.href = `tel:${businessInfo.contact.phone}`
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${businessInfo.contact.email}`
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-700 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <img src={logo} alt="CallTech Logo" className="w-8 h-8 object-contain" />
              <div>
                <h3 className="text-xl font-bold">{businessInfo.name}</h3>
                <p className="text-sm text-gray-400">{businessInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional HVAC services for residential and commercial properties. 
              Your comfort is our priority, and we're here to serve you 24/7.
            </p>
            {/* <div className="flex space-x-4">
              {businessInfo.certifications.slice(0, 2).map((cert, index) => (
                <div key={index} className="bg-hvac-blue px-3 py-1 rounded text-xs font-semibold">
                  {cert}
                </div>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase())
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Our Services</h3>
            <ul className="space-y-2">
              {businessInfo.services.slice(0, 6).map((service) => (
                <li key={service.id} className="text-gray-300 text-sm">
                  {service.icon} {service.name}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneOutlined className="text-hvac-blue" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <button
                    onClick={handleCallClick}
                    className="text-white hover:text-hvac-blue transition-colors duration-300"
                  >
                    {businessInfo.contact.phone}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MailOutlined className="text-hvac-blue" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <button
                    onClick={handleEmailClick}
                    className="text-white hover:text-hvac-blue transition-colors duration-300"
                  >
                    {businessInfo.contact.email}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <EnvironmentOutlined className="text-hvac-blue" />
                <div>
                  <p className="text-sm text-gray-400">Service Area</p>
                  <p className="text-white">{businessInfo.location.serviceArea}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Emergency Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-red-600 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <span className="text-xl">🚨</span>
              <span className="font-semibold">Emergency HVAC Service Available 24/7</span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="large"
                onClick={handleCallClick}
                className="bg-white text-red-600 border-white hover:bg-gray-100 font-semibold"
              >
                Call Now: {businessInfo.contact.phone}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-white text-sm">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <button
                onClick={scrollToTop}
                className="text-white hover:text-orange transition-colors duration-300 text-sm"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
