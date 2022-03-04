import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Title({ title, span }) {
  return (
    <TitleStyled>
      <h2>
        {title}
        <span>{span}</span>
      </h2>
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: .7rem;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7.4rem;
      height: .33rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 3.5rem;
      height: .33rem;
      background-color: var(--primary-color);
      border-radius: 15px;
      left: 0;
    }
    span{
      font-weight: 500;
      color: rgba(25, 29, 43, .44);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: 30%;
      z-index: -1;
    }
  }
`;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
};

export default Title;