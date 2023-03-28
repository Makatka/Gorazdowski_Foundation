import React from 'react';
import { Container } from '../../../views/Root.styles';
import { StyledLink, Logo, Wrapper, Navigation } from './Navbar.styles';
import logo from '../../../assets/img/logo_small.png';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={logo} />
        <Navigation>
          <StyledLink to="/about">O nas</StyledLink>
          <StyledLink to="/article">Aktualności</StyledLink>
          <StyledLink>
            <a href="#contact">Kontakt</a>
          </StyledLink>
        </Navigation>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
