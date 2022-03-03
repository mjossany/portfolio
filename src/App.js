import { Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/resume" element={<ResumePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
