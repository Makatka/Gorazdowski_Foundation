import { useState } from 'react';
import Modal from './Modal';

const UseModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleCloseModal = () => setModalState(false);
  const handleOpenModal = () => setModalState(true);
  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default UseModal;
