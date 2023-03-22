import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 350px;
  padding: 15px 15px;
  border-radius: 5px;
  text-align: center;

  &:hover a > div {
    background-color: ${({ theme }) => theme.colors.buttonDark};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  a {
    text-decoration: none;
  }

  h3 {
    color: ${({ theme }) => theme.colors.dark};
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: bold;
    margin-top: 30px;
  }
  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 28px;
  }

  span {
    color: ${({ theme }) => theme.colors.buttonDark};
    text-align: right;
    display: block;
    width: 100%;
  }
`;
