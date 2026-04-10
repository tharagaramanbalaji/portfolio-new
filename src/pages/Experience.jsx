import React from 'react';
import { motion } from 'framer-motion';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts';

const Experience = () => {
  useKeyboardShortcuts();

  const experiences = [
    {
      date: 'Jun 2025 - Jul 2025',
      company: 'TechOrbit IT & DT, UAE',
      role: 'AI Software Developer',
      highlighted: true,
    },
    {
      date: 'Oct 2024',
      company: 'Hacktoberfest',
      role: 'Open Source Contributor',
    },
    {
      date: 'Jun 2024 - Jul 2024',
      company: 'Resh and Thosh Technologies',
      role: 'Python Developer Intern',
    },
    {
      date: 'Present',
      company: 'Open Source Club - BSACU',
      role: 'Technical Director',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="experience-page-section">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Experience.
      </motion.h1>

      <motion.div 
        className="experience-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={`experience-card ${exp.highlighted ? 'highlighted' : ''}`}
            variants={itemVariants}
          >
            <span className="experience-date">{exp.date}</span>
            <div className="experience-details">
              <h3>{exp.company}</h3>
              <p>{exp.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Experience;
