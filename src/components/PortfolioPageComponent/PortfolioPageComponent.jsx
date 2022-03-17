import React, { useState } from 'react';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import FilterButtons from '../FilterButtons/FilterButtons';
import Title from '../Title';
import portfolio from '../../data/portfolio';
import PortfolioProjects from '../PortfolioProjects/PortfolioProjects';

const allCategories = ['All', ...new Set(portfolio.map((item) => item.category))];

function PortfolioPageComponent() {
  const [projects, setProjects] = useState(portfolio);
  const [categories] = useState(allCategories);

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
        <FilterButtons filterByCategory={filter} buttonsCategories={categories} />
        <PortfolioProjects projectsToDisplay={projects} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPageComponent;
