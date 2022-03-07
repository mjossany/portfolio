import React from 'react';
import LightModeSwitch from './components/LightModeSwitch';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <LightModeSwitch />
      <MainContent />
    </div>
  );
}

export default App;
