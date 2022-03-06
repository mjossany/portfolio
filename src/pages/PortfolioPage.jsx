import React, { useState } from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import portfolio from '../data/portfolio';
import Menu from '../components/Menu';

function PortfolioPage() {
  const [menuItem] = useState(portfolio);
  return (
    <MainLayout>
      <Title title="Portfolio" span="Portfolio" />
      <InnerLayout>
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
