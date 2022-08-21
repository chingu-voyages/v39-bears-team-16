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
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};
`;

export const StyledDropDownMenuItemBody = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  z-index: 20;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.color.subtleWhite};
`;

export const StyledDropdownItem = styled(Button)`
  padding: 0.75em 1em;
  font-size: 0.9rem;
  justify-content: start;
  width: 100%;
`;

export const UserIconDropDownHeader = styled.div`
  position: relative;
  width: 2.5em;
  height: 2.5em;
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.secondary};
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: medium;
`;
