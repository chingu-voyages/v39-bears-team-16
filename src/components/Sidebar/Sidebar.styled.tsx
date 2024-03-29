import styled from 'styled-components';
import { BsFillBookmarkStarFill, BsBoxArrowInDown } from 'react-icons/bs';
import { MdExplore } from 'react-icons/md';

export const SidebarContainer = styled.div`
  background: rgba(197, 225, 255, 0.3);
  position: absolute;
  left: 0;
  width: 15em;
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  height: 100%;
`;

const iconStyles = {
  fontSize: '1.3rem',
  margin: '.175em',
  color: '#0b173d',
};

export const FeaturedIcon = styled(MdExplore)`
  ${iconStyles}
`;

export const EnrolledIcon = styled(BsFillBookmarkStarFill)`
  ${iconStyles};
`;
export const UpdateIcon = styled(BsBoxArrowInDown)`
  ${iconStyles}
`;
