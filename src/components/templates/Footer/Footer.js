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
import { FaFacebookF, FaPhoneSquareAlt } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <Wrapper>
          <div>
            <h4>Rozlicz PIT z nami</h4>
            <p>
              Jeżeli jesteś <span>emerytem</span> lub <span>rencistą </span>
              możesz przekazać swój 1.5% podatku wypełniając <span>PI-OP</span>
            </p>
            <p>Jeśli nie wiesz jak przekazać swój 1.5% skontaktuj się z nami</p>
            <Button>Napisz</Button>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>ul. Grunwaldzka 17</li>
              <li>38-500 Sanok</li>
              <li>
                <FaPhoneSquareAlt /> 539 963 367
              </li>
              <li>
                <FaPhoneSquareAlt /> 501 052 908
              </li>
              <li>
                <FaPhoneSquareAlt /> 605 303 225
              </li>
              <li>
                <strong>NIP: </strong> 687 18 94 506
              </li>
              <li>
                <strong>REGON: </strong> 180335152
              </li>
              <li>
                <strong>KRS: </strong> 0000303867
              </li>
              <li>
                <p>
                  <strong>Bank Nowy BFG S.A. </strong>
                  <br />
                  79 8642 1184 2018 0008 3973 0001
                </p>
              </li>
            </ul>
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
            <SocialButton>
              <FaFacebookF />
            </SocialButton>
            <SocialButton>
              <IoIosArrowUp />
            </SocialButton>
          </div>
        </Wrapper>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
