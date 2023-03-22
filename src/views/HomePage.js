import React from 'react';
import CardsInfo from '../components/templates/CardsInfo/CardsInfo';
import SectionInfo from '../components/templates/SectionInfo/SectionInfo';
import Articles from '../components/templates/Articles/Articles';
import SectionContact from '../components/templates/SectionContact/SectionContact';
import { Container } from './Root.styles';

const HomePage = () => {
  return (
    <main>
      <Container>
        <CardsInfo />
        <SectionInfo />
        <Articles />
        <SectionContact />
      </Container>
    </main>
  );
};

export default HomePage;
