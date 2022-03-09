import { useEffect, useState } from 'react';

const usePortfolio = () => {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    } else {
      setTheme('light-theme');
      setChecked(true);
    }
  };
  return {
    theme,
    checked,
    navToggle,
    setNavToggle,
    themeToggler,
  };
};

export default usePortfolio;
