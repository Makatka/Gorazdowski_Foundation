import React from 'react';
import { ButtonStyles } from './Button.styles';

const Button = ({ children, onClick }) => {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
};

export default Button;
