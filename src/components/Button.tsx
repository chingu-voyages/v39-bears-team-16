import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background.white};
  padding: 0.5em 1.5em;
  box-shadow: none;
  border: 1px solid black;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.background.green};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.background.darkGreen};
    color: white;
    cursor: pointer;
  }
`;

export const WarningButton = styled(Button)`
  background-color: ${({ theme }) => theme.background.red};

  &:hover {
    background-color: ${({ theme }) => theme.background.darkRed};
    color: white;
    cursor: pointer;
  }
`;
