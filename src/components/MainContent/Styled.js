import styled from 'styled-components';

export const MainContentContainer = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;

export const Lines = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  opacity: 0.4;
  z-index: -1;
`;

export const Line = styled.div`
  width: 1px;
  min-height: 100vh;
  background-color: var(--border-color);
`;
