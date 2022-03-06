import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function ProgressBar({ title, width, text }) {
  return (
    <ProgressBarStyled>
      <h6>{title}</h6>
      <div className="progress-bar">
        <p>{text}</p>
        <div className="progress">
          <span style={{ width }} />
        </div>
      </div>
    </ProgressBarStyled>
  );
}

const ProgressBarStyled = styled.div``;

ProgressBar.propTypes = {
  title: string.isRequired,
  width: string.isRequired,
  text: string.isRequired,
};

export default ProgressBar;
