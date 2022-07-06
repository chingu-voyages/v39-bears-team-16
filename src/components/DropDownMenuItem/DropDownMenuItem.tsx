import React, { useState } from 'react';
import {
  StlyedDropDownMenuItemBody,
  StyledDropDownMenuItemHeader,
  StyledDropDownMenuItem,
} from './DropDownMenuItem.styled';

interface DropDownMenuItemProps {
  header: JSX.Element;
  children: JSX.Element;
  isOpen?: boolean;
}

const DropDownMenuItem = ({
  header,
  children,
  isOpen: dropdownIsOpen = false,
}: DropDownMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(dropdownIsOpen);

  return (
    <StyledDropDownMenuItem>
      <StyledDropDownMenuItemHeader onClick={() => setIsOpen(!isOpen)}>
        {header}
      </StyledDropDownMenuItemHeader>
      <StlyedDropDownMenuItemBody>
        {isOpen && <div>{children}</div>}
      </StlyedDropDownMenuItemBody>
    </StyledDropDownMenuItem>
  );
};

export default DropDownMenuItem;
