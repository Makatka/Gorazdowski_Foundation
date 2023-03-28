import React from 'react';
import { BiBookmark } from 'react-icons/bi';
import { Wrapper } from './ModalOpen.styles';

const ModalOpen = ({ id }) => {
  return (
    <Wrapper id={id}>
      <BiBookmark />
      <span>
        Statut <br />
        Stowarzyszenia
      </span>
    </Wrapper>
  );
};

export default ModalOpen;
