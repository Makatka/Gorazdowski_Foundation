import React from 'react';
import { Wrapper, ContactWrapper, ActionLink } from './TopBar.styles';
import { Container } from '../../../views/Root.styles';
import SocialButton from '../../atoms/SocialButton/SocialButton';
import { BsHeadphones } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const TopBar = () => {
  return (
    <Wrapper>
      <Container>
        <ContactWrapper>
          <li>
            <BsHeadphones />
            <span>+48 539 963 367</span>
          </li>
          <li>
            <TfiEmail />
            <span>gorazdowski@interia.pl</span>
          </li>
        </ContactWrapper>
        <ActionLink>
          <SocialButton>Zostań wolontariuszem</SocialButton>
          <SocialButton>Złóż datek</SocialButton>
        </ActionLink>
      </Container>
    </Wrapper>
  );
};

export default TopBar;
