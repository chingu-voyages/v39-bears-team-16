import styled from 'styled-components';

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
  border: solid black 0.125em;
  transition: 0.3s;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.black};
  background-color: ${({ theme, type }) => theme.color[type]};
`;

interface PillLabelProps {
  type: 'primary' | 'secondary';
  children: JSX.Element;
}

export const PillLabel = ({ type, children }: PillLabelProps) => {
  return (
    <StyledPillLabelContainer type={type}>{children}</StyledPillLabelContainer>
  );
};
