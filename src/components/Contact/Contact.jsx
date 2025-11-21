import React, { useEffect, useState } from 'react'
import { FaBehance, FaLinkedinIn, FaGithub, FaDribbble, FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="contact" className="contact section">
      <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
        {/* Top Section */}
        <div className="contact-top">
          {/* Left Section */}
          <div className="contact-left">
            <h2 className="contact-title">
              <span className="title-highlight">O</span>pen to Opportunities
            </h2>
            <p className="contact-location">Ready to be part of a great team.</p>
            
            <div className="contact-social">
             
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://wa.me/+918778117440" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-link"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-link"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Cards */}
          <div className="contact-right">
            <div className="contact-card">
              <p className="card-question">Think I’m a good fit? Email me.</p>
              <a href="mailto:mohamedkaif2603@gmail.com" className="card-contact">
                mohamedkaif2603@gmail.com
              </a>
              <span className="card-arrow">↗</span>
            </div>

            <div className="contact-card">
              <p className="card-question">Mobile No</p>
              <a href="tel:+918778117440" className="card-contact">
                +91 87781-17440
              </a>
              <span className="card-arrow">↗</span>
            </div>
          </div>
        </div>

        {/* Bottom Section - Footer */}
        <div className="contact-footer">
          <h1 className="footer-name">MOHAMED KAIF</h1>
          <div className="footer-bottom">
            <p className="footer-copyright">
              Hoping for the best. Thank you!!!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
