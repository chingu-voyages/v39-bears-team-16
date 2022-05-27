import React from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  TitleContainer,
  Title,
  CloseButton,
  Content,
  Fade,
} from './Modal.style';

export interface ModalProps {
  isOpen: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  TitleText: string;
}

export const Modal = ({
  isOpen,
  hide,
  modalContent,
  TitleText,
}: ModalProps) => {
  const modal = (
    <div>
      <Fade />
      <Container>
        <TitleContainer>
          <Title>{TitleText}</Title>
          <CloseButton onClick={hide}>X</CloseButton>
        </TitleContainer>
        <Content>{modalContent}</Content>
      </Container>
    </div>
  );

  return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};
