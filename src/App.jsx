import React, { useContext } from 'react';
import LightModeSwitch from './components/LightModeSwitch';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import HamburguerIcon from './components/HamburguerIcon';
import { PortfolioContext } from './context/portfolio';

function App() {
  const {
    theme,
  } = useContext(PortfolioContext);
  console.log(theme);
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
