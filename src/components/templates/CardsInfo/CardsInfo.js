import React from 'react';
import InfoCard from '../../molecules/InfoCard/InfoCard';
import { Wrapper } from './CardsInfo.styles';
import { Container } from 'views/Root.styles';

const CardsInfo = () => {
  return (
    <Container>
      <Wrapper>
        <InfoCard
          cardIcon={'hands'}
          cardHeader={'Co nami kieruje'}
          cardText={'Nasze przesłanie: nieść ludziom: WIARĘ, MIŁOŚĆ I NADZIEJĘ dla człowieka wątpiącego, zagubionego w pielgrzymce życia doczesnego jak nauczał Ks. Zygmunt Gorazdowski.'}
        />
        <InfoCard cardHeader={'Jak pracujemy'} cardText={'Krąg jest najmniejszą i podstawową komórką Stowarzyszenia. W 2008 rokupowstały dwa Kręgi: w Nowsielcach i Sanoku.'} cardIcon={'work'} />
        <InfoCard cardIcon={'people'} cardHeader={'Klub Seniora'} cardText={'Klub Niezapominajka to miejsce spotkań i wielu ciekawych przedsięwzięć mających na celu rewitalizację seniorów.'} />
      </Wrapper>
    </Container>
  );
};

export default CardsInfo;
