import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function ReviewItem({ text }) {
  return (
    <ReviewItemStyled>
      <p>{ text }</p>
    </ReviewItemStyled>
  );
}

const ReviewItemStyled = styled.div`
  padding: 2rem 1rem;
  border-left: 6px solid var(--border-color);
  background-color: var(--background-dark-gray);
  position: relative;
  width: 50%;
  &:not(:first-child) {
    margin-left: 2rem;
  }
  &::after {
    content: "";
    position: absolute;
    left: 2rem;
    top: 100%;
    border-width: 1rem;
    bottom: 0;
    border-style: solid;
    border-color: var(--background-dark-gray) transparent transparent var(--background-dark-gray);
  }
  p {
    padding: 1rem 0;
  }
`;

ReviewItem.propTypes = {
  text: string.isRequired,
};

export default ReviewItem;
