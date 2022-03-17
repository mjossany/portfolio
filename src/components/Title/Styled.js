import styled from 'styled-components';

export const TitleContainer = styled.div`
  position: relative;
`;

export const TitleH2 = styled.h2`
  color: var(--white-color);
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  padding-bottom: .7rem;
  @media screen and (max-width: 570px) {
      font-size: 2.5rem;
  }
  @media screen and (max-width: 370px) {
    font-size: 2rem;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 7.4rem;
    height: .33rem;
    background-color: var(--background-light-color-2);
    border-radius: 15px;
    
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 3.5rem;
    height: .33rem;
    background-color: var(--primary-color);
    border-radius: 15px;
    left: 0;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 500;
  color: rgba(25, 29, 43, .44);
  font-size: 3.5rem;
  position: absolute;
  left: 0;
  top: 30%;
  z-index: -1;
  @media screen and (max-width: 620px) {
    font-size: 3.4rem;
  }
  @media screen and (max-width: 570px) {
    font-size: 2.9rem;
  }
  @media screen and (max-width: 370px) {
  font-size: 2.2rem;
  }
`;
