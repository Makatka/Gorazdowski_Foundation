import styled from 'styled-components';
import mainImage from '../../../assets/img/opieka1_1440px.webp';
import { CardIconStyles } from '../../atoms/CardIconStyles/CardIconStyles';

export const Wrapper = styled.section`
  margin-top: 100px;
  height: 710px;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  h2 {
    margin-top: 0;
    margin-bottom: 50px;
    text-align: left;
  }

  h3 {
    margin-top: 0;
    font-family: ${({ theme }) => theme.fonts.textFont};
    font-size: 24px;
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.colors.textSemiLight};
    line-height: 29px;
  }

  svg {
    color: ${({ theme }) => theme.colors.button};
    margin: 20px 0 10px 10px;
    height: 55px;
    width: 43px;
  }

  button {
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.dark};
    font-size: 13px;
    height: 60px;
    margin-bottom: 50px;
    font-weight: 700;

    &:hover {
      filter: brightness(0.9);
    }

    &:first-of-type {
      background-color: ${({ theme }) => theme.colors.button};
      margin-right: 20px;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
export const SectionImage = styled.div`
  background-image: url(${mainImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
