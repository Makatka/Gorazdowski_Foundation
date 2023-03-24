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
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 29px;
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

export const InfoIconStyles = styled(CardIconStyles)`
  background-color: #fff;
  margin: 0;
  height: 55px;
  width: 43px;
`;
