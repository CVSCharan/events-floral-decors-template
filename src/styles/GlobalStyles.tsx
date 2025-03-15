import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${theme.fonts.secondary};
    color: ${theme.colors.text};
    background-color: ${theme.colors.white};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.main};
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }
  
  button {
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  section {
    padding: 5rem 0;
  }
`;

export default GlobalStyles;