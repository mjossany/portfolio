import React from 'react';
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
import design from '../../images/design.svg';
import intelligence from '../../images/intelligence.svg';
import gamedev from '../../images/game-dev.svg';

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
        <ServicesSection>
          <InnerLayout>
            <Title title="Services" span="Services" />
            <Services>
              <ServiceCard>
                <ServiceCardContainer>
                  <ServiceCardImage src={design} />
                  <ServiceCardH4>
                    Web Design
                  </ServiceCardH4>
                  <ServiceCardP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis iure culpa, ducimus corporis non exercitationem
                    officiis nihil deserunt quaerat!
                  </ServiceCardP>
                </ServiceCardContainer>
              </ServiceCard>
              <ServiceCard>
                <ServiceCardContainer>
                  <ServiceCardImage src={intelligence} />
                  <ServiceCardH4>
                    Artificial Intelligence
                  </ServiceCardH4>
                  <ServiceCardP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis iure culpa, ducimus corporis non exercitationem
                    officiis nihil deserunt quaerat!
                  </ServiceCardP>
                </ServiceCardContainer>
              </ServiceCard>
              <ServiceCard>
                <ServiceCardContainer>
                  <ServiceCardImage src={gamedev} />
                  <ServiceCardH4>
                    Game Development
                  </ServiceCardH4>
                  <ServiceCardP>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis iure culpa, ducimus corporis non exercitationem
                    officiis nihil deserunt quaerat!
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
