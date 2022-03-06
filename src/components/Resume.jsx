import React from 'react';
import styled from 'styled-components';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import Title from './Title';
import ResumeItem from './ResumeItem';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const education = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title="Resume" span="Resume" />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title="Working Experience" />
        </div>
        <div className="resume-content">
          <ResumeItem
            year="2012 - 2017"
            title="Business Administration"
            subTitle="Fluminense Federal University"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur."
          />
          <ResumeItem
            year="2012 - 2017"
            title="Business Administration"
            subTitle="Fluminense Federal University"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur."
          />
          <div className="u-margin-bottom">
            <ResumeItem
              year="2012 - 2017"
              title="Business Administration"
              subTitle="Fluminense Federal University"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur."
            />
          </div>
        </div>
        <div className="small-title">
          <SmallTitle icon={education} title="Education Path" />
        </div>
        <div className="resume-content">
          <ResumeItem
            year="2012 - 2017"
            title="Business Administration"
            subTitle="Fluminense Federal University"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur."
          />
          <ResumeItem
            year="2012 - 2017"
            title="Business Administration"
            subTitle="Fluminense Federal University"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur."
          />
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
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
