import styled from 'styled-components';

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const PresentationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
`;

export const H1 = styled.h1`

`;

export const Span = styled.span`

`;

export const P = styled.p`

`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Icon = styled.a`
  border: 2px solid var(--border-color);
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  transition: all .4s ease-in-out;
  &:hover {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 1rem;
  }
  svg {
    margin: .5rem;
  }
`;
