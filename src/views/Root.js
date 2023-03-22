import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Footer from 'components/templates/Footer/Footer';
import GlobalStyle from '../assets/styles/GlobalStyles';
import TopBar from '../components/templates/TopBar/TopBar';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import HomePage from './HomePage';

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopBar />
        <HeroSection />
        <HomePage />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Root;
