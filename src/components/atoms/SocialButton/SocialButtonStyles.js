import styled from 'styled-components';

export const SocialButtonStyles = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-size: 18px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
