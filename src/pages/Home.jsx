import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveSection } from '../store/slices/businessSlice'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Reviews'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Set up intersection observer to track active section
    const sections = ['home', 'about', 'services', 'testimonials', 'contact']
    const observers = []

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                dispatch(setActiveSection(sectionId))
              }
            })
          },
          {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
          }
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    // Cleanup observers on unmount
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [dispatch])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery/>
        <Contact /> 
      </main>
      <Footer />
    </div>
  )
}

export default Home
