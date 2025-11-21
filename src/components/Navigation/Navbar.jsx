import React, { useState, useEffect } from 'react'
import { scrollToSection } from '../../utils/animations'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'specialities', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-logo"></div>
          <span className="brand-name">Kaif.dev</span>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#hero" 
            className={activeSection === 'hero' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('hero') }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('about') }}
          >
            About
          </a>
          <a 
            href="#specialities" 
            className={activeSection === 'specialities' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('specialities') }}
          >
            Work
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
          >
            Contact
          </a>
          <button 
            className="navbar-cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}
          >
            Let's Talk
            <span className="arrow">↗</span>
          </button>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
