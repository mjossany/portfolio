import React, { createContext } from 'react';
import { node } from 'prop-types';
import usePortfolio from '../hooks/usePortfolio';

export const PortfolioContext = createContext({});

function PortfolioProvider({ children }) {
  const {
    theme,
    checked,
    navToggle,
    setNavToggle,
    themeToggler,
  } = usePortfolio();
  return (
    <PortfolioContext.Provider
      value={{
        theme,
        checked,
        navToggle,
        setNavToggle,
        themeToggler,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

PortfolioProvider.propTypes = {
  children: node.isRequired,
};

export default PortfolioProvider;
