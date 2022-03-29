import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import LightModeSwitch from '../../components/LightModeSwitch/LightModeSwitch';

describe('LightModeSwitch component tests', () => {
  it('Tests if the LightModeSwitch is rendered', () => {
    render(<LightModeSwitch />);
    const componentSwitch = screen.getByRole('checkbox');
    expect(componentSwitch).toBeInTheDocument();
  });
});
