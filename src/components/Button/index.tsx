import React, { ButtonHTMLAttributes } from 'react';
import { ButtonElement } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ButtonElement>
    <button {...rest}>{children}</button>
  </ButtonElement>
);

export default Button;
