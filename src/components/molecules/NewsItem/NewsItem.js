import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Card, CardText, ArticleDate, CardTitle, CardImage, Content } from './NewsItem.styles';
import { render } from 'datocms-structured-text-to-html-string';

const NewsItem = ({ miniature, localisation, date, title, content, id, subtitle }) => {
  const articleContent = render(content.value);
  return (
    <Card>
      <CardImage src={miniature.url} alt={miniature.alt} />
      <CardText>
        <CardTitle>{title}</CardTitle>

        {articleContent ? (
          <Content>
            <p>{subtitle}</p>
          </Content>
        ) : (
          <Content as="div" dangerouslySetInnerHTML={{ __html: articleContent }} />
        )}
        <ArticleDate>
          <AiOutlineCalendar />
          <div>
            <span>{localisation}</span>
            <span>{date}</span>
          </div>
          <span>Czytaj dalej...</span>
        </ArticleDate>
      </CardText>
    </Card>
  );
};

export default NewsItem;
