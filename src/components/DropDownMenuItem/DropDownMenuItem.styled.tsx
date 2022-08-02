import styled from 'styled-components';
import { Button } from '../Button';

export const StyledDropDownMenuItem = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
`;

export const StyledDropDownMenuItemHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 0.5em;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
`;

export const StyledDropDownMenuItemBody = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  z-index: 20;
  width: 150px;
`;

export const StyledDropdownItem = styled(Button)`
  padding: 0.75em 1em;
  font-size: 1rem;
  justify-content: start;
  width: 100%;
`;
