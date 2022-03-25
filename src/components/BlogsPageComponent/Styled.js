import styled from 'styled-components';

export const BlogsPageContainer = styled.div`
  .blogs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const BlogItem = styled.div`
  background-color: var(--background-dark-gray);
  padding: 1rem 1rem;
  height: fit-content;
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: .5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 85%;
  object-fit: cover;
  transition: all .4s ease-in-out;
  &:hover {
    transform: rotate(2deg) scale(1.1);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BlogTitle = styled.a`
  font-size: 1.8rem;
  padding: 2rem 0;
  color: var(--white-color);
  cursor: pointer;
  transition: all .4s ease-in-out;
  &:hover {
    color: var(--primary-color);
  }
`;
