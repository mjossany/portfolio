import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils/testing-library-utils';
import LightModeSwitch from '../../components/LightModeSwitch/LightModeSwitch';
// import usePortfolio from '../../hooks/usePortfolio';

describe('LightModeSwitch component tests', () => {
  it('Tests if the LightModeSwitch is rendered', () => {
    render(<LightModeSwitch />);
    const componentSwitch = screen.getByRole('checkbox');
    expect(componentSwitch).toBeInTheDocument();
    userEvent.click(componentSwitch);
    userEvent.click(componentSwitch);
  });
});
