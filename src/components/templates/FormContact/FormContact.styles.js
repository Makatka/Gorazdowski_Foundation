import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 100px 0;
  gap: 30px;
  padding: 50px;
  box-shadow: 0 10px 20px 0 rgba(0, 41, 124, 0.1);

  form {
    width: 50%;
  }

  textarea {
    width: 100%;
    margin-top: 25px;
    color: ${({ theme }) => theme.colors.textDark};
    padding: 15px;
    font-family: ${({ theme }) => theme.fonts.textFont};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button {
    background-color: ${({ theme }) => theme.colors.buttonDark};
    margin-top: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.button};
      border: 1px solid ${({ theme }) => theme.colors.button};
    }

    svg {
      margin-left: 10px;
    }
  }
`;

export const AddressWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textSemiLight};
  padding: 0 20px;
  width: 50%;

  p {
    line-height: 32px;
    font-size: 16px;
    margin: 50px 0 16px 0;
  }

  ul {
    margin-top: 40px;
    padding-inline-start: 5px;

    li {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      position: relative;
     

      &:after {
        content: '';
        width: 32px;
        height: 32px;
        position: absolute;
        top: -6px;
        left: -8px;
        border: 2px solid ${({ theme }) => theme.colors.action};
        border-radius: 50%;
        display: block;
      }

        span {
          margin-left: 30px;
        }

        svg {
          font-weight: normal;
        }
      }
    }
  }
`;
export const StyledHeader = styled.h2`
  margin-top: 0;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.textFont};
  font-weight: 500;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.textDark};
`;
