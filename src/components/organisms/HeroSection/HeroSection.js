import React from 'react';
import Navbar from '../Navbar/Navbar';
import Button from '../../atoms/Button/Button';
import { Wrapper, HeroText, HeroContent } from './HeroSection.styles';
import { Container } from '../../../views/Root.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from '../Modal/Modal';
import PercentModal from '../../../views/ModalDetails/PercentModal';

const HeroSection = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <Wrapper>
      <Modal handleClose={handleCloseModal} isOpen={isOpen}>
        <PercentModal />
      </Modal>
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
            <Button onClick={handleOpenModal}>Przekaż 1,5%</Button>
          </HeroText>
        </Container>
      </HeroContent>
    </Wrapper>
  );
};

export default HeroSection;
