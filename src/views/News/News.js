import React, { useState, useEffect } from 'react';
import { Container } from '../Root.styles';
import NewsItem from '../../components/molecules/NewsItem/NewsItem';
import shortid from 'shortid';

import { NewsStyles } from './News.sytles';
import axios from 'axios';

const API_TOKEN = '362eb1b6105b1e02cfaaf178b1b36a';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        ' https://graphql.datocms.com/',
        {
          query: `{
  allArticles {
    id
    title
    subtitle
    content {
      value
    }
    date
    localisation
    header
    image {
      url
      alt
    }
    miniature {
      url
      alt
    }
  }
}
`,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Container>
      <NewsStyles>
        {articles.map((item) => (
          <NewsItem
            key={item.id}
            miniature={item.miniature}
            title={item.title}
            header={item.header}
            date={item.date}
            subtitle={item.subtitle}
            content={item.content}
            localisation={item.localisation}
          />
        ))}
      </NewsStyles>
    </Container>
  );
};

export default News;
