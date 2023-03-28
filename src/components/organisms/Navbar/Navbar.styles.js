import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.dark};

  margin-top: 20px;
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
`;

export const StyledLink = styled.li`
  margin-right: 30px;
  &,
  a {
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      color: ${({ theme }) => theme.colors.action};
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
