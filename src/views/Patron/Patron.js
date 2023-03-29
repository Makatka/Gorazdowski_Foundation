import { ReadMoreLink, ArticleText } from '../About/About.styles';
import { ArticleWrapper } from './Patron.styles';
import { Container } from '../Root.styles';
import Calendar from 'components/organisms/Calendar/Calendar';
import origin from 'assets/img/gorazdowski_dziecinstwo.jpg';
import creation from 'assets/img/katechizm.jpg';
import rest from 'assets/img/gorazdowski_nagrobek.jpg';
import activity from 'assets/img/gorazdowski_black.jpg';
import { useState } from 'react';

const PatronStyles = () => {
  const [readMore, setReadMore] = useState(true);

  const handleMore = () => setReadMore(!readMore);

  return (
    <Container>
      <ArticleWrapper>
        <img src={origin} alt="Dzieciństwo" />
        <ArticleText>
          <h5>Pochodzenie</h5>
          <p>
            Ksiądz Zygmunt Gorazdowski urodził się 1 listopada 1845r w Sanoku w rodzinie szlacheckiej. Syn Feliksa i Aleksandry z Łazowskich. Na chrzcie w dniu 9 listopada, który odbył się w Sanoku w
            kościele O.O. Franciszkanów, nadano mu imiona: Zygmunt Karol. Oboje rodziców Zygmunta ceniono jako ludzi zacnych, prawdziwych patriotów, inteligentnych.
          </p>
          <p>
            Jako gimnazjalista bierze udział w Powstaniu Styczniowym w 1863r. Studiował na uniwersytecie im. Jana Kazimierza we Lwowie na wydziale prawniczym.
            <strong>W 1865r zmienia kierunek studiów i wstępuje do Wyższego Seminarium Duchownego we Lwowie. </strong>
          </p>
        </ArticleText>
      </ArticleWrapper>
      <ArticleWrapper>
        <ArticleText>
          <h5>Działalność</h5>
          <p>
            Święcenia kapłańskie otrzymał Katedrze Lwowskiej 25 lipca 1871r z rąk abpa Franciszka Ksawerego Wierzchlewskiego. Już w pierwszym okresie swego kapłańskiego życia dał się poznać, jako
            człowiek posiadający charyzmat pracy duszpasterskiej i charytatywnej.
          </p>
          <p>
            <strong>
              Pracował w różnych miejscowościach: w Tartakowi, Wojniłowie, Bukaczowcach, Gródku Jagielońskim, Żydaczowie. W tych miejscowościach pełnił funkcję wikarego i administratora. W 1877 r
              zostaje przeniesiony do Lwowa.
            </strong>
            Początkowo pracuje w parafii pod wezwaniem Świętego Marcina oraz w parafii Matki Bożej Śnieżnej. Najdłużej, bo około 40lat pracował w parafii Świętego Mikołaja we Lwowie. Obok pracy
            duszpasterskiej angażował się również w pracę wydawniczą, redaktorską
          </p>
        </ArticleText>
        <img src={activity} alt="Z.Gorazdowski" />
      </ArticleWrapper>
      <ArticleWrapper>
        <img src={creation} alt="Katechizm KK" />
        <ArticleText>
          <h5>Twórczość</h5>
          <p>
            Wydał kilka edycji „Katechizmu”, opracował katolickie zasady wychowania dla rodziców i wychowawców. Dla księży wydał czasopismo „Bonus Pastor”. Z niezwykła gorliwością apostolską
            podejmował wciąż to nowe dzieła na rzecz ludzi potrzebujących pomocy. We Lwowie założył: „Dom Pracy Dobrowolnej Dla Żebraków”, „Tanią Kuchnię Ludową”, „Zakład Świętego Józefa dla
            Nieuleczalnie Chorych i Rekonwalescentów”, „Zakład Dzieciątka Jezus”, „Internat Świętego Jozafata” dla studentów, „Katolicką Polsko-Niemiecką” szkołę dla młodzieży. Do prowadzenia
            powyższych dzieł powołał <strong>Zgromadzenie Sióstr Świętego Józefa.</strong> Jego świadkowie za życia mówili: „Tyle dzieł stworzyć i utrzymać, mogła tylko dusza miłująca Boga”.
          </p>
        </ArticleText>
      </ArticleWrapper>
      <ArticleWrapper>
        <ArticleText>
          <h5>Miejsce spoczynku</h5>
          <p>
            Ksiądz Gorazdowski zmarł w opinii świętości we Lwowie 1 stycznia 1020r.Dnia 26 czerwca 2001r we Lwowie ksiądz Zygmunt Gorazdowski został beatyfikowany przez Ojca Świętego Jana Pawła II, a
            kanonizowany przez Ojca Świętego Benedykta XVI 23 października 2005r w Rzymie.
            <strong>
              Z dniem 15 października 2008r Święty ksiądz Zygmunt Gorazdowski został współpatronem miasta Sanoka. Liturgiczne wspomnienie świętego Księdza Zygmunta Gorazdowskiego przypada 26 czerwca.
            </strong>
          </p>
          <p>
            <strong>Dewizą życiową Świętego Księdza Zygmunta Gorazdowskiego było: „Być wszystkim dla wszystkich, aby zbawić choć jednego”</strong>
          </p>
        </ArticleText>
        <img src={rest} alt="Nagrobek Z.Gorazdowskiego" />
      </ArticleWrapper>
      {readMore ? <Calendar /> : null}
      {readMore ? <ReadMoreLink onClick={handleMore}>Zwiń kalendarium</ReadMoreLink> : <ReadMoreLink onClick={handleMore}>Rozwiń kalendarium</ReadMoreLink>}
    </Container>
  );
};

export default PatronStyles;
