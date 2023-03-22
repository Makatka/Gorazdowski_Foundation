import React from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '../../atoms/Button/Button';
import { Wrapper, HeroText, HeroContent } from './HeroSection.styles';
import { Container } from '../../../views/Root.styles';

const HeroSection = () => {
  return (
    <Wrapper>
      <HeroContent>
        <Navbar />
        <Container>
          <HeroText>
            <h1>
              Stowarzyszenie Pomoc
              <br />
              Rodzinie
            </h1>
            <p>im. Św. Ks. Zygmunta Gorazdowskiego w Sanoku</p>
            <Button>Przekaż 1,5%</Button>
          </HeroText>
        </Container>
      </HeroContent>
    </Wrapper>
  );
};

export default HeroSection;
