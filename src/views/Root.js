import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Footer from 'components/templates/Footer/Footer';
import GlobalStyle from '../assets/styles/GlobalStyles';
import TopBar from '../components/templates/TopBar/TopBar';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import HomePage from './HomePage';
import About from './About/About';
import Patron from './Patron/Patron';
import Navbar from '../components/organisms/Navbar/Navbar';
import News from './News/News';
import Modal from 'components/organisms/Modal/Modal';
import Button from '../components/atoms/Button/Button';

function Root() {
  const home = false;
  const about = true;
  const patron = false;
  const news = false;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TopBar />

        {home ? <HeroSection /> : null}
        {home ? <HomePage /> : null}
        {home ? null : <Navbar />}
        {about ? <About /> : null}
        {patron ? <Patron /> : null}
        {news ? <News /> : null}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Root;
