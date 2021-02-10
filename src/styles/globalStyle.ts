import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 100%;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
  }
`;

export default GlobalStyle;
