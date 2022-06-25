import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 4px;
  min-height: 30px;
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
  gap: 1em;
  align-items: center;

  span {
    width: 35%;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 4px;
  min-height: 30px;
  width: 11rem;
  color: ${({ theme }) => theme.color.black};
  font-weight: 300;
  padding-left: 8px;

  :focus {
    outline: none;
  }
`;
