import { RiLogoutCircleLine, RiSearchLine } from 'react-icons/ri';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 64px;
  padding: 0 1em;

  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};

  display: grid;
  grid-template-columns: 15em 1fr 10%;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey};
`;

export const StyledNavbarSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1em;

  img {
    max-width: 100%;
    height: 2rem;
    object-fit: contain;
  }
`;

export const MenuItemWrapper = styled.div`
  width: 4rem;
`;
export const LogoutIcon = styled(RiLogoutCircleLine)`
  font-size: 1.3rem;
`;
// export const SearchIcon = styled(RiSearchLine)`
//   font-size: 1.4rem;
// `;
