import React from 'react';
import { ArticleWrapper, ArticleText, ArticleSubtitle } from './About.styles';

import articleImage from 'assets/img/senior_mini.webp';

const ArticleItem = ({ children }) => {
  return (
    <ArticleWrapper>
      <img src={articleImage} alt="Aktywny senior" />
      <ArticleText>
        <h5>O KLUBIE SENIORA</h5>
        <h3>Klub Niezapominajka</h3>
        <ArticleSubtitle>Przy Stowarzyszeniu Pomoc Rodzinie im. Św. Ks. Zygmunta Gorazdowskiego w Sanoku powstał Klub Seniora “NIEZAPOMINAJKA”.</ArticleSubtitle>
        <p>
          Od 2016 roku szczególną troską objęliśmy osoby starsze, często chore i samotne. Klub Seniora jest to format pozwalający na organizację zajęć w postaci spotkań towarzyskich, wspólne oglądanie
          filmów, gry planszowe, zajęcia taneczne, zajęcia ruchowe, nauka języka angielskiego, a także jednodniowe wycieczki autokarowe. Nasze działania opierają się także na realizacji projektów w
          ramach rządowego programu ASOS takie jak <strong>“Aktywny i szczęśliwy senior”</strong> czy <strong>“Wspólnie przywracamy godność i wartość życia”</strong> stworzyliśmy wspólnotę, a także
          bezpieczną przestrzeń dla osób po 80-tym roku życia, które często ze względu na stan fizyczny bądź psychiczny rzadko lub wcale nie wychodziły z domu. Nasi podopieczni mieli dostęp do pomocy
          psychologa, instruktora ćwiczeń czy kosmetyczki.
        </p>
        <p>
          Samotność rodzi przykre i bolesne przeżycia, doświadczenia głębokiego smutku. Spotkania z psychologiem pozwoliły na poprawę samopoczucia i otwartość na drugiego człowieka. Wspólne rozmowy
          umożliwiły zawiązanie szerszych kontaktów i przyjaźni. Wspólne spotkanie przy posiłku podopiecznych z wolontariuszami pomagają w zacieraniu barier nieufności i podejrzliwości w stosunku do
          innych ludzi.
        </p>
      </ArticleText>
    </ArticleWrapper>
  );
};

export default ArticleItem;
