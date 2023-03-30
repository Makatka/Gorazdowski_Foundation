import styled from 'styled-components';

export const ButtonStyles = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.button};
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.6s ease;
  cursor: pointer;
`;
