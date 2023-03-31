import React from 'react';
import { Container } from 'views/Root.styles';
import { StyledLink, Logo, Wrapper, Navigation } from './Navbar.styles';
import logo from 'assets/img/logo_small.png';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <NavLink to="/">
          <Logo src={logo} />
        </NavLink>

        <Navigation>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">O nas</NavLink>
          </li>
          <li>
            <NavLink to="/news">Aktualności</NavLink>
          </li>
          <li>
            <NavLink to="/circles">Koła</NavLink>
          </li>
        </Navigation>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
