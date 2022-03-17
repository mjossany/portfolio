import React, { useContext } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Switch } from '@mui/material';
import { LeftContent, LightModeSwitchContainer, RightContent } from './Styled';
import { PortfolioContext } from '../../context/portfolio';

function LightModeSwitch() {
  const {
    lightModeChecked,
    themeToggler,
  } = useContext(PortfolioContext);
  return (
    <LightModeSwitchContainer>
      <LeftContent>
        <Brightness4Icon />
      </LeftContent>
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
