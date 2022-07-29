import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7em;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.5em 1.5em;
  box-shadow: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightSecondary};
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: transparent;
  border-radius: 50px;
  border: solid black 0.125em;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.black};

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
  }
`;

export const WarningButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkRed};
  }
`;

export const InvertPrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkPrimary};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;
