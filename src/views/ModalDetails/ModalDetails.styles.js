import styled from 'styled-components';

export const ModalDetailsWrapper = styled.article`
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 20px;
  flex-grow: 1;

  h5 {
    margin: 40px 0 15px 0;
    color: ${({ theme }) => theme.colors.button};
    text-transform: uppercase;
    font-size: 16px;
  }

  ul li {
    margin: 12px 0;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textDark};
      font-size: 20px;
      line-height: 35px;

      &:hover {
        color: ${({ theme }) => theme.colors.buttonDark};
      }
    }
  }
  p {
    color: #646464;
    line-height: 29px;
  }
  .paragraph-number {
    text-align: center;
    color: ${({ theme }) => theme.colors.textDark};
    font-weight: 500;
  }
`;
