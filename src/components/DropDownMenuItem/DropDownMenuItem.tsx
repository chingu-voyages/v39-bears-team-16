import React from 'react';
import {
  StlyedDropDownMenuItemBody,
  StyledDropDownMenuItemHeader,
  StyledDropDownMenuItem,
} from './DropDownMenuItem.styled';

interface DropDownMenuItemProps {
  header: JSX.Element;
  children: JSX.Element;
  isOpen: boolean;
}

const DropDownMenuItem = ({
  header,
  children,
  isOpen,
}: DropDownMenuItemProps) => {
  return (
    <StyledDropDownMenuItem>
      <StyledDropDownMenuItemHeader>{header}</StyledDropDownMenuItemHeader>
      <StlyedDropDownMenuItemBody>
        {isOpen && <div>{children}</div>}
      </StlyedDropDownMenuItemBody>
    </StyledDropDownMenuItem>
  );
};

export default DropDownMenuItem;
