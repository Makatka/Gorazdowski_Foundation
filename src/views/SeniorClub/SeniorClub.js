import React from 'react';
import { ArticleText, ArticleSubtitle } from 'views/About/About.styles';
import { SeniorArticleWrapper } from './SeniorClub.styles';
import { Container } from 'views/Root.styles';
import articleImage from '../../assets/img/senior_mini.webp';
import gaming from '../../assets/img/niezapominajka.webp';

const SeniorClub = () => {
  return (
    <Container>
      <SeniorArticleWrapper>
        <img className="articleImage" src={articleImage} alt="Aktywny senior" />

        <ArticleText>
          <h5>O KLUBIE SENIORA</h5>
          <h3>Klub Niezapominajka</h3>
          <ArticleSubtitle>Przy Stowarzyszeniu Pomoc Rodzinie im. Św. Ks. Zygmunta Gorazdowskiego w Sanoku powstał Klub Seniora “NIEZAPOMINAJKA”.</ArticleSubtitle>
          <p>
            Od 2016 roku szczególną troską objęliśmy osoby starsze, często chore i samotne. Klub Seniora jest to format pozwalający na organizację zajęć w postaci spotkań towarzyskich, wspólne
            oglądanie filmów, gry planszowe, zajęcia taneczne, zajęcia ruchowe, nauka języka angielskiego, a także jednodniowe wycieczki autokarowe. Nasze działania opierają się także na realizacji
            projektów w ramach rządowego programu ASOS takie jak <strong>“Aktywny i szczęśliwy senior”</strong> czy <strong>“Wspólnie przywracamy godność i wartość życia”</strong> stworzyliśmy
            wspólnotę, a także bezpieczną przestrzeń dla osób po 80-tym roku życia, które często ze względu na stan fizyczny bądź psychiczny rzadko lub wcale nie wychodziły z domu. Nasi podopieczni
            mieli dostęp do pomocy psychologa, instruktora ćwiczeń czy kosmetyczki.
          </p>
          <p>
            Samotność rodzi przykre i bolesne przeżycia, doświadczenia głębokiego smutku. Spotkania z psychologiem pozwoliły na poprawę samopoczucia i otwartość na drugiego człowieka. Wspólne rozmowy
            umożliwiły zawiązanie szerszych kontaktów i przyjaźni. Wspólne spotkanie przy posiłku podopiecznych z wolontariuszami pomagają w zacieraniu barier nieufności i podejrzliwości w stosunku do
            innych ludzi.
          </p>
        </ArticleText>
      </SeniorArticleWrapper>
      <SeniorArticleWrapper>
        <img className="articleImage" src={gaming} alt="Stacja Planszówki" />
        <ArticleText>
          <h5>MIEJSCE SPOTKAŃ DLA WSZYSTKICH</h5>
          <h3>Stacja Planszówki</h3>
          <ArticleSubtitle>Przy klubie Niezapominajka powstał pierwszy w Sanoku klub gier planszowych.</ArticleSubtitle>
          <p>
            "Stacja Planszówki" powstała w klubie „Niezapominajka”, jaki w budynku dawnej stacji PKP Sanok Miasto, prowadzi Stowarzyszenie im.św.ks. Gorazdowskiego. Pomysł utworzenia klubu wsparli
            najwięksi wydawcy gier planszowych w Polsce. Dzięki grom logicznym osoby w podeszłym wieku mogą pracować nad właściwym kojarzeniem faktów i ich analizowaniem. Tego typu gry ćwiczą
            spostrzegawczość, kształcą w graczach często zdolności kooperacyjne, a nawet umiejętności przestrzennego myślenia. Kluby gier planszowych to miejsca gdzie nie tylko przychodzimy pograć,
            ale także spotkać się ze znajomymi lub poznać nieznajomych.
          </p>
          <p>
            Pragniemy by to było miejsce spotkań dla wszystkich, dlatego wybór gier jest bardzo szeroki. Na półkach znalazły się zarówno gry logiczne dla tych, którzy lubią szachy, jak i szybkie,
            emocjonujące, nowoczesne planszówki i gry karciane. Również ci mieszkańcy Sanoka, którzy mają już w domu kolekcję gier mogą wpaść na Stację Plaszówki żeby poznać nowe tytuły, zagrać,
            sprawdzić czy to fajna zabawa. Do klubu można też zabrać własną grę, do której brakuje nam graczy. Każdy może wziąć ze sobą grę, którą ma w domu, a do której brakuje mu graczy i spotkać
            ich na dawnej stacji PKP Sanok Miasto przy ul Grunwaldzkiej 17.
          </p>
        </ArticleText>
      </SeniorArticleWrapper>
    </Container>
  );
};

export default SeniorClub;
