import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  text-align: start;
  height: 80px;
  background: transparent;
  border: none;
  margin-top: 20px;

  &:after {
    content: '';
    opacity: 0.5;
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    top: 18px;
    left: -15px;
    z-index: -2;
    background-color: ${({ theme }) => theme.colors.button};
  }

  svg {
    font-size: 40px;
    height: 100%;
    margin-left: 10px;
    font-weight: bold;
  }

  span {
    margin-left: 20px;
    padding-left: 20px;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 25px;
    border-left: 1px solid #212529;
    line-height: 1.5;
    color: #212529;
  }
`;
