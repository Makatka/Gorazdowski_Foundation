import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 100px;
  background-color: #f6f6f6;
  padding: 80px 0 20px 0;
`;

export const SectionTitleStyles = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h4 {
    font-family: ${({ theme }) => theme.fonts.textFont};
    font-size: 24px;
    font-weight: 500;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.serifFont};
    font-size: 39px;
    margin-top: -80px;
  }

  img {
    position: relative;
    width: 60px;
    height: 59px;
    top: -75px;
    left: 0;
    opacity: 0.1;
    margin-bottom: 40px;
  }
`;
export const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;
