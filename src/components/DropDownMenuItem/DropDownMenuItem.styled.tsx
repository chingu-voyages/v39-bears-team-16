import styled from 'styled-components';
import { Button } from '../Button';

export const StyledDropDownMenuItem = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
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
