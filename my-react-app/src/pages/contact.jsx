import React, { useState } from 'react';
import './contact.css'; // Importing the CSS file
import NavBar from '../components/navBar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = "atayeh64@gmail.com";
    // Constructing the body with line breaks
    const body = `Name: ${formData.name}%0D%0A%0D%0AMessage: ${formData.message}`;
    
    // Redirecting to mailto link
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${body}`;
  };

  return (
    <>

    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>
        <div className='media-container'>
          <a href="https://www.linkedin.com/in/ameer-tayeh" class="linkedin-btn" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="form-input"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="form-input"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="form-textarea"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Open Email Client
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactPage;