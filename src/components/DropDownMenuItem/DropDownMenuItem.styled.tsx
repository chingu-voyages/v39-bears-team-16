import styled from 'styled-components';
import { Button } from '../Button';

export const StyledDropDownMenuItem = styled.div`
  position: relative;
<<<<<<< HEAD
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
=======
>>>>>>> 0b9c971 (dropdown menu item, edit, delete plan)
`;

export const StyledDropDownMenuItemHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5em;
  display: flex;
  gap: 0.5em;
  cursor: pointer;
`;

export const StlyedDropDownMenuItemBody = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  z-index: 20;
`;

export const StyledDropdownItem = styled(Button)`
  padding: 0.75em 1em;
  font-size: 1rem;
  justify-content: start;
  width: 100%;
`;
