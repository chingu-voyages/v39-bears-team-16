import styled from 'styled-components';

interface PillLabelProps {
  type: 'primary' | 'secondary';
}

export const PillLabel = styled.div<PillLabelProps>`
  border-radius: 20px;
  padding: 0.2em 0.8em;
  font-size: 0.8rem;
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.color.primary : theme.color.secondary};
  color: ${({ theme, type }) =>
    type === 'primary' ? theme.color.white : theme.color.black};
`;
