import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import Title from '../Title/Title';
import {
  Education,
  LeftContentP,
  Progress,
  ProgressBar,
  ProgressBarInfos,
  ProgressBarInfosP,
  ProgressBarTitle,
  ProgressSpan,
  Resume,
  ResumeAndEducationContainer,
  ResumeContent,
  ResumeItem,
  ResumeItemLeftContent,
  ResumeItemRightContent,
  ResumePageContainer,
  ResumeSection,
  RightContentH5,
  RightContentH6,
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
                  STYLED COMPONENTS
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
                  NODE
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
                  MONGODB
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
            <ResumeAndEducationContainer>
              <Resume>
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
                        2014 - 2015
                      </LeftContentP>
                    </ResumeItemLeftContent>
                    <ResumeItemRightContent>
                      <RightContentH5>
                        Human Resources Intern
                      </RightContentH5>
                      <RightContentH6>
                        Oceaneering
                      </RightContentH6>
                    </ResumeItemRightContent>
                  </ResumeItem>
                  <ResumeItem>
                    <ResumeItemLeftContent>
                      <LeftContentP>
                        2015 - 2017
                      </LeftContentP>
                    </ResumeItemLeftContent>
                    <ResumeItemRightContent>
                      <RightContentH5>
                        Finance Intern
                      </RightContentH5>
                      <RightContentH6>
                        Furnas
                      </RightContentH6>
                    </ResumeItemRightContent>
                  </ResumeItem>
                </ResumeContent>
              </Resume>
              <Education>
                <SmallTitle>
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
                    </ResumeItemRightContent>
                  </ResumeItem>
                  <ResumeItem>
                    <ResumeItemLeftContent>
                      <LeftContentP>
                        2017 - 2018
                      </LeftContentP>
                    </ResumeItemLeftContent>
                    <ResumeItemRightContent>
                      <RightContentH5>
                        Business Post Graduation
                      </RightContentH5>
                      <RightContentH6>
                        Alumni COPPEAD
                      </RightContentH6>
                    </ResumeItemRightContent>
                  </ResumeItem>
                  <ResumeItem>
                    <ResumeItemLeftContent>
                      <LeftContentP>
                        2021-2022
                      </LeftContentP>
                    </ResumeItemLeftContent>
                    <ResumeItemRightContent>
                      <RightContentH5>
                        Full Stack Web Development
                      </RightContentH5>
                      <RightContentH6>
                        Trybe
                      </RightContentH6>
                    </ResumeItemRightContent>
                  </ResumeItem>
                </ResumeContent>
              </Education>
            </ResumeAndEducationContainer>
          </InnerLayout>
        </ResumeSection>
      </ResumePageContainer>
    </MainLayout>
  );
}

export default ResumePageComponent;
