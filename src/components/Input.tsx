import styled from 'styled-components';
import { InputFieldProps } from 'types';

export const Input = styled.input<InputFieldProps>`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  min-height: 40px;
  width: 11rem;
  color: ${({ theme }) => theme.color.darkGrey};
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
    padding-top: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
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
  padding-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const TextArea = styled.textarea<InputFieldProps>`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-color: ${({ hasError, theme }) => hasError && theme.color.red};
  border-radius: 4px;
  min-height: 8rem;
  width: 11rem;
  color: ${({ theme }) => theme.color.darkGrey};
  font-weight: 300;
  padding-left: 8px;
  padding-top: 8px;

  :focus {
    outline: none;
  }
`;
