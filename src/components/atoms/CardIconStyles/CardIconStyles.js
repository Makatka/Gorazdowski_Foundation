import styled from 'styled-components';

export const CardIconStyles = styled.div`
  font-size: 35px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: rgba(47, 136, 134, 0.1);
  text-align: center;

  border-radius: 50%;
  position: relative;
  transition: all 0.6s ease;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.buttonDark};
    font-size: 40px;
    transition: all 0.6s ease;
  }
`;
