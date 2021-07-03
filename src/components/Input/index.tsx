import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { IconType } from 'react-icons';

import { InputElement } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  icon: IconType;
}

const Input: React.FC<InputProps> = ({ icon: Icon, inputName, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(inputName);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <InputElement>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        name={inputName}
        {...rest}
      />
      {error && <span>{error}</span>}
    </InputElement>
  );
};

export default Input;
