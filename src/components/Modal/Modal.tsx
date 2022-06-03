import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  TitleContainer,
  Title,
  CloseButton,
  Content,
  Fade,
} from './Modal.styled';

export interface ModalProps {
  isOpen: boolean;
  hide: () => void;
  titleText: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, hide, titleText, children }: ModalProps) => {
  const modal = (
    <div>
      <Fade />
      <Container
        aria-modal
        aria-labelledby={titleText}
        tabIndex={-1}
        role="dialog"
      >
        <TitleContainer>
          <Title>{titleText}</Title>
        </TitleContainer>
        <CloseButton
          type="button"
          data-dismiss="modal"
          aria-label="Close"
          onClick={hide}
        />
        <Content>{children}</Content>
      </Container>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
