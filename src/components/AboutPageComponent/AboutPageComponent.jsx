import React from 'react';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import ScienceIcon from '@mui/icons-material/Science';
import { InnerLayout, MainLayout } from '../../styles/Layouts';
import Title from '../Title/Title';
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
  ReviewItem,
  ReviewItemP,
  Reviews,
  ReviewsSection,
  RightContent,
  ServiceCard,
  ServiceCardContainer,
  ServiceCardH4,
  ServiceCardImage,
  ServiceCardP,
  Services,
  ServicesSection,
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
              I graduated in Business Administration in 2017 and now I am a
              Full Stack Web Development student at Trybe,
              a school that teaches how to program, learn and work.
              I love technology and all the possibilities that it offers to change
              a person&#39;s life.
              I&#39;ve decided to make that career change because I believe that technology
              is the best tool to make a fairer society and preserve the Earth.
              I see myself as an easygoing person and believe that I can contribute and
              fit into any team with my empathy and communication skills.
              Recently I&#39;ve been studying JavaScript,
              React and SQL and learning a lot about soft skills.
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
                  Occupation
                </AboutInfoP>
              </AboutInfoTitle>
              <AboutInfoData>
                <AboutInfoDataP>
                  : Jossany Moura da Silva Junior
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
        <ServicesSection>
          <InnerLayout>
            <Title title="Services" span="Services" />
            <Services>
              <ServiceCard>
                <ServiceCardContainer>
                  <ServiceCardImage>
                    <WebIcon />
                  </ServiceCardImage>
                  <ServiceCardH4>
                    Front-End
                  </ServiceCardH4>
                  <ServiceCardP>
                    JavaScript, React, Redux, Styled Components.
                    These are some of the tools that I use to build the Front of the applications.
                  </ServiceCardP>
                </ServiceCardContainer>
              </ServiceCard>
              <ServiceCard>
                <ServiceCardContainer>
                  <ServiceCardImage>
                    <StorageIcon />
                  </ServiceCardImage>
                  <ServiceCardH4>
                    Back-End
                  </ServiceCardH4>
                  <ServiceCardP>
                    NodeJs, Express, MySQL, MongoDB, Sequelize.
                    These are some of the tools that I use to build the Back of the applications.
                  </ServiceCardP>
                </ServiceCardContainer>
              </ServiceCard>
              <ServiceCard>
                <ServiceCardContainer>
                  <ServiceCardImage>
                    <ScienceIcon />
                  </ServiceCardImage>
                  <ServiceCardH4>
                    Tests
                  </ServiceCardH4>
                  <ServiceCardP>
                    To test my applications I use Jest, Mocha and other tools.
                    I do unit tests and integration tests.
                  </ServiceCardP>
                </ServiceCardContainer>
              </ServiceCard>
            </Services>
          </InnerLayout>
        </ServicesSection>
        <ReviewsSection>
          <Title title="Reviews" span="Reviews" />
          <InnerLayout>
            <Reviews>
              <ReviewItem>
                <ReviewItemP>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis ab soluta vel neque cum tenetur architecto voluptates error ea totam.
                </ReviewItemP>
              </ReviewItem>
              <ReviewItem>
                <ReviewItemP>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis ab soluta vel neque cum tenetur architecto voluptates error ea totam.
                </ReviewItemP>
              </ReviewItem>
            </Reviews>
          </InnerLayout>
        </ReviewsSection>
      </AboutPageContainer>
    </MainLayout>
  );
}

export default AboutPageComponent;
