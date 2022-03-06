import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #007bff;
    --primary-color-light: #057fff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-gray: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
  }

  a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
  }

  h1 {
    font-size: 4rem;
    color: var(--white-color);
    span {
      font-size: 4rem;
    }
  }

  span {
    color: var(--primary-color);
  }

  h6 {
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
  }
`;

export default GlobalStyle;
