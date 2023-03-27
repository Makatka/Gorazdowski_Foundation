import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

import { ArticleDate, Card, CardText, CardTitle, CardImage } from '../MainNews/MainNews.styles';

const MainNewsStyles = ({ image, title, date }) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <ArticleDate>
          <AiOutlineCalendar />
          {date}
        </ArticleDate>
      </CardText>
    </Card>
  );
};

export default MainNewsStyles;
