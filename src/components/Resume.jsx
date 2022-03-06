import React from 'react';
import styled from 'styled-components';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import SchoolIcon from '@mui/icons-material/School';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import Title from './Title';
import ResumeItem from './ResumeItem';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  // const education = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <SmallTitle icon={briefcase} title="Working Experience" />
        <div className="resume-content">
          <ResumeItem
            year="2012 - 2017"
            title="Business Administration"
            subTitle="Fluminense Federal University"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur."
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  
`;

export default Resume;
