import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import Title from '../Title';
import {
  Progress,
  ProgressBar,
  ProgressBarInfos,
  ProgressBarInfosP,
  ProgressBarTitle,
  ProgressSpan,
  ResumePageContainer,
  ResumeSection,
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
            <SmallTitleContainer>
              <SmallTitle>
                <SmallTitleP>
                  {briefcase}
                </SmallTitleP>
                <SmallTitleH3>
                  Working Experience
                </SmallTitleH3>
              </SmallTitle>
            </SmallTitleContainer>
            <SmallTitleContainer>
              <SmallTitle>
                <SmallTitleP>
                  {education}
                </SmallTitleP>
                <SmallTitleH3>
                  Education Path
                </SmallTitleH3>
              </SmallTitle>
            </SmallTitleContainer>
          </InnerLayout>
        </ResumeSection>
      </ResumePageContainer>
    </MainLayout>
  );
}

export default ResumePageComponent;
