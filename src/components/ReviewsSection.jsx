import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';
import Title from './Title';

function ReviewsSection() {
  return (
    <ReviewsSectionStyled>
      <Title title="Reviews" span="Reviews" />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab soluta vel neque cum tenetur architecto voluptates error ea totam." />
          <ReviewItem text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ab soluta vel neque cum tenetur architecto voluptates error ea totam." />
        </div>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
}

const ReviewsSectionStyled = styled.section`
  .reviews {
    display: flex;
  }
`;

export default ReviewsSection;
