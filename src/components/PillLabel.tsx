import styled from 'styled-components';

export const PillLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin: 0.5em;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 0.5em 1.5em;
  box-shadow: none;
  font-size: 14px;
  transition: 0.3s;
  cursor: pointer;
`;

export const PrimaryPillLabel = styled(PillLabel)`
  background-color: ${({ theme }) => theme.color.primary};
`;

export const SecondaryPillLabel = styled(PillLabel)`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.black};
`;
