import styled from 'styled-components';

// should be styled and updated later
export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  width: 20vw;
  height: 100%;
  color: white;
  padding: 2.5em;
`;

export const MenuItems = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 2.5em;
`;

// This Avatar styling is not working yet.
export const Avatar = styled.img`
  height: 100%;
  align-items: center;
  justify-content: center;
  src: 'https://api.multiavatar.com/268ffa7121a2ff2573.svg';
`;
