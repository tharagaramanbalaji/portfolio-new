import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts';

const Home = () => {
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

  const skills = [
    'Python & Libraries',
    'LLMs',
    'Basics of AI/ML',
    'Node.js',
    'Express.js',
    'Javascript',
    'React',
    'UI/UX'
  ];

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

        <Navbar />
        
        <motion.p className="bio" variants={itemVariants}>
          Developer integrating AI , ML and full stack to make real impact.<br />
          Working my way towards the <span className="highlight">Top 1%</span>. Currently open to internships<br />
          and actively seeking opportunities.
        </motion.p>

        <motion.div className="skills-section" variants={itemVariants}>
          <h2>Top Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <motion.span 
                key={index} 
                className="skill-tag"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
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

        <motion.div className="experience-section" variants={itemVariants}>
          <h2 className="section-title">Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className={`experience-card ${exp.highlighted ? 'highlighted' : ''}`}>
                <span className="experience-date">{exp.date}</span>
                <div className="experience-details">
                  <h3>{exp.company}</h3>
                  <p>{exp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Home;
