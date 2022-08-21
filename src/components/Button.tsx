import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7em;
  justify-content: center;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0.5em 1.5em;
  box-shadow: none;
  border: none;
  font-weight: 500;
  transition: 0.3s;
  cursor: pointer;
  min-width: 8rem;
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightSecondary};
    cursor: pointer;
  }
`;

export const PillButton = styled(Button)`
  border-radius: 20px;
`;

export const PrimaryButton = styled(PillButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.black};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

export const SuccessButton = styled(PillButton)`
  background-color: ${({ theme }) => theme.color.green};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkGreen};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const WarningButton = styled(PillButton)`
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkRed};
  }
`;

export const TransparentButton = styled(PillButton)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.darkGrey};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGrey};
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
  }
`;

export const SecondaryButton = styled(PillButton)`
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 20px;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
`;
