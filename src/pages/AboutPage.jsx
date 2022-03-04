import React from 'react';
import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import Title from '../components/Title';
import PageMainLayout from '../styles/Layouts';

function AboutPage() {
  return (
    <PageMainLayout>
      <AboutStyled>
        <Title title="About Me" span="About me" />
        <ImageSection />
      </AboutStyled>
    </PageMainLayout>
  );
}

const AboutStyled = styled.section`

`;

export default AboutPage;
