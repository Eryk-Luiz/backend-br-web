import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    background-color: #15122B;
  }
`;

export default GlobalStyle;
