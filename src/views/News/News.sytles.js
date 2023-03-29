import styled from 'styled-components';

export const NewsStyles = styled.article`
  max-width: 800px;
  margin: 50px auto;

  & > div {
    height: 220px;

    img {
      object-fit: cover;
      object-position: center;
      margin-right: 20px;
      max-width: 30%;
    }
  }
`;
