import React from 'react';
import CardsInfo from 'components/templates/CardsInfo/CardsInfo';
import SectionInfo from 'components/templates/SectionInfo/SectionInfo';
import News from 'components/templates/News/News';
import FormContact from 'components/templates/FormContact/FormContact';

const HomePage = () => {
  return (
    <main>
      <CardsInfo />
      <SectionInfo />
      <News />
      <FormContact />
    </main>
  );
};

export default HomePage;
