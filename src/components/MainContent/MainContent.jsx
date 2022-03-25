import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Line, Lines, MainContentContainer } from './Styled';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import ResumePage from '../../pages/ResumePage';
import PortfolioPage from '../../pages/PortfolioPage';
import ContactPage from '../../pages/ContactPage';
import BlogsPage from '../../pages/BlogsPage';
import { PortfolioContext } from '../../context/portfolio';

function MainContent() {
  const {
    navToggle,
    setNavToggle,
  } = useContext(PortfolioContext);
  return (
    <MainContentContainer
      navToggleStatus={navToggle}
      onClick={() => setNavToggle(false)}
    >
      <Lines>
        <Line />
        <Line />
        <Line />
        <Line />
      </Lines>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/resume" element={<ResumePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </MainContentContainer>
  );
}

export default MainContent;
