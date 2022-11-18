import styled, { createGlobalStyle } from 'styled-components';

interface Button {
  primary?: boolean;
  big?: boolean;
  fontBig?: boolean;
}

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    font-size: 85%;
  }

  body {
    font-family: 'Manrope', serif;
  }

*{
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

*,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
   text-decoration-line: none;
   list-style: none;
  }

  img {
   transition: all 0.5s ease-in;
  }

  .app {
    width: 100%;
    color: #444;
    font-family: 'Manrope', serif;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button<Button>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#ff6836' : '#ff774a')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Manrope', serif;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#ff774a' : '#ff6836')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
