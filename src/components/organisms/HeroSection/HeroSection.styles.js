import styled from 'styled-components';
import image from '../../../assets/img/hero1.jpeg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 700px;
  background-image: url(${image});
  background-size: cover;
  margin-bottom: 100px;
  background-position: center;
  position: relative;
  margin-top: -154px;

  button {
    background-color: ${({ theme }) => theme.colors.buttonDark};
    border-color: ${({ theme }) => theme.colors.buttonDark};
    margin-top: 30px;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(135, 198, 155, 0.51), rgba(47, 136, 134, 0.51));
  height: 100%;
  padding-top: 154px;
`;
export const HeroText = styled.div`
  text-align: center;
  align-items: center;
  padding-top: 70px;
  color: #fff;
  margin-bottom: 50px;
  p {
    font-size: 28px;
  }

  h1 {
    font-family: 'Noto Serif', serif;
    font-size: 55px;
    margin-bottom: 20px;
  }

  h1,
  p {
    text-shadow: 0 1px 10px rgba(40, 71, 92, 1);
  }
`;
