import styled from 'styled-components';
import { InputFieldProps } from 'types';

export const Input = styled.input<InputFieldProps>`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  border-radius: 4px;
  min-height: 40px;
  width: 11rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 300;
  padding-left: 8px;

  :focus {
    outline: none;
  }
`;

export const InputField = styled.label`
  display: flex;
  gap: 0.5em;
  flex-direction: column;

  span {
    font-weight: 500;
  }
`;

export const TextArea = styled.textarea<InputFieldProps>`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  border-radius: 4px;
  min-height: 8rem;
  width: 11rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 300;
  padding-left: 8px;
  padding-top: 8px;
  letter-spacing: 1px;

  :focus {
    outline: none;
  }
`;
