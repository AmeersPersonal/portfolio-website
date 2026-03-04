import React from 'react';
import TestimonyCard from '../components/cards';
import { testimonyData } from './testimonyData';
import './testimonys.css';

const TestimonyPage = () => {
  return (
    <section className="testimony-section">
      <h2 className="section-title">What People Say</h2>
      <div className="testimony-grid">
        {testimonyData.map((item) => (
          <TestimonyCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default TestimonyPage;