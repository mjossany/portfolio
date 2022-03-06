import React, { useState } from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import portfolio from '../data/portfolio';
import Menu from '../components/Menu';
import Button from '../components/Button';

function PortfolioPage() {
  const [menuItem, setMenuItems] = useState(portfolio);
  const [button] = useState('');

  const filter = (btn) => {
    const filteredData = portfolio.filter((item) => item.category === btn);
    setMenuItems(filteredData);
  };

  return (
    <MainLayout>
      <Title title="Portfolio" span="Portfolio" />
      <InnerLayout>
        <Button filter={filter} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
