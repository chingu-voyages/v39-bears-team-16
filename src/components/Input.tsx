/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { InputFieldProps } from 'types';

export const Input = styled.input<InputFieldProps>`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  border-radius: 4px;
  min-height: 40px;
  width: 11rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 300;
  padding-left: 8px;
  &::placeholder {
    color: ${({ theme }) => theme.color.darkGrey};
    opacity: 1;
  }
  :focus {
    outline: none;
  }
`;

export const InputField = styled.label`
  display: flex;
  gap: 0.5em;
  flex-direction: column;

  span {
    padding-top: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
  }
`;

export const TextArea = styled.textarea<InputFieldProps>`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  border-radius: 4px;
  min-height: 8rem;
  width: 11rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 300;
  padding-left: 8px;
  padding-top: 8px;
  letter-spacing: 1px;

  &::placeholder {
    color: ${({ theme }) => theme.color.darkGrey};
    opacity: 1;
  }

  :focus {
    outline: none;
  }
`;

export const Select = styled.select<InputFieldProps>`
  position: relative;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  min-height: 40px;
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 300;
  padding-left: 8px;
  :focus {
    outline: none;
  }
`;
export const Option = styled.option`
  color: ${({ theme }) => theme.color.black};
  display: flex;
  white-space: pre;
  background: ${({ theme }) => theme.color.white};
  padding-top: 0.3em;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0.031rem;
`;