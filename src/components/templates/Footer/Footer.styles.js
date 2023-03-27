import styled from 'styled-components';

export const FooterStyles = styled.footer`
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.textLight};
  padding: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    line-height: 1.5;
    margin-block-start: 8px;
    margin-block-end: 8px;
  }

  &:after {
    content: '';
    height: 1px;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    position: absolute;
    bottom: 120px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 0;

  & > div {
    width: 300px;
  }

  h4 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
  }

  li {
    margin: 12px 0;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.action};
    font-weight: bold;
  }

  strong {
    font-weight: bold;
    margin-right: 5px;
  }

  button {
    margin-top: 50px;
  }

  &:last-of-type {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    position: relative;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.textLight};
    }

    img {
      height: 80px;
    }
    #icon-wrapper {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`;

export const SmallGallery = styled.div`
  display: grid;
  grid-template-columns: 134px 134px;
  grid-template-rows: 134px 134px;
  grid-gap: 5px;

  img {
    height: 100%;
    width: 100%;
  }
`;
