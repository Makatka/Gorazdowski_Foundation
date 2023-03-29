import React from 'react';
import { Container } from '../Root.styles';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import shortid from 'shortid';
import articles from 'assets/articles/articles.js';
import { NewsStyles } from './News.sytles';

const News = () => {
  return (
    <Container>
      <NewsStyles>
        {articles.map((item) => (
          <NewsItem key={shortid()} image={item.image} title={item.title} date={item.date} subtitle={item.subtitle} />
        ))}
      </NewsStyles>
    </Container>
  );
};

export default News;
