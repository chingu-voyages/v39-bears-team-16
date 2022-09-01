import { FaArrowRight } from 'react-icons/fa';
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

  &:hover {
    background-color: ${({ theme }) => theme.color.lightSecondary};
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: transparent;
  border-radius: 20px;
  font-weight: 500;
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

export const ArrowIcon = styled(FaArrowRight)`
  font-size: 1.3rem;
`;
