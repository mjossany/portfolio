import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPageComponent from '../../components/AboutPageComponent/AboutPageComponent';

describe('AboutPageComponent component tests', () => {
  it('Tests if the AboutPageComponent is being rendered', () => {
    render(<AboutPageComponent />);
    const aboutPageH4 = screen.getAllByRole('heading', { level: 4 });
    expect(aboutPageH4[0]).toHaveTextContent(/^I am Jossany Moura$/);
  });
});
