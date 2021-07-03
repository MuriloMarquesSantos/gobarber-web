import styled, { css } from 'styled-components';

interface InputElementProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const InputElement = styled.div<InputElementProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  input {
    background: transparent;
    color: #f4ede8;
    flex: 1;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;

    ${props =>
      props.isFilled &&
      css`
        color: #ff9000;
      `}
  }
`;
