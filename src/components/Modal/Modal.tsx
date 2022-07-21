import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { useTheme } from 'styled-components';
import { ThemeInterface } from '../../types';

import {
  TitleContainer,
  Title,
  CloseButton,
  Content,
  StyledActionContainer,
  useModalStyles,
  useEditModalStyles,
} from './Modal.styled';

export interface ModalProps {
  isOpen: boolean;
  onCloseModal(): void;
  titleText: string;
  primaryAction: ReactNode;
  secondaryAction?: ReactNode | undefined;
  children: ReactNode;
  customStyles?: ReactModal.Styles;
  className?: string | undefined;
}

export const Modal = ({
  isOpen,
  onCloseModal,
  titleText,
  primaryAction,
  secondaryAction,
  children,
  customStyles,
  className,
}: ModalProps) => {
  const theme = useTheme();
  const styles = useModalStyles(
    theme as ThemeInterface,
    customStyles as ReactModal.Styles
  );
  const editModalStyles = useEditModalStyles(theme as ThemeInterface);

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={titleText}
      onRequestClose={onCloseModal}
      style={className === 'edit' ? editModalStyles : styles}
    >
      <TitleContainer>
        <Title>{titleText}</Title>
      </TitleContainer>
      <CloseButton
        type="button"
        data-dismiss="modal"
        aria-label="Close"
        onClick={onCloseModal}
      />
      <Content>{children}</Content>
      <StyledActionContainer>
        {secondaryAction}
        {primaryAction}
      </StyledActionContainer>
    </ReactModal>
  );
};
