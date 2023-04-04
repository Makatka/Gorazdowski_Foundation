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
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:first-of-type {
    display: none;
  }

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 41, 124, 0.1);
    scale: 1.01;
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
  width: 65%;

  & > p {
    line-height: 1.6;
    color: #646464;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    flex-grow: 1;
  }
`;
export const CardTitle = styled.h4`
  color: #393939;
  font-size: 25px;
  font-family: 'Noto Serif', serif;
  line-height: 1.3;
  flex-grow: 1;
  margin: 0 0 14px 0;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  &:hover {
    color: black;
  }
`;
export const ArticleDate = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  bottom: 0;
  right: 0;
  width: 100%;
  align-items: center;
  justify-content: start;
  span {
    margin: 0 8px;
    font-size: 14px;
  }
`;
