import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import { Wrapper, ScrollToTop } from '../exports/exports';

const theme: DefaultTheme = {
  colors: {
    primary: '#101522',
    secondary: '#ff6836',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <ScrollToTop />
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}
