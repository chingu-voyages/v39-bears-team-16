import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 64px;
  padding: 0 1em;

  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.background.white};
  border-bottom: 1px solid ${({ theme }) => theme.background.white};

  display: grid;
  grid-template-columns: 10% 1fr 10%;
  align-items: center;
`;

export const StyledNavbarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 2em;
`;
