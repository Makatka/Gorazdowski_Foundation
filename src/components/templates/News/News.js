import React, { useEffect, useState } from 'react';
import MainNews from 'components/molecules/MainNews/MainNews';
import articles from 'assets/articles/articles.js';
import NewsItem from 'components/molecules/NewsItem/NewsItem';
import { Wrapper, SectionTitleStyles, ArticlesWrapper } from './News.styles';
import stemp from 'assets/img/two-hands-heart-min.png';
import shortid from 'shortid';
import { Container } from '../../../views/Root.styles';

const News = () => {
  const [mainArticles, setMainArticles] = useState([]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i <= 3; i++) {
      array.push(articles[i]);
    }
    setMainArticles(array);
  }, []);

  return (
    <Wrapper>
      <Container>
        <SectionTitleStyles>
          <h4>Wydarzenia & Artykuły</h4>
          <img src={stemp} alt="Two hand and heart" />
          <h2>Aktualności</h2>
        </SectionTitleStyles>
        <ArticlesWrapper>
          <MainNews image={articles[0].image} title={articles[0].title} date={articles[0].date} />
          <div>
            {mainArticles.map((item) => (
              <NewsItem key={shortid()} image={item.image} title={item.title} date={item.date} />
            ))}
          </div>
        </ArticlesWrapper>
      </Container>
    </Wrapper>
  );
};

export default News;
