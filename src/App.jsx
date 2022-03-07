import React, { useEffect, useState } from 'react';
import LightModeSwitch from './components/LightModeSwitch';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import HamburguerIcon from './components/HamburguerIcon';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);

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

  return (
    <div>
      <Sidebar />
      <HamburguerIcon />
      <LightModeSwitch changeTheme={themeToggler} switchStatus={checked} />
      <MainContent />
    </div>
  );
}

export default App;
