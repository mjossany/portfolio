import React, { useState } from 'react';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import portfolio from '../data/portfolio';
import Button from '../components/Button';
import PortfolioProjects from '../components/PortfolioProjects/PortfolioProjects';

const allButtons = ['All', ...new Set(portfolio.map((item) => item.category))];

function PortfolioPage() {
  const [projects, setProjects] = useState(portfolio);
  const [button] = useState(allButtons);

  const filter = (btn) => {
    if (btn === 'All') {
      setProjects(portfolio);
      return;
    }
    const filteredData = portfolio.filter((item) => item.category === btn);
    setProjects(filteredData);
  };

  return (
    <MainLayout>
      <Title title="Portfolio" span="Portfolio" />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <PortfolioProjects projectsToDisplay={projects} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
