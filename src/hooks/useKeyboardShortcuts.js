import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useKeyboardShortcuts = (projectTabs = [], activeTabIndex = -1, onTabChange = null) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      // Home/Navigation Shortcuts
      if (key === '1') navigate('/');
      if (key === '2') navigate('/projects');
      if (key === '3') navigate('/experience');

      // Project Tab Switching
      if (key === 'p' && projectTabs.length > 0 && onTabChange) {
        const nextIndex = (activeTabIndex + 1) % projectTabs.length;
        onTabChange(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, projectTabs, activeTabIndex, onTabChange]);
};

export default useKeyboardShortcuts;
