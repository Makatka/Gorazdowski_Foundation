import React from 'react';
import { Container } from '../Root.styles';
import articleImage from 'assets/img/pomnik.webp';
import oppLogo from 'assets/img/logo_opp/logo_opp_kolor.png';
import { ArticleWrapper, ArticleText, ArticleSubtitle, ArticleFooter, ReadMoreLink, FlexWrapper, ModalOpen } from './About.styles';
import { FaArrowRight } from 'react-icons/fa';
import { BiBookmark } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { RiFilePaperLine } from 'react-icons/ri';
import Modal from 'components/organisms/Modal/Modal';
import Button from 'components/atoms/Button/Button';
import useModal from 'components/organisms/Modal/useModal';

const About = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const handleOpenModalDetails = (e) => {
    console.log(e.target);
  };

  return (
    <Container>
      <Modal handleClose={handleCloseModal} isOpen={isOpen}>
        <p>
          a Wojtuszewska, Elżbieta Kędra, Andrzej Kędra, Alina Pęcak, Andrzej Pęcak i Teresa Węgrzyn. Grupa ta postanowiła przygotować: zebranie założycielskie, projekt statutu oraz projekty
          potrzebnych uchwał. Na zebraniu założycielskim po przedstawieniu celu, założeń działalności oraz sylwetki i działalności charytatywnej św.księdza Zygmunta Gorazdowskiego,projektu statutu
          wybrano: Zarząd Główny, Główną Komisję Rewizyjną,Sąd Koleżeński oraz trzy osobowy Komitet Założycielski w skład, którego weszli: Andrzej Kędra, Agnieszka Drozd,Alina Pęcak.Zadaniem tego
          komitetu było przygotowanie niezbędnych dokumentów do zarejestrowania Stowarzyszenia w Rejonowym Sądzie Rejestrowym – krajowego Rejestru w Rzeszowie.
        </p>
      </Modal>

      <Button onClick={handleOpenModal}>OTWÓRZ MODAL </Button>
      <ArticleWrapper>
        <img src={articleImage} alt="Pomnik Z. Gorazdowski w Sanoku" />
        <ArticleText>
          <h5>O STOWARZYSZENIU</h5>
          <h3>Działamy od 2008 roku</h3>
          <ArticleSubtitle>Stowarzyszenie Pomoc Rodzinie im. św. ks. Zygmunta Gorazdowskiego w Sanoku powstało 12.01.2008r. na zebraniu założycielskim.</ArticleSubtitle>
          <p>
            Zebranie to zostało poprzedzone spotkaniem grupy sześcioosobowej, które odbyło się 15.12. 2007r. W tym spotkaniu brały udział: Wanda Wojtuszewska, Elżbieta Kędra, Andrzej Kędra, Alina
            Pęcak, Andrzej Pęcak i Teresa Węgrzyn. Grupa ta postanowiła przygotować: zebranie założycielskie, projekt statutu oraz projekty potrzebnych uchwał. Na zebraniu założycielskim po
            przedstawieniu celu, założeń działalności oraz sylwetki i działalności charytatywnej św.księdza Zygmunta Gorazdowskiego,projektu statutu wybrano: Zarząd Główny, Główną Komisję
            Rewizyjną,Sąd Koleżeński oraz trzy osobowy Komitet Założycielski w skład, którego weszli: Andrzej Kędra, Agnieszka Drozd,Alina Pęcak.Zadaniem tego komitetu było przygotowanie niezbędnych
            dokumentów do zarejestrowania Stowarzyszenia w Rejonowym Sądzie Rejestrowym – krajowego Rejestru w Rzeszowie.
          </p>
          <p>
            Prowadzimy różne formy działalności, organizacja Pikników Rodzinnych, mikołajki dla dzieci, wycieczki dla seniorów, zbiórki żywności, organizowanie spotkań z ciekawymi ludźmi, a także
            “Poradnię dla rodzin w kryzysie”. Od 2016 roku szczególną troską objęliśmy osoby starsze, często chore i samotne. Realizując projekty w ramach rządowego programu ASOS takie jak “Aktywny i
            szczęśliwy senior” czy “Wspólnie przywracamy godność i wartość życia” stworzyliśmy wspólnotę, a także bezpieczną przestrzeń dla osób po 80-tym roku życia, które często ze względu na stan
            fizyczny bądź psychiczny rzadko lub wcale nie wychodziły z domu. Nasi podopieczni mieli dostęp do pomocy psychologa, instruktora ćwiczeń czy kosmetyczki.
          </p>
        </ArticleText>
      </ArticleWrapper>
      <ArticleFooter>
        <p>
          Stowarzyszenie zostało zarejestrowane w dniu 15 kwietnia 2008 roku pod numerem: <strong>0000303867</strong>. Na zebraniu walnym 02.09.2008 r. postanowiono uchwałą przystąpić do Organizacji
          Pożytku Publicznego. W sądzie złożono stosowne dokumenty i z dniem 05.03.2009r. jesteśmy zarejestrowani jako Organizacja Pożytku Publicznego.
        </p>
        <img src={oppLogo} alt="OPP" />
      </ArticleFooter>
      <ReadMoreLink>
        Wiecej na temat patrona Stowarzyszenia <FaArrowRight />
      </ReadMoreLink>
      <FlexWrapper>
        <ModalOpen id="status" onClickCapture={handleOpenModalDetails}>
          <BiBookmark />
          <span>
            Statut <br /> Stowarzyszenia
          </span>
        </ModalOpen>
        <ModalOpen id="authority" onClick={handleOpenModalDetails}>
          <BsPeople />
          <span>
            Władze <br /> Stowarzyszenia
          </span>
        </ModalOpen>
        <ModalOpen id="financialReport" onClick={handleOpenModalDetails}>
          <RiFilePaperLine />
          <span>
            Sprawozdanie <br /> Finansowe
          </span>
        </ModalOpen>
      </FlexWrapper>
    </Container>
  );
};

export default About;
