import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { useTheme } from 'styled-components';
import { ThemeInterface } from 'types';

import {
  TitleContainer,
  Title,
  CloseButton,
  Content,
  StyledActionContainer,
  useModalStyles,
} from 'components/Modal/Modal.styled';

export interface ModalProps {
  isOpen: boolean;
  onCloseModal(): void;
  titleText: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  children: ReactNode;
  customStyles?: ReactModal.Styles;
}

export const Modal = ({
  isOpen,
  onCloseModal,
  titleText,
  primaryAction,
  secondaryAction,
  children,
  customStyles,
}: ModalProps) => {
  const theme = useTheme();
  const styles = useModalStyles(
    theme as ThemeInterface,
    customStyles as ReactModal.Styles
  );

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={titleText}
      onRequestClose={onCloseModal}
      style={styles}
    >
      <TitleContainer>
        <Title>{titleText}</Title>
        <CloseButton
          type="button"
          data-dismiss="modal"
          aria-label="Close"
          onClick={onCloseModal}
        />
      </TitleContainer>

      <Content>{children}</Content>
      <StyledActionContainer>
        {secondaryAction}
        {primaryAction}
      </StyledActionContainer>
    </ReactModal>
  );
};
