import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContactWrapper = styled.ul`
  display: inline-flex;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    font-size: 14px;

    &:first-of-type {
      border-right: 2px solid ${({ theme }) => theme.colors.action};
      margin-right: 25px;
    }

    span {
      margin-left: 15px;
    }
  }
`;

export const ActionLink = styled.div`
  display: flex;

  a {
    white-space: nowrap;
    padding: 10px 20px;
    width: auto;
    height: 60px;
    margin: 0;
    text-transform: uppercase;
    font-size: 14px;
    transition: all 0.5s ease;

    &:first-of-type {
      background-color: transparent;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.action};
      color: ${({ theme }) => theme.colors.textDark};
    }
  }
`;
