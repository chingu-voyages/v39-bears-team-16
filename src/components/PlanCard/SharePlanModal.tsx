import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  Container,
  Text,
  ShareLinkContainer,
  CopyButton,
} from './SharePlanModal.styled';

export interface SharePlanProps {
  id: string;
  isOpen: boolean;
  toggle(): void;
}

export const SharePlanModal = ({ id, isOpen, toggle }: SharePlanProps) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy Link');
  const planUrl = `${window.location.host}/member/plans/${id}`;

  const copy = async () => {
    await navigator.clipboard.writeText(planUrl);
    setCopyButtonText('Copied!');
  };

  const handleCloseModal = () => {
    toggle();
    setCopyButtonText('Copy Link');
  };

  return (
    <Modal
      titleText=""
      isOpen={isOpen}
      onCloseModal={handleCloseModal}
      customStyles={{ content: { minHeight: 'fit-content' } }}
    >
      <Container>
        <Text>Share this Plan</Text>
        <ShareLinkContainer>
          <div>{planUrl}</div>
          <CopyButton onClick={copy}>{copyButtonText}</CopyButton>
        </ShareLinkContainer>
      </Container>
    </Modal>
  );
};
