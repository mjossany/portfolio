import styled from 'styled-components';

export const MainLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width: 642px) {
    padding: 4rem;
  }
  @media screen and (max-width: 510px) {
    padding: 3rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
