import { arrayOf, func } from 'prop-types';
import React from 'react';

function Button({ filter, button }) {
  return (
    <div>
      {
        button.map((btn) => (
          <button type="button" key={btn} onClick={() => filter(btn)}>
            {btn}
          </button>
        ))
      }
    </div>
  );
}

Button.propTypes = {
  filter: func.isRequired,
  button: arrayOf().isRequired,
};

export default Button;
