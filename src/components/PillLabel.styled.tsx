import styled from 'styled-components';

interface PillLabelProps {
  type: 'primary' | 'secondary';
}

export const PillLabel = styled.div<PillLabelProps>`
  display: flex;
  align-items: center;
  gap: 0.7em;
  justify-content: center;
  border-radius: 20px;
  padding: 0.5em 1.5em;
  box-shadow: none;
  font-size: 1rem;
  transition: 0.3s;
  cursor: pointer;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.color.primary : theme.color.secondary};
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.color.white : theme.color.black};
`;
