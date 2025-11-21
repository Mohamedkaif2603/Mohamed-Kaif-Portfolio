import React, { useEffect, useRef } from 'react'
import { FaExternalLinkAlt, FaGithub, FaEdit, FaTrash } from 'react-icons/fa'
import './ProjectCard.css'

const ProjectCard = ({ project, onEdit, onDelete, index }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  return (
    <div ref={cardRef} className="project-card fade-in">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        {onEdit && (
          <div className="project-actions">
            <button 
              className="action-btn edit-btn"
              onClick={() => onEdit(project)}
              aria-label="Edit project"
            >
              <FaEdit />
            </button>
            <button 
              className="action-btn delete-btn"
              onClick={() => onDelete(project.id)}
              aria-label="Delete project"
            >
              <FaTrash />
            </button>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt />
              Live Link
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
