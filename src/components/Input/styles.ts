import styled from 'styled-components';

export const InputElement = styled.div`
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
  }
`;
