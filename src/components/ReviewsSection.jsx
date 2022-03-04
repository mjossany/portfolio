import React from 'react';
import styled from 'styled-components';
import Title from './Title';

function ReviewsSection() {
  return (
    <ReviewsSectionStyled>
      <Title title="Reviews" span="Reviews" />
    </ReviewsSectionStyled>
  );
}

const ReviewsSectionStyled = styled.section`
`;

export default ReviewsSection;
