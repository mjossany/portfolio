import React from 'react';
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
  Skills,
  SkillsContainer,
} from './Styled';

function ResumePageComponent() {
  return (
    <MainLayout>
      <ResumePageContainer>
        <SkillsContainer>
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
        </SkillsContainer>
      </ResumePageContainer>
    </MainLayout>
  );
}

export default ResumePageComponent;
