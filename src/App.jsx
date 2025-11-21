import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Specialities from './components/Specialities/Specialities'
import Contact from './components/Contact/Contact'
import BackToTop from './components/BackToTop/BackToTop'
import { initScrollAnimations } from './utils/animations'
import './App.css'

function App() {
  useEffect(() => {
    // Initialize scroll animations on mount
    const timer = setTimeout(() => {
      initScrollAnimations()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutMe />
              <Specialities />
              <Contact />
            </>
          } />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  )
}

export default App
