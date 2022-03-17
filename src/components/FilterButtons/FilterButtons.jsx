import React from 'react';
import { arrayOf, func } from 'prop-types';
import { Button, ButtonsContainer } from './Styled';

function FilterButtons({ filterByCategory, buttonsCategories }) {
  return (
    <ButtonsContainer>
      {
        buttonsCategories.map((button) => (
          <Button type="button" key={button} onClick={() => filterByCategory(button)}>
            {button}
          </Button>
        ))
      }
    </ButtonsContainer>
  );
}

FilterButtons.propTypes = {
  filterByCategory: func.isRequired,
  buttonsCategories: arrayOf().isRequired,
};

export default FilterButtons;
