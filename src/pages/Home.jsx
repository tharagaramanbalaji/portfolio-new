import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts';

const Home = () => {
  useKeyboardShortcuts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="hero-section">
      <div className="nav-shortcuts fade-in delay-4">
        <span>[1] Home</span>
        <span>[2] Projects</span>
        <span>[3] Experience</span>
      </div>

      <motion.div 
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="name" variants={itemVariants}>
          Tharagaraman Balaji.
        </motion.h1>
        
        <motion.p className="bio" variants={itemVariants}>
          Developer integrating AI , ML and full stack to make real impact.<br />
          Working my way towards the <span className="highlight">Top 1%</span>. Currently open to internships<br />
          and actively seeking opportunities.
        </motion.p>

        <motion.div className="skills-section" variants={itemVariants}>
          <h2>Top Skills</h2>
          <p className="skills-list">Python & Libraries • LLMs • AI/ML • End to End Thinking</p>
        </motion.div>

        <motion.div className="social-buttons" variants={itemVariants}>
          <a href="https://github.com/tharagaramanbalaji" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/tharagaraman-balaji" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/tharagaraman" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X (Twitter)">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Home;
