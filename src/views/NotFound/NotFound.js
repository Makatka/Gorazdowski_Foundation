import React from 'react';
import HeroSection from '../../components/organisms/HeroSection/HeroSection';
import { Container } from '../Root.styles';

const NotFound = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <h1 style={{ textAlign: 'center', width: '100%' }}>Nie ma takiej strony</h1>
      </Container>
    </>
  );
};

export default NotFound;
