import React, { useContext } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Switch } from '@mui/material';
import { LightModeSwitchContainer, RightContent } from './Styled';
import { PortfolioContext } from '../../context/portfolio';

function LightModeSwitch() {
  const {
    lightModeChecked,
    themeToggler,
  } = useContext(PortfolioContext);
  return (
    <LightModeSwitchContainer>
      <Brightness4Icon />
      <RightContent>
        <Switch
          value=""
          checked={lightModeChecked}
          onClick={themeToggler}
          inputProps={{ 'arial-label': '' }}
          size="medium"
        />
      </RightContent>
    </LightModeSwitchContainer>
  );
}

export default LightModeSwitch;
