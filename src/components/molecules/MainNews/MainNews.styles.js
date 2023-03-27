import styled from 'styled-components';
export const CardText = styled.div`
  position: absolute;
  display: flex;
  padding: 25px 20px;
  justify-content: space-between;
  flex-direction: column;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 100%;
  height: 30%;
  color: #fff;
  transition: 0.5s ease;
`;
export const Card = styled.div`
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  padding: 0;

  &:hover ${CardText} {
    height: 30%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.h4`
  font-size: 25px;
  font-family: 'Noto Serif', serif;
  line-height: 1.3;
  color: #fff;
`;
export const ArticleDate = styled.span`
  position: absolute;
  padding: 25px 20px;
  bottom: 0;
  left: 0;
  color: #fff;
  display: inline-flex;
  align-items: center;

  p {
    margin: 0 0 0 8px;
  }
`;
