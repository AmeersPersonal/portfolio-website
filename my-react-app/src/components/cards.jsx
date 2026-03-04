import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const TestimonyCard = ({ data }) => {
  return (
    <motion.div 
      className="testimony-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {data.linkedin && (
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-corner-link">
          <FaLinkedin />
        </a>
      )}
      
      <p className="testimony-quote">"{data.quote}"</p>
      
      <div className="testimony-author">
        <img src={data.image} alt={data.name} className="author-img" />
        <div className="author-info">
          <h4>{data.name}</h4>
          <span>{data.role} @ {data.company}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonyCard;