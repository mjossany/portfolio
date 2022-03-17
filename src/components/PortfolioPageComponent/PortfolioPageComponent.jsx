import React from 'react';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import FilterButtons from '../FilterButtons/FilterButtons';
import Title from '../Title';

function PortfolioPageComponent() {
  return (
    <MainLayout>
      <Title title="Portfolio" span="Portfolio" />
      <InnerLayout>
        <FilterButtons />
        
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPageComponent;
