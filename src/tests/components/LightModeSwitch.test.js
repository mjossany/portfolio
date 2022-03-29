import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils/testing-library-utils';
import LightModeSwitch from '../../components/LightModeSwitch/LightModeSwitch';
import hook from '../../hooks/usePortfolio';

describe('LightModeSwitch component tests', () => {
  const context = { themeToggler: jest.fn() };

  it('Tests if the LightModeSwitch is rendered', () => {
    render(<LightModeSwitch />);
    const componentSwitch = screen.getByRole('checkbox');
    expect(componentSwitch).toBeInTheDocument();
    userEvent.click(componentSwitch);
    userEvent.click(componentSwitch);
  });

  it('Tests if the switch change the app theme color', () => {
    hook.usePortfolio = jest.fn().mockReturnValue(context);
    render(<LightModeSwitch />);
    const componentSwitch = screen.getByRole('checkbox');
    expect(componentSwitch).toBeInTheDocument();
    expect(context.themeToggler).toBeCalledTimes(0);
    userEvent.click(componentSwitch);
    expect(context.themeToggler).toBeCalledTimes(1);
  });
});
