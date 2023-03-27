import React from 'react';
import { Container } from 'views/Root.styles';
import { Wrapper, AddressWrapper, StyledHeader } from './FormContact.styles';
import FormField from '../../molecules/FormField/FormField';
import { FiMapPin, FiPhoneCall, FiMail } from 'react-icons/fi';
import Button from '../../atoms/Button/Button';
import { BsArrowRight } from 'react-icons/bs';
import { FlexWrapper } from '../SectionInfo/SectionInfo.styles';

const FormContact = () => {
  return (
    <Container>
      <Wrapper>
        <form>
          <StyledHeader>Zostaw Wiadomość</StyledHeader>
          <FormField label="Imię i Nazwisko" id="name" />
          <FlexWrapper>
            <FormField label="Nr Kontaktowy" id="contactNumber" />
            <FormField label="E-mail" id="email" />
          </FlexWrapper>

          <textarea placeholder="TREŚĆ WIADOMOŚCI" id="textArea" rows="6"></textarea>
          <Button>
            Wyślij
            <BsArrowRight />
          </Button>
        </form>
        <AddressWrapper>
          <StyledHeader>Kontakt</StyledHeader>
          <p>Jeżeli potrzebujesz więcej informacji na temat naszej działalności skontaktuj się z nami. Pomożemy także podczas rozliczenia 1.5% podatku.</p>
          <ul>
            <li>
              <FiMapPin />
              <span>ul. Grunwaldzka 17, 38-500 Sanok</span>
            </li>
            <li>
              <FiPhoneCall />
              <span>+48 539 963 367, +48 609 853 274</span>
            </li>
            <li>
              <FiMail />
              <span>gorazdowski@interia.pl</span>
            </li>
          </ul>
        </AddressWrapper>
      </Wrapper>
    </Container>
  );
};

export default FormContact;
