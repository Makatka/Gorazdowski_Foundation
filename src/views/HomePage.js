import React from 'react';
import CardsInfo from 'components/templates/CardsInfo/CardsInfo';
import SectionInfo from 'components/templates/SectionInfo/SectionInfo';
import Articles from 'components/templates/Articles/Articles';
import SectionContact from 'components/templates/SectionContact/SectionContact';

const HomePage = () => {
  return (
    <main>
      <CardsInfo />
      <SectionInfo />
      <Articles />
      <SectionContact />
    </main>
  );
};

export default HomePage;
