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

const ProgressBarStyled = styled.div`
  .progress-bar {
    display: flex;
    align-items: center;
    p {
      padding-right: 1.1rem;
    }
    .progress {
      position: relative;
      width: 100%;
      height: .4rem;
      background-color: var(--border-color);
      span {
        background-color: var(--primary-color);
        position: absolute;
        height: 100%;
      }
    }
  }

`;

ProgressBar.propTypes = {
  title: string.isRequired,
  width: string.isRequired,
  text: string.isRequired,
};

export default ProgressBar;
