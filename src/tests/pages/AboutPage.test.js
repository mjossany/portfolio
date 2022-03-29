import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import AboutPage from '../../pages/AboutPage';

describe('AboutPage page tests', () => {
  it('Tests if the About is being rendered', () => {
    render(<AboutPage />);
    const aboutPageH4 = screen.getAllByRole('heading', { level: 4 });
    expect(aboutPageH4[0]).toHaveTextContent(/^I am Jossany Moura$/);
  });
});
