import styled from 'styled-components';

export const StyledDropDownMenuItem = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const StlyedDropDownMenuItemHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5em;
  border-bottom: 1px solid ${({ theme }) => theme.background.white};
  display: flex;
  gap: 0.5em;
`;

export const StlyedDropDownMenuItemBody = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 10px;
  padding: 0.5em;
`;
