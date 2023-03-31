import React from 'react';
import CardsInfo from 'components/templates/CardsInfo/CardsInfo';
import SectionInfo from 'components/templates/SectionInfo/SectionInfo';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import FormContact from 'components/templates/FormContact/FormContact';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import Navbar from '../components/organisms/Navbar/Navbar';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <CardsInfo />
      <SectionInfo />
      <NewsSection />
      <FormContact />
    </main>
  );
};

export default HomePage;
