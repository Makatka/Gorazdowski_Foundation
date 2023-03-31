import styled from 'styled-components';
import { ArticleWrapper } from 'views/About/About.styles';

export const SeniorArticleWrapper = styled(ArticleWrapper)`
  display: block;
  .articleImage {
    float: left;
  }

  h5 {
    display: flex;
  }

  &:last-of-type {
    .articleImage {
      float: right;
      margin: 0 0 35px 35px;
      max-height: 700px;
    }
  }
`;
