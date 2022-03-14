import styled from 'styled-components';

export const AboutPageContainer = styled.section`

`;

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
