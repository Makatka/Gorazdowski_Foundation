import React from 'react';
import Footer from 'components/templates/Footer/Footer';
import GlobalStyle from '../assets/styles/GlobalStyles';
import TopBar from 'components/templates/TopBar/TopBar';
import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About/About';
import Patron from './Patron/Patron';
import Navbar from 'components/organisms/Navbar/Navbar';
import News from './News/News';
import SeniorClub from './SeniorClub/SeniorClub';
import NotFound from 'views/NotFound/NotFound';
import Circles from './Circles/Circles';

function Root() {
  return (
    <>
      <GlobalStyle />
      <TopBar />

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/seniorClub" element={<SeniorClub />} />
        <Route path="/about" element={<About />} />
        <Route path="/patron" element={<Patron />} />
        <Route path="/circles" element={<Circles />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Root;
