import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => SetIsOpen(!isOpen);
  return {
    isOpen,
    toggle,
  };
};
