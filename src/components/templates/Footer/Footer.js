import React from 'react';

import { FooterStyles, Wrapper, SmallGallery } from './Footer.styles';
import Button from '../../atoms/Button/Button';
import { Container } from '../../../views/Root.styles';
import gallery1 from '../../../assets/img/IMG_5578(134x134)px.jpeg';
import gallery2 from '../../../assets/img/kwesta2021(134x134)px.jpeg';
import gallery3 from '../../../assets/img/senior(134x134)px.jpeg';
import gallery4 from '../../../assets/img/niezapominajka(134x134)px.jpeg';
import logo from '../../../assets/img/logo_small.png';
import SocialButton from '../../atoms/SocialButton/SocialButton';

const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <Wrapper>
          <div>
            <h4>Rozlicz PIT z nami</h4>
            <p>
              Jeżeli jesteś <span>emerytem</span> lub <span>rencistą</span>
              możesz przekazać swój 1.5% podatku wypełniając <span>PI-OP</span>
            </p>
            <p>Jeśli nie wiesz jak przekazać swój 1.5% skontaktuj się z nami</p>
            <Button>Napisz</Button>
          </div>
          <div>
            <h4>Kontakt</h4>
            <p>ul. Grunwaldzka 17</p>
            <p>38-500 Sanok</p>
            <p>
              <i className="fas fa-phone-square-alt"></i>539 963 367
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i>501 052 908
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i>605 303 225
            </p>
            <p>
              <strong>NIP:</strong> 687 18 94 506
            </p>
            <p>
              <strong>REGON:</strong> 180335152
            </p>
            <p>
              <strong>KRS:</strong> 0000303867
            </p>
            <p>
              <strong>Bank Nowy BFG S.A. </strong>
              <br />
              79 8642 1184 2018 0008 3973 0001
            </p>
          </div>
          <div>
            <h4>Nasza galeria</h4>
            <SmallGallery>
              <img src={gallery1} alt={'gallery'} />
              <img src={gallery2} alt={'gallery'} />
              <img src={gallery3} alt={'gallery'} />
              <img src={gallery4} alt={'gallery'} />
            </SmallGallery>
          </div>
        </Wrapper>
        <Wrapper>
          <img src={logo} />
          <div>
            <span>Copyright &copy; Makatka </span>
          </div>
          <div id={'icon-wrapper'}>
            <SocialButton>f</SocialButton>
            <SocialButton>UP</SocialButton>
          </div>
        </Wrapper>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
