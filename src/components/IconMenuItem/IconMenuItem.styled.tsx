import styled from 'styled-components';

export const StyledIconMenu = styled.div`
  position: relative;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  gap: 0.5em;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.secondary};
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: medium;
`;
