import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 100px;
  background-color: #f6f6f6;
  padding: 60px 0 20px 0;
`;

export const SectionTitleStyles = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h4 {
    font-family: ${({ theme }) => theme.fonts.textFont};
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 24px;
    font-weight: 400;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.serifFont};
    color: ${({ theme }) => theme.colors.textDark};
    font-size: 39px;
    margin-top: -80px;
    font-weight: 500;
  }

  img {
    position: relative;
    width: 60px;
    height: 59px;
    top: -75px;
    left: 0;
    opacity: 0.1;
    margin-bottom: 25px;
  }
`;
export const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

export const SeeMoreLink = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 30px 0 20px 0;
  gap: 8px;
  color: ${({ theme }) => theme.colors.buttonDark};
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    text-decoration: underline;
  }
`;
