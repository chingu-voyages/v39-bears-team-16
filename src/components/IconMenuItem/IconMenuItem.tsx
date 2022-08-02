import useOnClickOutside from 'hooks/useOnClickOutside';
import React, { useRef, useState } from 'react';
import {
  StyledDropDownMenuItemBody,
  StyledDropDownMenuItem,
} from '../DropDownMenuItem/DropDownMenuItem.styled';
import { StyledIconMenu } from './IconMenuItem.styled';

interface IconMenuItemProps {
  header: JSX.Element;
  children: JSX.Element;
  isOpen?: boolean;
}

const IconMenuItem = ({
  header,
  children,
  isOpen: dropdownIsOpen = false,
}: IconMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(dropdownIsOpen);
  const container = useRef<HTMLDivElement>(null);

  useOnClickOutside(container.current, () => setIsOpen(false));

  return (
    <StyledDropDownMenuItem ref={container}>
      <StyledIconMenu onClick={() => setIsOpen(!isOpen)}>
        {header}
      </StyledIconMenu>
      <StyledDropDownMenuItemBody>
        {isOpen && <div>{children}</div>}
      </StyledDropDownMenuItemBody>
    </StyledDropDownMenuItem>
  );
};

export default IconMenuItem;
