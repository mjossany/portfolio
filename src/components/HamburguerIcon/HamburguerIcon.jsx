import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import HamburguerIconContainer from './Styled';
import { PortfolioContext } from '../../context/portfolio';

function HamburguerIcon() {
  const {
    navToggle,
    setNavToggle,
  } = useContext(PortfolioContext);
  return (
    <HamburguerIconContainer data-testid="hamburguer-button">
      <IconButton onClick={() => setNavToggle(!navToggle)}>
        <MenuIcon className="hamburguer-menu" />
      </IconButton>
    </HamburguerIconContainer>
  );
}

export default HamburguerIcon;
