import React, { useContext } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ResumePage from '../pages/ResumePage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import BlogsPage from '../pages/BlogsPage';
import { PortfolioContext } from '../context/portfolio';

function MainContent() {
  const {
    navToggle,
  } = useContext(PortfolioContext);
  return (
    <MainContentStyled navToggleStatus={navToggle}>
      <div className="lines">
        <div className="line-1" />
        <div className="line-2" />
        <div className="line-3" />
        <div className="line-4" />
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/resume" element={<ResumePage />} />
        <Route exact path="/portfolio" element={<PortfolioPage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default MainContent;
