import styled from 'styled-components';

export const Input = styled.input`
  background: none;
  border: 1px solid ${({ theme }) => theme.background.black};
  border-radius: 4px;
  min-height: 30px;
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
