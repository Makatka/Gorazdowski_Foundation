import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Card, CardText, ArticleDate, CardTitle, CardImage } from './NewsItem.styles';

const NewsItem = ({ image, title, subtitle = null, date }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <p>{subtitle}</p>
        <ArticleDate>
          <AiOutlineCalendar />
          <p>{date}</p>
        </ArticleDate>
      </CardText>
    </Card>
  );
};

export default NewsItem;
