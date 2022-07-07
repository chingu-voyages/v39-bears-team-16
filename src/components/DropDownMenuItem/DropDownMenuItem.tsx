import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef, useState } from 'react';
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
  const container = useRef<HTMLDivElement>(null);

  useOnClickOutside(container.current, () => setIsOpen(false));

  return (
    <StyledDropDownMenuItem ref={container}>
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
