import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { toggleMobileMenu, setMobileMenuOpen, setActiveSection } from '../store/slices/businessSlice'
import logo from '../assets/images/logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const { businessInfo, ui } = useSelector((state) => state.business)
  const { mobileMenuOpen, activeSection } = ui

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'services', label: 'Services' },
    { key: 'testimonials', label: 'Testimonials' },
    { key: 'contact', label: 'Contact' },
  ]

  const handleMenuClick = (sectionKey) => {
    dispatch(setActiveSection(sectionKey))
    dispatch(setMobileMenuOpen(false))

    // Smooth scroll to section
    const element = document.getElementById(sectionKey)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 backdrop-blur-sm shadow-lg border-b border-blue-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src={logo}
              alt="CallTech Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-white">CallTech</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleMenuClick(item.key)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-200 ${
                  activeSection === item.key ? 'text-blue-200' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2 text-white hover:text-blue-200"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="CallTech Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-blue-600">CallTech</span>
          </div>
        }
        placement="right"
        onClose={() => dispatch(setMobileMenuOpen(false))}
        open={mobileMenuOpen}
        width={280}
      >
        <div className="space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </Drawer>
    </motion.header>
  )
}

export default Header
