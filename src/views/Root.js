import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Footer from 'components/templates/Footer/Footer';
import GlobalStyle from '../assets/styles/GlobalStyles';
import TopBar from '../components/templates/TopBar/TopBar';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import HomePage from './HomePage';
import About from './About';
import Navbar from '../components/organisms/Navbar/Navbar';

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopBar />
        {/*
        <HeroSection />
        <HomePage />
        */}
        <Navbar />
        <About />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Root;
