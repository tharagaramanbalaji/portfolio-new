import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div>
        <h3>{project.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
      </div>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn" aria-label="Demo">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
