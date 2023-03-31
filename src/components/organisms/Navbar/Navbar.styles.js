import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: 10;
  position: relative;
  margin-top: 10px;
  border-radius: 3px;
  box-shadow: 0px 33px 0px -24px rgba(26, 47, 75, 0.5);
  margin-bottom: 50px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  height: 60px;
`;

export const Navigation = styled.ul`
  display: inline-flex;
  text-transform: uppercase;

  li {
    margin-right: 30px;
    &,
    a {
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      position: relative;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};

      &.active {
        color: ${({ theme }) => theme.colors.action};
        border-bottom: 1px solid ${({ theme }) => theme.colors.action};
      }
      &:hover {
        color: ${({ theme }) => theme.colors.action};
      }
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
