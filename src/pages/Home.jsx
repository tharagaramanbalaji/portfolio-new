import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts';

// To change individual project details (title, description, or image):
// Simply edit the 'featuredProjects' array below.
import sqlChatImg from '../assets/sql_chat.png';
import gitscanImg from '../assets/gitscan_hero.png';
import trackmintImg from '../assets/trackmint.png';

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

  const featuredProjects = [
    {
      title: 'SQL Chat',
      description: 'An AI-driven interface that enables users to query databases using natural language and real-time SQL generation.',
      image: sqlChatImg,
      link: 'https://chatwithdb.vercel.app'
    },
    {
      title: 'GitScan',
      description: 'One scan, total developer breakdown. Visualize skills, patterns, and performance instantly.',
      image: gitscanImg,
      link: 'https://scanyourgitprofile.vercel.app'
    },
    {
      title: 'TrackMint',
      description: 'A comprehensive finance dashboard for real-time visual monitoring of assets, activity, and spending breakdown.',
      image: trackmintImg,
      link: 'https://trackmintdashboard.vercel.app'
    }
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
          Developer integrating AI, ML, and full stack to make real impact.
          Working my way towards the <span className="highlight">Top 1%</span>. Currently open to internships
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

        <motion.div className="projects-grid-section" variants={itemVariants}>
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="featured-project-card">
                <div className="project-thumb-wrapper">
                  <img src={project.image} alt={project.title} className="project-thumbnail" />
                </div>
                <div className="project-card-footer">
                  <h3>{project.title} ↗</h3>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
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
