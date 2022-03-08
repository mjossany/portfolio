import { bool } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({ navToggleStatus }) {
  return (
    <SidebarStyled className={`${navToggleStatus ? 'nav-toggle' : ''}`}>
      <Navigation />
    </SidebarStyled>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  navToggleStatus: bool.isRequired,
};

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  opacity: 1;
  z-index: 99;
  transition: all .4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
  }
`;
