import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 1em;

  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.background.white};

  display: flex;
  align-items: center;
`;
