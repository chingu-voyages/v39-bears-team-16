import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi';
import {
  BsReverseLayoutTextWindowReverse,
  BsBoxArrowInDown,
} from 'react-icons/bs';
import { RiLogoutCircleLine } from 'react-icons/ri';

export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  position: absolute;
  top: 64px;
  left: 0;
  width: 15em;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  border-right: 1px solid ${({ theme }) => theme.color.grey};
`;

const iconStyles = {
  fontSize: '1.5rem',
  margin: '.175em',
  color: '#0b173d',
};

export const HomeIcon = styled(HiOutlineHome)`
  ${iconStyles}
`;
export const DashboardIcon = styled(BsReverseLayoutTextWindowReverse)`
  ${iconStyles};
`;
export const UpdateIcon = styled(BsBoxArrowInDown)`
  ${iconStyles}
`;
export const LogoutIcon = styled(RiLogoutCircleLine)`
  ${iconStyles}
`;
