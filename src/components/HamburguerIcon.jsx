import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { IconButton } from '@mui/material';

function HamburguerIcon() {
  return (
    <HamburgueMenuStyled>
      <IconButton>
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
    left: 3%;
    top: 2.5%;
    z-index: 15;
  }
`;

export default HamburguerIcon;
