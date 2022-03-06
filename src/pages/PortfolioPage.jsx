import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { InnerLayout, MainLayout } from '../styles/Layouts';

function PortfolioPage() {
  
  return (
    <MainLayout>
      <Title title="Portfolio" span="Portfolio" />
      <InnerLayout>
        <PortfolioPageStyled>
          PortfolioPage
        </PortfolioPageStyled>
      </InnerLayout>
    </MainLayout>
  );
}

const PortfolioPageStyled = styled.section`
  
`;

export default PortfolioPage;
