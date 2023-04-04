import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Card, CardText, ArticleDate, CardTitle, CardImage } from './NewsItem.styles';

const NewsItem = ({ miniature, localisation, date, title, content }) => {
  debugger;
  console.log(content.value.document.children);
  return (
    <Card>
      <CardImage src={miniature.url} alt={miniature.alt} />
      <CardText>
        <CardTitle>{title}</CardTitle>

        <ArticleDate>
          <AiOutlineCalendar />
          <span>{localisation}</span>
          <span>{date}</span>
        </ArticleDate>
      </CardText>
    </Card>
  );
};

export default NewsItem;
