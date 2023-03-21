import React from 'react';
import { SocialButtonStyles } from './SocialButtonStyles';

const SocialButton = (props) => {
  return <SocialButtonStyles>{props.children}</SocialButtonStyles>;
};

export default SocialButton;
