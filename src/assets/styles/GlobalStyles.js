import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;500;400;700&family=Noto+Serif:wght@400;500;700&display=swap');

  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'IBM Plex Sans', sans-serif
  }
  
  a, button {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  
  ul {
    list-style: none;
    margin-block-end: 0;
    margin-block-start: 0;
    padding-inline-start: 0;
  }
`;

export default GlobalStyles;
