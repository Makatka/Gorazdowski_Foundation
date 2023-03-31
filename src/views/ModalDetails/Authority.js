import React from 'react';
import { ModalDetailsWrapper } from './ModalDetails.styles';
const Authority = () => {
  return (
    <ModalDetailsWrapper>
      <h5>ZARZĄD GŁÓWNY</h5>
      <ul>
        <li>
          <strong>Zofia Mazur</strong> -przewodnicząca
        </li>
        <li>
          <strong>Grzegorz Sachajdak</strong> - zastępca przewodniczącej
        </li>
        <li>
          <strong>Kazimierz Zarzyka</strong> - sekretarz
        </li>
        <li>
          <strong>Zofia Kwolek </strong> - skarbnik
        </li>
        <li>
          <strong>Alina Pęcak </strong> - członek Zarządu
        </li>
        <li>
          <strong>Krystyna Zajdel</strong> - członek Zarządu
        </li>
        <li>
          <strong>Wanda Wojtuszewska</strong> - członek Zarządu
        </li>
      </ul>
      <h5>GŁÓWNA KOMISJA REWIZYJNA</h5>
      <ul>
        <li>
          <strong>Joanna Hydzik</strong> -przewodnicząca
        </li>
        <li>
          <strong>Agata Kozieradzka</strong>
        </li>
        <li>
          <strong>Anna Szajna</strong>
        </li>
      </ul>
      <h5>SĄD KOLEŻEŃSKI</h5>
      <ul>
        <li>
          <strong>Barbara Milczanowska</strong> -przewodnicząca
        </li>
        <li>
          <strong>Maria Rycyk</strong>
        </li>
        <li>
          <strong>Janina Kaczmar</strong>
        </li>
        <li>
          <strong>Szczepan Wołk</strong>
        </li>
      </ul>
    </ModalDetailsWrapper>
  );
};

export default Authority;
