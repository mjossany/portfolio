import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import Title from './Title';

function Resume() {
  return (
    <ResumeStyled>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <SmallTitle icon={briefcase} title="Working Experience" />
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  
`;

export default Resume;
