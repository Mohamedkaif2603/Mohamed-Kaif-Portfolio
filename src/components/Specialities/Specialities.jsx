import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import ProjectForm from '../CRUD/ProjectForm'
import { getFromLocalStorage, saveToLocalStorage, STORAGE_KEYS } from '../../utils/localStorage'
import { initScrollAnimations } from '../../utils/animations'
import './Specialities.css'

const Specialities = () => {
  const [projects, setProjects] = useState([])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [isAdminMode, setIsAdminMode] = useState(false)

  useEffect(() => {
    loadProjects()
    // Toggle admin mode with Ctrl+Shift+A
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsAdminMode(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    
    // Initialize scroll animations
    const timer = setTimeout(() => {
      initScrollAnimations()
    }, 100)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
    }
  }, [])

  const loadProjects = () => {
    const savedProjects = getFromLocalStorage(STORAGE_KEYS.PROJECTS)
    if (savedProjects.length === 0) {
      // Default projects
      const defaultProjects = [
        {
          id: 1,
          title: 'E-Commerce Platform for Furniture Store',
          description: 'A modern e-commerce platform with seamless user experience and intuitive design.',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          image: '/images/prjimg1.png',
          liveUrl: 'https://mohamedkaif2603.github.io/Furniture-E-commerce-Website/',
          githubUrl: 'https://github.com/Mohamedkaif2603/Furniture-E-commerce-Website'
        },
        {
          id: 2,
          title: 'Hotel-Vegiee--Billing-System',
          description: 'A smart restaurant billing system with item management and instant bill printing for fast and accurate order processing.',
          technologies: ['HTML', 'CSS', 'React', 'LocalStorage'],
          image: '/images/prjimg2.png',
          liveUrl: 'https://github.com/Mohamedkaif2603',
          githubUrl: 'https://github.com/Mohamedkaif2603/Hotel-Vegiee---Billing-System'
        },
        {
          id: 3,
          title: ' Blood Bridge - Blood Donation Management System',
          description: 'A MERN-based blood donation system with donor management, request handling, real-time blood stock updates, and secure login.',
          technologies: ['HTML', 'CSS', 'React', 'MERN Stack'],
          image: '/images/prjimg3.png',
          liveUrl: 'https://github.com/Mohamedkaif2603',
          githubUrl: 'https://github.com'
        },
        {
          id: 4,
          title: 'Portfolio',
          description: 'A modern React-powered portfolio with a clean UI, interactive animations, dynamic project management, and fully responsive design to showcase my technical skills and professional journey.',
          technologies: ['HTML', 'CSS', 'React', 'Vite'],
          image: '/images/prjimg4.png',
          liveUrl: 'https://github.com/Mohamedkaif2603',
          githubUrl: 'https://github.com'
        },
      ]
      saveToLocalStorage(STORAGE_KEYS.PROJECTS, defaultProjects)
      setProjects(defaultProjects)
    } else {
      setProjects(savedProjects)
    }
  }

  const handleAddProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now()
    }
    const updatedProjects = [...projects, newProject]
    saveToLocalStorage(STORAGE_KEYS.PROJECTS, updatedProjects)
    setProjects(updatedProjects)
    setIsFormOpen(false)
  }

  const handleEditProject = (project) => {
    setEditingProject(project)
    setIsFormOpen(true)
  }

  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map(p =>
      p.id === updatedProject.id ? updatedProject : p
    )
    saveToLocalStorage(STORAGE_KEYS.PROJECTS, updatedProjects)
    setProjects(updatedProjects)
    setIsFormOpen(false)
    setEditingProject(null)
  }

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== id)
      saveToLocalStorage(STORAGE_KEYS.PROJECTS, updatedProjects)
      setProjects(updatedProjects)
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Mohamedkaif_Resume_MERN (2).pdf'
    link.download = 'Mohamedkaif_Resume_MERN (2).pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingProject(null)
  }

  return (
    <section id="specialities" className="specialities section">
      <div className="specialities-container">
        <div className="specialities-header">
          <h2 className="specialities-title">My Specialities</h2>
          <p className="specialities-subtitle">Showcasing my best work and projects</p>
        </div>

        <div className="specialities-actions">
          <button 
            className="btn-download"
            onClick={handleDownloadResume}
          >
            <span>📥</span>
            Download Resume
          </button>
          {isAdminMode && (
            <button 
              className="btn-add"
              onClick={() => setIsFormOpen(true)}
            >
              + Add Project
            </button>
          )}
          {isAdminMode && (
            <button 
              className="btn-admin-exit"
              onClick={() => setIsAdminMode(false)}
            >
              Exit Admin Mode
            </button>
          )}
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={isAdminMode ? handleEditProject : null}
              onDelete={isAdminMode ? handleDeleteProject : null}
              index={index}
            />
          ))}
        </div>

        {isFormOpen && (
          <ProjectForm
            project={editingProject}
            onSave={editingProject ? handleUpdateProject : handleAddProject}
            onClose={handleCloseForm}
          />
        )}
      </div>
    </section>
  )
}

export default Specialities
