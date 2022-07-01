import styled from 'styled-components';

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
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
`;
