import React from 'react';
import LightModeSwitch from './components/LightModeSwitch';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import HamburguerIcon from './components/HamburguerIcon/HamburguerIcon';

function App() {
  return (
    <div>
      <Sidebar />
      <HamburguerIcon />
      <LightModeSwitch />
      <MainContent />
    </div>
  );
}

export default App;
