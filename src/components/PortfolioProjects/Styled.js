import styled from 'styled-components';

export const PortfolioProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  overflow: hidden;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`

`;

export const ProjectContent = styled.div`
  display: block;
  position: relative;
`;

export const PortfolioImageContainer = styled.div`
  &::before {
    content: "";
    position: absolute;
    left: 2%;
    top: 4%;
    height: 0;
    width: 0;
    transition: all .4s ease-in-out;
  }
  &:hover {
    ul {
      transform: translateY(0);
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all .4s ease-in-out;
      opacity: 1;
    }
    &::before {
      height: calc(100% - 32%);
      width: calc(100% - 4%);
      background-color: white;
      opacity: 0.9;
      transform-origin: left;
      transition: all .4s ease-in-out;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 30vh;
  object-fit: cover;
`;

export const LinksUl = styled.ul`
  transform: translateY(-100px);
  transition: all .4s ease-in-out;
  position: absolute;
  left: 50%;
  top: 40%;
  opacity: 0;
  display: flex;
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--border-color);
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 50%;
  margin: 0 .5rem;
  transition: all .4s ease-in-out;
  &:hover {
    background-color: var(--primary-color);
    svg {
      color: var(--white-color);
    }
  }
`;

export const Icon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
  }
`;

export const ItemTitle = styled.h6`
  font-size: 1.5rem;
`;

export const ItemText = styled.p`

`;
