import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi';
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { BsBoxArrowInDown } from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';

// should be styled and updated later
export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  width: 250px;
  height: 100%;
  color: white;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;
export const NameLogo = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 2px;
`;
export const MenuItems = styled.section`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 2.5em;
  display: inline-flex;
  align-items: flex-start;
`;
export const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;

export const Avatar = styled.img`
  height: 70%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  padding: 6px;
  margin-bottom: 1em;
`;

export const UserData = styled.p`
  text-align: center;
  padding: 6px;
`;

const iconStyles = {
  fontSize: '1.5rem',
  margin: '5px',
  color: 'white',
};
export const HomeIcon = styled(HiOutlineHome)`
  ${iconStyles}
`;
export const DashboardIcon = styled(BsReverseLayoutTextWindowReverse)`
  ${iconStyles};
  font-size: '.5em';
`;
export const UpdateIcon = styled(BsBoxArrowInDown)`
  ${iconStyles}
`;
export const LogoutIcon = styled(RiLogoutCircleLine)`
  ${iconStyles}
`;
