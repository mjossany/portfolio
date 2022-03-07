import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Switch } from '@mui/material';
import styled from 'styled-components';
import { func } from 'prop-types';

function LightModeSwitch({ changeTheme }) {
  return (
    <LightModeSwitchStyled className="light-dark-mode">
      <div className="left-content">
        <Brightness4Icon />
      </div>
      <div className="right-content">
        <Switch
          value=""
            // checked={}
            // onChange={}
          inputProps={{ 'arial-label': '' }}
          size="medium"
        />
      </div>
    </LightModeSwitchStyled>
  );
}

const LightModeSwitchStyled = styled.div`
  position: fixed;
  right: 0;
  top: 10%;
  background-color: var(--background-light-color-2);
  width: 6.5rem;
  height: 2.5rem;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    color: var(--white-color);
  }
`;

LightModeSwitch.propTypes = {
  changeTheme: func.isRequired,
};

export default LightModeSwitch;
