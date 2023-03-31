import React from 'react';
import { ModalDetailsWrapper } from './ModalDetails.styles';

const FinancialReport = () => {
  return (
    <ModalDetailsWrapper>
      <ul>
        <li>
          <a href="">Sprawozdanie finansowe za rok 2021</a>
        </li>
        <li>
          <a href="">Sprawozdanie finansowe za rok 2020</a>
        </li>
        <li>
          <a href="">Sprawozdanie finansowe za rok 2019</a>
        </li>
        <li>
          <a href="">Sprawozdanie finansowe za rok 2018</a>
        </li>
      </ul>
    </ModalDetailsWrapper>
  );
};

export default FinancialReport;
