import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });
  
  const dotX = useSpring(0, { damping: 40, stiffness: 800 });
  const dotY = useSpring(0, { damping: 40, stiffness: 800 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        (target instanceof HTMLElement || target instanceof SVGElement) && (
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('.tab-btn') ||
          target.closest('.social-btn') ||
          target.closest('.project-card') ||
          target.closest('.project-btn')
        )
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          left: dotX,
          top: dotY,
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          width: '8px',
          height: '8px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
        }}
      />
      <motion.div
        className="cursor-outline"
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? '#ff9a3c' : '#a0a0a0',
        }}
        style={{
          left: cursorX,
          top: cursorY,
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          width: '40px',
          height: '40px',
          border: '2px solid',
          borderRadius: '50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
