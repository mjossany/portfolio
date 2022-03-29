import React from 'react';
import { render, screen } from '../../test-utils/testing-library-utils';
import PortfolioPage from '../../pages/PortfolioPage';

describe('ContactPage page tests', () => {
  it('Tests if the ContactPage is rendering', () => {
    render(<PortfolioPage />);
    const portfolioPageH2 = screen.getByRole('heading', { level: 2 });
    expect(portfolioPageH2).toBeInTheDocument();
  });
});
