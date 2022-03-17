import { string } from 'prop-types';
import React from 'react';
import { TitleContainer, TitleH2, TitleSpan } from './Styled';

function Title({ title, span }) {
  return (
    <TitleContainer>
      <TitleH2>
        {title}
        <TitleSpan>
          {span}
        </TitleSpan>
      </TitleH2>
    </TitleContainer>
  );
}

Title.propTypes = {
  title: string.isRequired,
  span: string.isRequired,
};

export default Title;
