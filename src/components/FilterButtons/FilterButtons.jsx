import React from 'react';
import { arrayOf, func } from 'prop-types';
import { Button, ButtonsContainer } from './Styled';

function FilterButtons({ filter, buttonsCategories }) {
  return (
    <ButtonsContainer>
      {
        buttonsCategories.map((button) => (
          <Button type="button" key={button} onClick={() => filter(button)}>
            {button}
          </Button>
        ))
      }
    </ButtonsContainer>
  );
}

FilterButtons.propTypes = {
  filter: func.isRequired,
  buttonsCategories: arrayOf().isRequired,
};

export default FilterButtons;
