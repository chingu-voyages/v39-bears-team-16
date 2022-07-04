import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.black};
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
`;

export const TextArea = styled.textarea`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 4px;
  min-height: 8rem;
  width: 11rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 300;
  padding-left: 8px;
  padding-top: 8px;

  :focus {
    outline: none;
  }
`;
