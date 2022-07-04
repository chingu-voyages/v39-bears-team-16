import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.5em 1.5em;
  box-shadow: none;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: none;
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

export const SuccessButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.green};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

export const WarningButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.red};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkRed};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;
