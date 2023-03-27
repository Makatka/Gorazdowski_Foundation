import React from 'react';
import Button from '../../atoms/Button/Button';
import { FaPeopleCarry } from 'react-icons/fa';
import { SectionHeaderStyles } from '../../atoms/SectionHeader/SectionHeaderStyles';
import { Wrapper, FlexWrapper, SectionImage, InfoIconStyles } from './SectionInfo.styles';
import { Container } from '../../../views/Root.styles';

const SectionInfo = () => {
  return (
    <Container>
      <Wrapper>
        <SectionImage />
        <div>
          <SectionHeaderStyles>Realizujemy się najpełniej, jeśli potrafimy żyć dla innych.</SectionHeaderStyles>
          <Button>Nasza działalność</Button>
          <Button>Dom Samotnej Matki</Button>
          <p>
            Jesteśmy organizacją pożytku publicznego (od 05.03.2009r.). Celem i misją stowarzyszenia jest niesienie pomocy rodzinom wielodzietnym, biednym, seniorom i niepełnosprawnym, podniesienie
            świadomości macierzyństwa, odpowiedzialności rodziców w wychowaniu dzieci, dbanie o ich rozwój fizyczny i intelektualny, pomoc materialna dla potrzebujących.
          </p>
          <FlexWrapper>
            <div>
              <InfoIconStyles>
                <FaPeopleCarry />
              </InfoIconStyles>
              <h3>Pomoc materialna</h3>
              <p>Prowadzimy akcje charytatywne na rzecz rodzin i osób starszych znajdujących się w gorszej sytuacji materalnej.</p>
            </div>
            <div>
              <InfoIconStyles>
                <FaPeopleCarry />
              </InfoIconStyles>
              <h3>Rewitalizacja seniorów</h3>
              <p>Realizujemy projekty mające na celu aktywizację osób starszych i samotych.</p>
            </div>
          </FlexWrapper>
        </div>
      </Wrapper>
    </Container>
  );
};

export default SectionInfo;
