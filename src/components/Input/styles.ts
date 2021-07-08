import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface InputElementProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
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
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  position: relative;
  svg {
    margin: 0;
  }
  span {
    width: 160px;
    background: #c53030;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    visibility: hidden;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
