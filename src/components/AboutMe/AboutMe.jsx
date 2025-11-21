import React, { useState, useEffect } from 'react'
import './AboutMe.css'

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('about')
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

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const tabs = [
    { id: 'about', label: 'About me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' }
  ]

  const content = {
    about: {
      title: 'Full Stack MERN Developer',
      description: 'I build fast, reliable, and user-focused web applications. I focus on writing clean code, creating smooth user experiences, and turning ideas into real, working products. My goal is simple: to deliver solutions that add value, solve real problems, and make users enjoy every interaction. I’m constantly learning, improving, and committed to bringing quality and consistency to every project I build..'
    },
    experience: {
      title: 'Professional Experience',
      items: [
        { period: 'JUNE 2025 - Present', role: 'Full Stack Web Developer  - INTERN', company: 'Aryu Software Technologies.', description: 'Contributing to the development of responsive web applications by collaborating with designers and backend teams to implement clean, user-friendly interfaces and optimize overall user experience.' },
        
      ]
    },
    education: {
      title: 'Education',
      items: [
        { period: '2021 - 2025', degree: 'Bachelor of Engineering', institution: 'Aalim Muhammed Salegh College of Engineering', description:'Major in Computer Science and Engineering with a focus on modern web development and software engineering.' },
        { period: '2020 - 2021', degree: 'Higher Secondary Certificate (HSC)', institution: 'Khadhir Mohideen Hr Sec School.', description: 'Scored Percentage : 84%' }
      ]
    },
    skills: {
      title: 'Skills & Expertise',
      items: [
        { name: 'HTML/CSS', level: 100 },
        { name: 'Front-End', level: 97 },
        { name: 'MERN Stack', level: 96 },    
        { name: 'React', level: 96 },
        { name: 'Java Script', level: 95 },
        { name: 'Internship Experience', level: 97 }
      ]
    }
  }

  return (
    <section id="about" className="about section">
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        <div className="about-header">
          <h2 className="about-title">Resume</h2>
          <h3 className="about-subtitle">
            <span className="title-highlight">All</span> over my details find here...
          </h3>
        </div>

        <div className="about-content">
          {/* Left Side - Navigation */}
          <div className="about-left">
            <nav className="about-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`about-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  <span className="nav-arrow">↗</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Side - Content */}
          <div className="about-right">
            <div className="about-content-wrapper">
              {activeTab === 'about' && (
                <div className="about-tab-content">
                  <h2 className="content-title">{content.about.title}</h2>
                  <p className="content-description">{content.about.description}</p>
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="about-tab-content">
                  <h2 className="content-title">{content.experience.title}</h2>
                  <div className="content-list">
                    {content.experience.items.map((item, index) => (
                      <div key={index} className="content-item">
                        <div className="item-period">{item.period}</div>
                        <h3 className="item-title">{item.role}</h3>
                        <div className="item-company">{item.company}</div>
                        <p className="item-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'education' && (
                <div className="about-tab-content">
                  <h2 className="content-title">{content.education.title}</h2>
                  <div className="content-list">
                    {content.education.items.map((item, index) => (
                      <div key={index} className="content-item">
                        <div className="item-period">{item.period}</div>
                        <h3 className="item-title">{item.degree}</h3>
                        <div className="item-company">{item.institution}</div>
                        <p className="item-description">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="about-tab-content">
                  <h2 className="content-title">{content.skills.title}</h2>
                  <div className="skills-list">
                    {content.skills.items.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
