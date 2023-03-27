import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  border: 1px solid #dddfe1;
  border-radius: 5px;
  background-color: #fff;
  height: 207px;
  margin: 10px 0 20px 0;

  &:first-of-type {
    display: none;
  }

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 41, 124, 0.1);
  }
`;
export const CardImage = styled.img`
  height: 100%;
  width: 30%;
  object-fit: cover;
  margin-right: 20px;
`;
export const CardText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const CardTitle = styled.h4`
  color: #393939;
  font-size: 25px;
  font-family: 'Noto Serif', serif;
  line-height: 1.3;
  margin: 0;
  flex-grow: 1;
`;
export const ArticleDate = styled.div`
  color: #646464;
  display: flex;
  bottom: 0;
  right: 0;
  width: 100%;
  align-items: center;
  p {
    margin: 0 8px;
    font-size: 14px;
  }
`;
