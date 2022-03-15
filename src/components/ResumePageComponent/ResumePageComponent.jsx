import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import Title from '../Title';
import {
  LeftContentP,
  Progress,
  ProgressBar,
  ProgressBarInfos,
  ProgressBarInfosP,
  ProgressBarTitle,
  ProgressSpan,
  ResumeContent,
  ResumeItem,
  ResumeItemLeftContent,
  ResumeItemRightContent,
  ResumePageContainer,
  ResumeSection,
  RightContentH5,
  RightContentH6,
  RightContentP,
  Skills,
  SkillsSection,
  SmallTitle,
  SmallTitleContainer,
  SmallTitleH3,
  SmallTitleP,
} from './Styled';

function ResumePageComponent() {
  const briefcase = <BusinessCenterIcon />;
  const education = <SchoolIcon />;
  return (
    <MainLayout>
      <ResumePageContainer>
        <SkillsSection>
          <Title title="My Skills" span="My Skills" />
          <InnerLayout>
            <Skills>
              <ProgressBar>
                <ProgressBarTitle>
                  HTML5
                </ProgressBarTitle>
                <ProgressBarInfos>
                  <ProgressBarInfosP>
                    50%
                  </ProgressBarInfosP>
                  <Progress>
                    <ProgressSpan style={{ width: '50%' }} />
                  </Progress>
                </ProgressBarInfos>
              </ProgressBar>
              <ProgressBar>
                <ProgressBarTitle>
                  CSS3
                </ProgressBarTitle>
                <ProgressBarInfos>
                  <ProgressBarInfosP>
                    50%
                  </ProgressBarInfosP>
                  <Progress>
                    <ProgressSpan style={{ width: '50%' }} />
                  </Progress>
                </ProgressBarInfos>
              </ProgressBar>
              <ProgressBar>
                <ProgressBarTitle>
                  JAVASCRIPT
                </ProgressBarTitle>
                <ProgressBarInfos>
                  <ProgressBarInfosP>
                    50%
                  </ProgressBarInfosP>
                  <Progress>
                    <ProgressSpan style={{ width: '50%' }} />
                  </Progress>
                </ProgressBarInfos>
              </ProgressBar>
              <ProgressBar>
                <ProgressBarTitle>
                  REACT JS
                </ProgressBarTitle>
                <ProgressBarInfos>
                  <ProgressBarInfosP>
                    50%
                  </ProgressBarInfosP>
                  <Progress>
                    <ProgressSpan style={{ width: '50%' }} />
                  </Progress>
                </ProgressBarInfos>
              </ProgressBar>
              <ProgressBar>
                <ProgressBarTitle>
                  MYSQL
                </ProgressBarTitle>
                <ProgressBarInfos>
                  <ProgressBarInfosP>
                    50%
                  </ProgressBarInfosP>
                  <Progress>
                    <ProgressSpan style={{ width: '50%' }} />
                  </Progress>
                </ProgressBarInfos>
              </ProgressBar>
              <ProgressBar>
                <ProgressBarTitle>
                  PYTHON
                </ProgressBarTitle>
                <ProgressBarInfos>
                  <ProgressBarInfosP>
                    50%
                  </ProgressBarInfosP>
                  <Progress>
                    <ProgressSpan style={{ width: '50%' }} />
                  </Progress>
                </ProgressBarInfos>
              </ProgressBar>
              <ProgressBar>
                <ProgressBarTitle>
                  HTML5
                </ProgressBarTitle>
                <ProgressBarInfos>
                  <ProgressBarInfosP>
                    50%
                  </ProgressBarInfosP>
                  <Progress>
                    <ProgressSpan style={{ width: '50%' }} />
                  </Progress>
                </ProgressBarInfos>
              </ProgressBar>
            </Skills>
          </InnerLayout>
        </SkillsSection>
        <ResumeSection>
          <Title title="Resume" span="Resume" />
          <InnerLayout>
            <SmallTitle>
              <SmallTitleContainer>
                <SmallTitleP>
                  {briefcase}
                </SmallTitleP>
                <SmallTitleH3>
                  Working Experience
                </SmallTitleH3>
              </SmallTitleContainer>
            </SmallTitle>
            <ResumeContent>
              <ResumeItem>
                <ResumeItemLeftContent>
                  <LeftContentP>
                    2012 - 2017
                  </LeftContentP>
                </ResumeItemLeftContent>
                <ResumeItemRightContent>
                  <RightContentH5>
                    Business Administration
                  </RightContentH5>
                  <RightContentH6>
                    Fluminense Federal University
                  </RightContentH6>
                  <RightContentP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur.
                  </RightContentP>
                </ResumeItemRightContent>
              </ResumeItem>
              <ResumeItem>
                <ResumeItemLeftContent>
                  <LeftContentP>
                    2012 - 2017
                  </LeftContentP>
                </ResumeItemLeftContent>
                <ResumeItemRightContent>
                  <RightContentH5>
                    Business Administration
                  </RightContentH5>
                  <RightContentH6>
                    Fluminense Federal University
                  </RightContentH6>
                  <RightContentP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur.
                  </RightContentP>
                </ResumeItemRightContent>
              </ResumeItem>
              <ResumeItem>
                <ResumeItemLeftContent>
                  <LeftContentP>
                    2012 - 2017
                  </LeftContentP>
                </ResumeItemLeftContent>
                <ResumeItemRightContent>
                  <RightContentH5>
                    Business Administration
                  </RightContentH5>
                  <RightContentH6>
                    Fluminense Federal University
                  </RightContentH6>
                  <RightContentP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur.
                  </RightContentP>
                </ResumeItemRightContent>
              </ResumeItem>
            </ResumeContent>
            <SmallTitle style={{ padding: '2rem 0' }}>
              <SmallTitleContainer>
                <SmallTitleP>
                  {education}
                </SmallTitleP>
                <SmallTitleH3>
                  Education Path
                </SmallTitleH3>
              </SmallTitleContainer>
            </SmallTitle>
            <ResumeContent>
              <ResumeItem>
                <ResumeItemLeftContent>
                  <LeftContentP>
                    2012 - 2017
                  </LeftContentP>
                </ResumeItemLeftContent>
                <ResumeItemRightContent>
                  <RightContentH5>
                    Business Administration
                  </RightContentH5>
                  <RightContentH6>
                    Fluminense Federal University
                  </RightContentH6>
                  <RightContentP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur.
                  </RightContentP>
                </ResumeItemRightContent>
              </ResumeItem>
              <ResumeItem>
                <ResumeItemLeftContent>
                  <LeftContentP>
                    2012 - 2017
                  </LeftContentP>
                </ResumeItemLeftContent>
                <ResumeItemRightContent>
                  <RightContentH5>
                    Business Administration
                  </RightContentH5>
                  <RightContentH6>
                    Fluminense Federal University
                  </RightContentH6>
                  <RightContentP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur.
                  </RightContentP>
                </ResumeItemRightContent>
              </ResumeItem>
              <ResumeItem>
                <ResumeItemLeftContent>
                  <LeftContentP>
                    2012 - 2017
                  </LeftContentP>
                </ResumeItemLeftContent>
                <ResumeItemRightContent>
                  <RightContentH5>
                    Business Administration
                  </RightContentH5>
                  <RightContentH6>
                    Fluminense Federal University
                  </RightContentH6>
                  <RightContentP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime velit id fuga tenetur suscipit error in nemo soluta quam consequuntur.
                  </RightContentP>
                </ResumeItemRightContent>
              </ResumeItem>
            </ResumeContent>
          </InnerLayout>
        </ResumeSection>
      </ResumePageContainer>
    </MainLayout>
  );
}

export default ResumePageComponent;
