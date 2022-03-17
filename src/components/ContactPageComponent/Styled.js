import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const LeftContent = styled.div`

`;

export const ContactTitleContainer = styled.div`

`;

export const ContactTitle = styled.h4`
  color: var(--white-color);
  padding: 1rem 0;
  font-size: 1.8rem; 
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormField = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  left: 20px;
  top: -19px;
  display: inline-block;
  background-color: var(--background-dark-color);
  padding: 0 .5rem;
`;

export const Input = styled.input`
  border: 1px solid var(--border-color);
  outline: none;
  background: transparent;
  height: 50px;
  padding: 0 15px;
  width: 100%;
  color: inherit;
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid var(--border-color);
  outline: none;
  color: inherit;
  width: 100%;
  padding: .8rem 1rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 100%;
  @media screen and (max-width: 978px) {
    margin-bottom: 2rem;
  }
`;

export const Button = styled.a`
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

export const RightContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

export const ContactItem = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-gray);
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const ContactLeftContent = styled.div`
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  svg {
    font-size: 2.3rem;
  }
`;

export const ContactRightContent = styled.div`

`;

export const H6 = styled.h6`
  color: var(--white-color);
  font-size: 1.2rem;
  padding-bottom: .6rem;
`;

export const P = styled.p`
  padding: .1rem 0;
`;
