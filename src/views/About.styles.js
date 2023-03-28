import styled from 'styled-components';
import React from 'react';

export const ArticleWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  width: 100%;

  & > img {
    margin-right: 35px;
    width: 45%;
    height: auto;
    object-fit: cover;
  }

  p {
    color: ${({ theme }) => theme.colors.textSemiLight};
    line-height: 29px;
  }
`;
export const ArticleText = styled.div`
  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.2;
  }
  h5 {
    text-transform: uppercase;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.button};
    font-weight: 400;
    display: block;
    position: relative;
    margin: 2px 0 0 0;
    padding-left: 5px;

    &:before {
      content: '';
      height: 20px;
      width: 1.5px;
      background-color: ${({ theme }) => theme.colors.button};
      position: absolute;
      top: -2px;
      left: -3px;
    }
  }
`;
export const ArticleSubtitle = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.backgroundDark};
  margin: 30px 0;
`;
export const ArticleFooter = styled.div`
  margin-bottom: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSemiLight};
  line-height: 29px;

  img {
    width: 150px;
  }
`;
export const ReadMoreLink = styled.a`
  color: ${({ theme }) => theme.colors.button};
  text-align: center;
  width: 100%;
  display: block;
  margin-bottom: 50px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 100px;

  & > div:first-of-type:after {
    background-color: ${({ theme }) => theme.colors.dark};
  }
  & > div:last-of-type:after {
    background-color: ${({ theme }) => theme.colors.action};
  }
`;
