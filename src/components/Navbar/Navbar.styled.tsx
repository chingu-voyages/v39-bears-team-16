import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 64px;
  padding: 0 1em;

  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};

  display: grid;
  grid-template-columns: 20% 1fr 10%;
  align-items: center;
`;

export const StyledNavbarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 2em;

  img {
    max-width: 100%;
    height: 40px;
    object-fit: contain;
  }
`;
