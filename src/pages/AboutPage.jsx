import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import PageMainLayout from '../styles/Layouts';

function AboutPage() {
  return (
    <PageMainLayout>
      <AboutStyled>
        <Title title="About Me" span="About me" />
      </AboutStyled>
    </PageMainLayout>
  );
}

const AboutStyled = styled.section`

`;

export default AboutPage;
