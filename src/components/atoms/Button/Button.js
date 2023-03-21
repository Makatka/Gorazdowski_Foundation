import React from 'react';
import { ButtonStyles } from './Button.styles';

const Button = (props) => {
  return <ButtonStyles>{props.children}</ButtonStyles>;
};

export default Button;
