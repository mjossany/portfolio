import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PortfolioProvider from '../context/portfolio';

function AllTheProviders({ children }) {
  const history = createMemoryHistory();
  return (
    <PortfolioProvider>
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    </PortfolioProvider>
  );
}

const renderWithContext = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
