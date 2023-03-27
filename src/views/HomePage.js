import React from 'react';
import CardsInfo from 'components/templates/CardsInfo/CardsInfo';
import SectionInfo from 'components/templates/SectionInfo/SectionInfo';
import News from 'components/templates/News/News';
import SectionContact from 'components/templates/SectionContact/SectionContact';

const HomePage = () => {
  return (
    <main>
      <CardsInfo />
      <SectionInfo />
      <News />
      <SectionContact />
    </main>
  );
};

export default HomePage;
