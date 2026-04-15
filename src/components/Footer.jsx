import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const [time, setTime] = useState('');
  const location = useLocation();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.footer 
      className="site-footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >

      <span className="footer-credit">Made by Tharagaraman Balaji | © 2025</span>
      <span className="footer-time">{time}</span>
    </motion.footer>
  );
};

export default Footer;
