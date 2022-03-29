import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import ContactPage from '../../pages/ContactPage';

describe('ContactPage page tests', () => {
  it('Tests if the ContactPage is rendering', () => {
    render(<ContactPage />);
    const contactPageH2 = screen.getByRole('heading', { level: 2 });
    expect(contactPageH2).toBeInTheDocument();
  });
});
