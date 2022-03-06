import React, { useState } from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import portfolio from '../data/portfolio';
import Menu from '../components/Menu';
import Button from '../components/Button';

const allButtons = ['All', ...new Set(portfolio.map((item) => item.category))];

function PortfolioPage() {
  const [menuItem, setMenuItems] = useState(portfolio);
  const [button] = useState(allButtons);

  const filter = (btn) => {
    if (btn === 'All') {
      setMenuItems(portfolio);
      return;
    }
    const filteredData = portfolio.filter((item) => item.category === btn);
    setMenuItems(filteredData);
  };

  return (
    <MainLayout>
      <Title title="Portfolio" span="Portfolio" />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
