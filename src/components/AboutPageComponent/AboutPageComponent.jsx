import React from 'react';
import { MainLayout } from '../../styles/Layouts';
import Title from '../Title';
import {
  AboutInfo,
  AboutInfoData,
  AboutInfoDataP,
  AboutInfoP,
  AboutInfoTitle,
  AboutPageContainer,
  DownloadCvButton,
  H4,
  Image,
  ImageSection,
  LeftContent,
  Paragraph,
  RightContent,
  Span,
} from './Styled';
import image from '../../images/AboutMeImage.png';

function AboutPageComponent() {
  return (
    <MainLayout>
      <AboutPageContainer>
        <Title title="About me" span="About me" />
        <ImageSection>
          <LeftContent>
            <Image src={image} alt="self" />
          </LeftContent>
          <RightContent>
            <H4>
              I am
              {' '}
              <Span>
                Jossany Moura
              </Span>
            </H4>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Omnis iure culpa, ducimus corporis non exercitationem
              officiis nihil deserunt quaerat! Perferendis fuga,
              nulla numquam maxime sapiente ad,
              hic reprehenderit praesentium deserunt neque quos repellat?
            </Paragraph>
            <AboutInfo>
              <AboutInfoTitle>
                <AboutInfoP>
                  Full Name
                </AboutInfoP>
                <AboutInfoP>
                  Age
                </AboutInfoP>
                <AboutInfoP>
                  Nationality
                </AboutInfoP>
                <AboutInfoP>
                  Languages
                </AboutInfoP>
                <AboutInfoP>
                  Location
                </AboutInfoP>
                <AboutInfoP>
                  Service
                </AboutInfoP>
              </AboutInfoTitle>
              <AboutInfoData>
                <AboutInfoDataP>
                  : Lorem Ipsum
                </AboutInfoDataP>
                <AboutInfoDataP>
                  : 27
                </AboutInfoDataP>
                <AboutInfoDataP>
                  : Brazilian
                </AboutInfoDataP>
                <AboutInfoDataP>
                  : Portuguese / English
                </AboutInfoDataP>
                <AboutInfoDataP>
                  : Rio de Janeiro
                </AboutInfoDataP>
                <AboutInfoDataP>
                  : Development Student
                </AboutInfoDataP>
              </AboutInfoData>
            </AboutInfo>
            <DownloadCvButton>
              Download CV
            </DownloadCvButton>
          </RightContent>
        </ImageSection>
      </AboutPageContainer>
    </MainLayout>
  );
}

export default AboutPageComponent;
