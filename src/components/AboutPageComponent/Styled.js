import styled from 'styled-components';

export const AboutPageContainer = styled.section`

`;

// Image Section
export const ImageSection = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  height: 60vh;
  @media screen and (max-width: 1000px) {
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 90%;
  height: 100%;
  object-fit: cover;
`;

export const RightContent = styled.div`
  width: 100%;
`;

export const H4 = styled.h4`
  font-size: 2rem;
  color: var(--white-color);
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  padding: 1rem 0;
`;

export const AboutInfo = styled.div`
  padding-bottom: 1.4rem;
  display: flex;
`;

export const AboutInfoTitle = styled.div`
  padding-right: 2rem;
`;

export const AboutInfoP = styled.p`
  font-weight: 600;
  padding: .3rem 0;
`;

export const AboutInfoData = styled.div`

`;

export const AboutInfoDataP = styled.p`
  padding: .3rem 0;
`;

export const DownloadCvButton = styled.a`
  background-color: var(--primary-color);
  padding: .8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: .2rem;
    transition: all .4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: .7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;

// Services Section
export const ServicesSection = styled.section`

`;

export const Services = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background-color: var(--background-dark-gray);
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  transition: all .4s ease-in-out;
  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(-3px);
  }
`;

export const ServiceCardContainer = styled.div`
  padding: 1.2rem;
`;

export const ServiceCardImage = styled.img`

`;

export const ServiceCardH4 = styled.h4`
  color: var(--white-color);
  font-size: 1.6rem;
  padding: 1rem 0;
  position: relative;
  &::after {
    content: "";
    width: 4rem;
    background-color: var(--border-color);
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 10px;
  }
`;

export const ServiceCardP = styled.p`
  padding: .8rem 0;
`;
