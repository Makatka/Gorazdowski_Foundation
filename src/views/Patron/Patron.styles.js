import styled from 'styled-components';

export const ArticleWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;

  &:first-of-type {
    padding-top: 50px;
  }

  &:nth-of-type(even) {
    img {
      margin-left: 30px;
    }
  }
  &:nth-of-type(odd) {
    img {
      margin-right: 30px;
    }
  }

  img {
    height: 250px;
    width: auto;
  }

  p {
    color: ${({ theme }) => theme.colors.textSemiLight};
    line-height: 29px;
  }
`;
