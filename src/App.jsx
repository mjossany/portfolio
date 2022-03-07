import React, { useEffect, useState } from 'react';
import LightModeSwitch from './components/LightModeSwitch';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  const [theme, setTheme] = useState('dark-theme');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <Sidebar />
      <LightModeSwitch changeTheme={setTheme} />
      <MainContent />
    </div>
  );
}

export default App;
