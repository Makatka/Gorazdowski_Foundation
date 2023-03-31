import React from 'react';
import percent1 from 'assets/img/percent-1.webp';
import percent2 from 'assets/img/percent-2.webp';
import { ModalDetailsWrapper } from './ModalDetails.styles';

const PercentModal = () => {
  return (
    <ModalDetailsWrapper>
      <figure>
        <img src={percent1} alt="Ulotka 1,5%" />
        <img src={percent2} alt="Ulotka 1,5%" />
      </figure>
    </ModalDetailsWrapper>
  );
};

export default PercentModal;
