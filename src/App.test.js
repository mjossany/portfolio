import React from 'react';
import { render, screen } from './test-utils/testing-library-utils';
import App from './App';

describe('App tests', () => {
  it('Tests if App is rendered', () => {
    render(<App />);
    const homepageH1 = screen.getByRole('heading', { level: 1 });
    expect(homepageH1).toBeInTheDocument();
    expect(homepageH1).toHaveTextContent(/^Hi, I'm Jossany$/);
  });
});
