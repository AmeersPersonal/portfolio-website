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
    <NavBar />
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        
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