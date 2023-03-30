import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styles';
import Button from '../../atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  React.useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalWrapper>
      Lorem Ipsum Emet<Button onClick={handleClose}>Zamknij modal</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
