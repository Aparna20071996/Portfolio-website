import { createGlobalStyle, css } from 'styled-components';
import { ThemeContextType } from '../context/ThemeContext';

const darkTheme = css`
  --primary: #6C63FF; /* Vibrant purple */
  --secondary: #FF6584; /* Vibrant pink */
  --accent: #00D9FF; /* Vibrant cyan */
  --background: #0A1929; /* Dark blue background */
  --text-primary: #FFFFFF;
  --text-secondary: #B8B8B8;
  --card-bg: #132F4C;
  --nav-bg: rgba(10, 25, 41, 0.8);
  --input-bg: rgba(19, 47, 76, 0.8);
  --success: #4CAF50;
  --warning: #FFC107;
  --error: #F44336;
  --gradient-1: linear-gradient(90deg, var(--primary), var(--accent));
  --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  --transition: all 0.3s ease-in-out;
`;

const lightTheme = css`
  --primary: #6C63FF; /* Vibrant purple */
  --secondary: #FF6584; /* Vibrant pink */
  --accent: #00D9FF; /* Vibrant cyan */
  --background: #F5F5F7; /* Light gray background */
  --text-primary: #333333;
  --text-secondary: #666666;
  --card-bg: #FFFFFF;
  --nav-bg: rgba(245, 245, 247, 0.8);
  --input-bg: rgba(255, 255, 255, 0.8);
  --success: #4CAF50;
  --warning: #FFC107;
  --error: #F44336;
  --gradient-1: linear-gradient(90deg, var(--primary), var(--accent));
  --box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  --transition: all 0.3s ease-in-out;
`;

const GlobalStyles = createGlobalStyle<{ theme: ThemeContextType }>`
  :root {
    ${props => props.theme.darkMode ? darkTheme : lightTheme}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--text-primary);
    line-height: 1.7;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    line-height: 1.2;
  }

  h2 {
    font-size: 2.5rem;
    color: var(--text-primary);
  }

  h3 {
    font-size: 1.75rem;
    color: var(--text-primary);
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: var(--transition);
    &:hover {
      color: var(--secondary);
    }
  }

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--gradient-1);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles;