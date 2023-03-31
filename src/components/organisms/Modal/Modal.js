import React from 'react';
import { ModalWrapper } from './Modal.styles';
import Button from '../../atoms/Button/Button';

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}

      <Button onClick={handleClose}>Zamknij</Button>
    </ModalWrapper>
  );
};

export default Modal;
