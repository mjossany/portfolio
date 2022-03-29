import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils/testing-library-utils';
import HamburguerIcon from '../../components/HamburguerIcon/HamburguerIcon';

describe('HamburguerIcon component tests', () => {
  it('Tests if HamburguerIcon is rendered', () => {
    render(<HamburguerIcon />);
    const hamburguerIconButton = screen.getByTestId('hamburguer-button');
    expect(hamburguerIconButton).toBeInTheDocument();
    userEvent.click(hamburguerIconButton);
  });
});
