import styled from 'styled-components';

export const ButtonStyles = styled.button`
  padding: 11px 30px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.6s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button};
    border-color: ${({ theme }) => theme.colors.button};
  }
`;
