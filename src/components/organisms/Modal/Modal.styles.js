import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  max-height: 90vh;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 8px -5px 25px -10px rgba(0, 0, 0, 0.3);
  padding: 30px;
  display: flex;
  flex-direction: column;

  button {
    display: block;
    margin: 0 0 0 auto;
  }
`;
