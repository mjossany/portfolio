import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent';

describe('HomePageComponent component tests', () => {
  it('Tests if the HomePageComponent is rendering', () => {
    render(<HomePageComponent />);
    const homepageH1 = screen.getByRole('heading', { level: 1 });
    expect(homepageH1).toBeInTheDocument();
    expect(homepageH1).toHaveTextContent(/^Hi, I'm Jossany$/);
  });
});
