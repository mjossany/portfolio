import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import PortfolioProvider from './context/portfolio';

ReactDOM.render(
  <React.StrictMode>
    <PortfolioProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </PortfolioProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
