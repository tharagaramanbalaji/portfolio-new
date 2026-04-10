import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Blogs', path: 'https://devodyssesy.hashnode.dev', external: true },
    { name: 'Contact', path: 'mailto:tharagaraman2004@gmail.com', external: true },
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.external ? (
              <a 
                href={link.path} 
                target={link.name === 'Blogs' ? "_blank" : "_self"} 
                rel={link.name === 'Blogs' ? "noopener noreferrer" : ""}
              >
                {link.name}
              </a>
            ) : (
              <Link to={link.path} style={{ color: location.pathname === link.path ? '#ffffff' : '' }}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
