import styled from 'styled-components';

const HamburguerIconContainer = styled.div`
  display: none;
  svg {
    color: var(--primary-color);
    font-size: 3rem;
  }
  @media screen and (max-width: 1200px) {
    display: block;
    position: fixed;
    right: 1.7%;
    top: 2%;
    z-index: 15;
  }
`;

export default HamburguerIconContainer;
