import styled from 'styled-components';

export const LightModeSwitchContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 7%;
  background-color: var(--background-light-color-2);
  width: 100px;
  height: 2.5rem;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 425px) {
    width: 85px;
    padding-left: 0.7rem;
  }
  svg {
    font-size: 1.7rem;
    height: 100%;
    color: var(--white-color);
  }
`;

export const LeftContent = styled.div`

`;

export const RightContent = styled.div`
`;
