import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

import { ArticleDate, Card, CardText, CardTitle, CardImage } from './MainNews.styles';

const MainNewsStyles = ({ image, title, date }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <ArticleDate>
          <AiOutlineCalendar />
          <p>{date}</p>
        </ArticleDate>
      </CardText>
    </Card>
  );
};

export default MainNewsStyles;
