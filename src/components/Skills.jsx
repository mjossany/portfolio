import React from 'react';
import styled from 'styled-components';
import { InnerLayout, MainLayout } from '../styles/Layouts';
import Title from './Title';

function Skills() {
  return (
    <SkillsStyled>
      <MainLayout>
        <Title title="Resume" span="Resume" />
        <InnerLayout>
          Skills
        </InnerLayout>
      </MainLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section``;

export default Skills;
