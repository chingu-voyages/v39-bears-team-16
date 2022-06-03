import React from 'react';
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
  modalContent: JSX.Element;
  titleText: string;
}

export const Modal = ({
  isOpen,
  hide,
  modalContent,
  titleText,
}: ModalProps) => {
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
          <CloseButton
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            onClick={hide}
          >
            X
          </CloseButton>
        </TitleContainer>
        <Content>{modalContent}</Content>
      </Container>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
