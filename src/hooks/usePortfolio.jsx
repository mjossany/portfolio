import { useEffect, useState } from 'react';

const usePortfolio = () => {
  const [theme, setTheme] = useState('light-theme');
  const [lightModeChecked, setLightModeChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setLightModeChecked(true);
    } else {
      setTheme('light-theme');
      setLightModeChecked(false);
    }
  };
  return {
    theme,
    lightModeChecked,
    navToggle,
    setNavToggle,
    themeToggler,
  };
};

export default usePortfolio;
