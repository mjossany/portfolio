import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils/testing-library-utils';
import PortfolioPageComponent from '../../components/PortfolioPageComponent/PortfolioPageComponent';
import portfolio from '../../data/portfolio';

describe('PortfolioPageComponent component tests', () => {
  it('Tests if the PortfolioPageComponent is being rendered', () => {
    render(<PortfolioPageComponent />);
    const portfolioPageH2 = screen.getByRole('heading', { level: 2 });
    expect(portfolioPageH2).toBeInTheDocument();
  });

  it('Tests if the filter buttons work properly', () => {
    render(<PortfolioPageComponent />);
    const portfolioPageButtons = screen.getAllByRole('button');
    userEvent.click(portfolioPageButtons[0]);
    expect(portfolio).toHaveLength(1);
    userEvent.click(portfolioPageButtons[1]);
    expect(portfolio).toHaveLength(1);
  });
});
