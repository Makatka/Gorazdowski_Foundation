import styled from 'styled-components';
import { ArticleWrapper } from '../About/About.styles';

export const CirclesArticleWrapper = styled(ArticleWrapper)`
  display: block;

  .articleImage {
    float: left;
  }

  h5 {
    display: flex;
  }

  &:nth-of-type(2) {
    .articleImage {
      float: right;
      width: 400px;
      margin: 0 0 35px 35px;
      max-height: 700px;
    }
  }

  &:last-of-type {
    margin-bottom: 100px;
  }
`;
