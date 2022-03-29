import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import PortfolioProvider from '../context/portfolio';

const history = createMemoryHistory();

function AllTheProviders({ children }) {
  return (
    <PortfolioProvider>
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    </PortfolioProvider>
  );
}

const renderWithContext = (ui, options) => ({ ...render(ui, { wrapper: AllTheProviders, ...options }), history});

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
