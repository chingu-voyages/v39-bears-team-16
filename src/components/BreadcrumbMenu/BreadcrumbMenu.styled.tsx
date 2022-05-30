import styled from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi';

// The navLinkStyles only apply to linked breadcrumbs, excluding both '1' and 'Home'.
// I don't know how to target those unlinked items to make them all a larger size.

export const navLinkStyles = {
  color: 'white',
  fontSize: '1.125em',
};

export const activeStyle = {
  fontWeight: 'bold',
};

export const BreadcrumbArea = styled.div`
  background: ${({ theme }) => theme.background.primary};
  margin: 1.5em;
  height: 90px;
  border-radius: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.background.white};
`;

export const CohortContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const CohortDash = styled.section`
  color: ${({ theme }) => theme.background.white};
  margin: 1em;
  font-size: 0.85em;
  font-weight: 600;
`;

export const BreadcrumbContainer = styled.span`
  padding-left: 1.5em;
  font-size: 0.75em;
  color: ${({ theme }) => theme.background.white};
`;

// I used transform: scale here because the icon element wouldn't accept the fontSize property unless I created it in an Icon Styles object.
// This approach was recommended on a React Icons tutorial specific to these icon imports.

export const MenuIcon = styled(HiMenuAlt3)`
  transform: scale(2);
  margin: 0.175em;
  color: white;
`;
