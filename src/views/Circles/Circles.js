import React from 'react';
import { Container } from '../Root.styles';
import { CirclesArticleWrapper } from './Circles.styles';
import help from '../../assets/img/pomoc3.webp';
import circle from '../../assets/img/krag_snk.jpg';
import { ArticleSubtitle, ArticleText } from '../About/About.styles';

const Circles = () => {
  return (
    <Container>
      <CirclesArticleWrapper>
        <img className="articleImage" src={help} alt="pomoc" />

        <ArticleText>
          <h5>O KRĘGACH</h5>
          <h3>Wszelka działalność charytatywna odbywa się w Kręgu.</h3>
          <ArticleSubtitle>Krąg jest najmniejszą i podstawową komórką Stowarzyszenia. W 2008r powstało dwa Kręgi: w Nowosielcach i w Sanoku.</ArticleSubtitle>
          <p>
            Naczelną władzą Kręgu jest Walne Zebranie Członków Kręgu. Zarząd Kręgu organizuje i prowadzi działalność charytatywną na rzecz rodziny zwłaszcza dzieci i młodzieży. Nad całością
            działalności Kręgu czuwa Komisja Rewizyjna Kręgu, a Sąd Koleżeński dba o właściwą atmosferę pracy i wśród członków.
          </p>
          <p>Kręgi potrzebują wielu życzliwych i otwartych serc oraz rąk do pracy. Przyjdź do biura, wypełnij deklarację i zostań członkiem.</p>
          <p>
            <strong>Każda Twoja pomoc będzie mile widziana: materialna, pieniężna i modlitewna.</strong>
          </p>
        </ArticleText>
      </CirclesArticleWrapper>
      <CirclesArticleWrapper>
        <img className="articleImage" src={circle} alt="Krąg Sanocki" />

        <ArticleText>
          <h5>KRĄG SANOCKI</h5>
          <h3>Krąg sanocki został powołany przez Zarząd Główny Stowarzyszenia, zgodnie z postanowieniami statutu.</h3>

          <p>
            Pierwsze zebranie Kręgu odbyło się 20 sierpnia 2008 roku. W tym dniu dokonano wyboru władz Kręgu, tzn. zarządu, komisji rewizyjnej i sądu koleżeńskiego. Na koniec 2008 roku Krąg liczył 34
            członków.
          </p>

          <p>
            <strong>Celami Kręgu są:</strong>
          </p>
          <p>Upowszechnienie wiedzy o św. ks. Zygmuncie Gorazdowskim, jego charyzmacie i dziełach dobroczynnych.</p>
          <p>
            Pomoc rodzinom wielodzietnym, w szczególności ich dzieciom. Pozyskiwanie aktywnych osób do pracy w regionie i umożliwienie im działań wolontarystycznych w obronie rodziny, i potrzebującym
            pomocy.
          </p>
          <p>Podnoszenie świadomości macierzyństwa, odpowiedzialności za wychowywanie dzieci, dbanie o ich właściwy rozwój, kształtowanie ich osobowości.</p>
          <p>Pomoc dzieciom opuszczonym i zaniedbanym w nauce. Pomoc materialna potrzebującym, w miarę posiadanych środków. Pomoc osobom w starszym wieku i niepełnosprawnym.</p>
          <p>
            <strong>Nasze dobroczynne dzieła:</strong>
          </p>
          <p>
            Św. Mikołaj 2008 rok Dostarczenie paczek żywnościowych przed świętami Bożego Narodzenia dla 11 rodzin Bieżące pozyskiwanie żywności, środków czystości i przekazywanie potrzebującym Zakup
            biletów miesięcznych dla młodzieży dojeżdżającej do szkoły Opłata za obowiązkowe praktyki uczniów Droga pod Reglami
          </p>
          <p>
            <strong>Pielgrzymki: </strong>Kalwaria Pacławska, Zakopane, Lwów
          </p>
        </ArticleText>
      </CirclesArticleWrapper>
      <CirclesArticleWrapper>
        <ArticleText>
          <h5>KKRĄG NOWOSIELSKI</h5>
          <h3>Krąg Stowarzyszenia Pomoc Rodzinie im. św. ks. Zygmunta Gorazdowskiego w Nowosielcach pow. Sanocki powstał 03. 07. 2008r.</h3>

          <p>
            Wybrano władze Kręgu: Zarząd Kręgu, Komisję Rewizyjną, Sąd Koleżeński. Głównym celem Kręgu oprócz ogólnych zadań statutowych Stowarzyszenia jest pomoc rodzinom wielodzietnym, a w
            szczególności ich dzieciom i młodzieży. Krąg liczy 26 członków, którzy całym sercem są oddani w działaniu na rzecz drugiemu człowiekowi będącemu w potrzebie oraz integracji pokoleń.
          </p>

          <p>
            <strong>W imprezach integracyjnych takich jak:</strong>
          </p>
          <p>„Andrzejkowy wieczór wspomnień”</p>
          <p>„Biesiada z pieczonym ziemniakiem”</p>
          <p>„Spotkania opłatkowe”</p>
          <p>„Bale maskowe”dla dzieci z okazji Dnia Dziecka, a które weszły na stałe do kalendarza imprez Kręgu-biorą udział całe rodziny pokoleniowe.</p>
          <p>
            Rodzinom oferujemy:
            <strong> meble, sprzęt gospodarstwa domowego, odzież (używaną, ale w dobrym stanie), żywność, środki czystości.</strong>
          </p>
          <p>
            Dla dzieci organizujemy: bale maskowe z okazji Dnia Dziecka, zabawy na świeżym powietrzu, wycieczki do lasu(np. szukanie wiosny). Czynimy to podczas wakacji i ferii, aby dać dzieciom
            trochę radości i zadowolenia oraz uzupełnienia wiedzy szkolnej.
          </p>
          <p>
            <strong>Organizujemy także spotkania modlitewne w Kościele parafialnym lub w środowisku domowym, a także piesze pielgrzymki do Relikwii Św. Andrzeja Boboli w Strachocinie. </strong>
          </p>
        </ArticleText>
      </CirclesArticleWrapper>
    </Container>
  );
};

export default Circles;
