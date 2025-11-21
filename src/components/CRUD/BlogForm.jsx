import React, { useState, useEffect } from 'react'
import './ProjectForm.css' // Reuse the same styles

const BlogForm = ({ blog, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    image: '',
    tags: '',
    publishDate: ''
  })

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        content: blog.content || '',
        excerpt: blog.excerpt || '',
        image: blog.image || '',
        tags: blog.tags ? blog.tags.join(', ') : '',
        publishDate: blog.publishDate || ''
      })
    }
  }, [blog])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.title || !formData.content) {
      alert('Please fill in all required fields')
      return
    }

    const blogData = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
      ...(blog && { id: blog.id })
    }

    onSave(blogData)
  }

  return (
    <div className="form-overlay" onClick={onClose}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2>{blog ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Blog post title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Excerpt</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows="2"
              placeholder="Short description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content *</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="8"
              placeholder="Blog post content"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags (comma-separated)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="design, ui, ux"
            />
          </div>

          <div className="form-group">
            <label htmlFor="publishDate">Publish Date</label>
            <input
              type="date"
              id="publishDate"
              name="publishDate"
              value={formData.publishDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              {blog ? 'Update' : 'Add'} Blog Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogForm
