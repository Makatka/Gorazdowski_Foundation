import React from 'react';
import { CardIconStyles } from '../../atoms/CardIconStyles/CardIconStyles';
import { Wrapper } from './InfoCard.styles';
import { FaPrayingHands, FaPeopleCarry } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

const InfoCard = ({ cardHeader, cardText, cardIcon }) => {
  return (
    <Wrapper>
      <a href={'patron.html'} id={'patron-info-btn'}>
        <CardIconStyles>
          {cardIcon === 'work' ? <FaPeopleCarry /> : null}
          {cardIcon === 'people' ? <IoIosPeople /> : null}
          {cardIcon === 'hands' ? <FaPrayingHands /> : null}
        </CardIconStyles>
        <h3>{cardHeader}</h3>
        <p>{cardText}</p>
        <span>Więcej...</span>
      </a>
    </Wrapper>
  );
};

export default InfoCard;
