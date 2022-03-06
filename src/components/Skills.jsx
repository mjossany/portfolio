import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ProgressBar from './ProgressBar';
import Title from './Title';

function Skills() {
  return (
    <SkillsStyled>
      <Title title="My Skills" span="My Skills" />
      <InnerLayout>
        <div className="skills">
          <ProgressBar
            title="HTML5"
            width="50%"
            text="50%"
          />
          <ProgressBar
            title="CSS3"
            width="50%"
            text="50%"
          />
          <ProgressBar
            title="JAVASCRIPT"
            width="50%"
            text="50%"
          />
          <ProgressBar
            title="REACT JS"
            width="50%"
            text="50%"
          />
          <ProgressBar
            title="MYSQL"
            width="50%"
            text="50%"
          />
          <ProgressBar
            title="PYTHON"
            width="50%"
            text="50%"
          />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`;

export default Skills;
