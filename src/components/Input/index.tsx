import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { InputElement } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: IconType;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <InputElement>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </InputElement>
);

export default Input;
