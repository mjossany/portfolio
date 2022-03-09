import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { PortfolioContext } from '../context/portfolio';

function HamburguerIcon() {
  const {
    navToggle,
    setNavToggle,
  } = useContext(PortfolioContext);
  return (
    <HamburgueMenuStyled>
      <IconButton onClick={() => setNavToggle(!navToggle)}>
        <MenuIcon className="hamburguer-menu" />
      </IconButton>
    </HamburgueMenuStyled>
  );
}

const HamburgueMenuStyled = styled.div`
  display: none;
  svg {
    color: var(--primary-color);
    font-size: 3rem;
  }
  @media screen and (max-width: 1200px) {
    display: block;
    position: fixed;
    right: 1.7%;
    top: 2%;
    z-index: 15;
  }
`;

export default HamburguerIcon;
