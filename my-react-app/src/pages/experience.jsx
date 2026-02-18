// ExperiencePage.jsx
import React, { useState } from 'react';
import { 
  experienceData, 
  projectsData, 
  certificationsData, 
  awardsData 
} from './experienceData';
import './Experience.css';
import NavBar from '../components/navBar';

// Reusable Section Component
const ExpandableSection = ({ title, data }) => {
  return (
    <div className="section-block">
      <h2 className="section-title">{title}</h2>
      <div className="experience-list">
        {data.map((item) => (
          <ExpandableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const ExpandableItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`exp-item ${isOpen ? 'open' : ''}`}>
      <div className="exp-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="exp-main-info">
          <h3>{item.title}</h3>
          {/* Display Company, Tech Stack, or Issuer depending on the item type */}
          <div className="exp-company">
            {item.company || item.event || item.issuer || item.techStack}
          </div>
        </div>
        <div className="exp-meta">
          <div>{item.date}</div>
          <div className={`arrow-icon ${isOpen ? 'open' : ''}`}>▼</div>
        </div>
      </div>

      <div className={`exp-content ${isOpen ? 'open' : ''}`}>
        <ul>
          {item.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <>
    <NavBar/>
    <div className="experience-container">
      <ExpandableSection title="Professional Experience" data={experienceData} />
      <ExpandableSection title="Projects" data={projectsData} />
      <ExpandableSection title="Certifications" data={certificationsData} />
      <ExpandableSection title="Awards" data={awardsData} />
    </div>
    </>
  );
};

export default ExperiencePage;