import styled from 'styled-components';

interface PillLabelProps {
  type: 'primary' | 'secondary';
  children: JSX.Element;
}

export const StyledPillLabelContainer = styled.div`
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

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.color.primary : theme.color.secondary};
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.color.white : theme.color.black};
`;

export const PillLabel = ({ type, children }: PillLabelProps) => {
  return (
    <StyledPillLabelContainer type={type}>{children}</StyledPillLabelContainer>
  );
};
