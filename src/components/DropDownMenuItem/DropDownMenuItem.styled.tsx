import styled from 'styled-components';

export const StyledDropDownMenuItem = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const StyledDropDownMenuItemHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5em;
  display: flex;
  gap: 0.5em;
`;

export const StlyedDropDownMenuItemBody = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.secondary};
  border-radius: 5px;
  box-shadow: 2px 2px 3px ${({ theme }) => theme.color.grey};
`;
