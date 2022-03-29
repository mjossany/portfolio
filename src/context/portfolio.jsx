import React, { createContext } from 'react';
import { node } from 'prop-types';
import hook from '../hooks/usePortfolio';

export const PortfolioContext = createContext({});
function PortfolioProvider({ children }) {
  const context = hook.usePortfolio();
  return (
    <PortfolioContext.Provider
      value={context}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: node.isRequired,
};

export default PortfolioProvider;
