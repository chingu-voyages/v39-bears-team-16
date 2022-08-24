import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../../components/Modal/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Text = styled.h4`
  display: flex;
  gap: 1em;
  align-items: center;

  span {
    font-weight: bold;
  }
`;

const ShareLinkContainer = styled.div`
  display: flex;
`;
const LinkDisplay = styled.div`
  background-color: ${({ theme }) => theme.color.lightSecondary};
`;
const CopyButton = styled.button`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
`;

const copy = async () => {
  await navigator.clipboard.writeText('');
};

export interface SharePlanProps {
  className: string;
  classID: string;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export const SharePlanModal = ({
  className,
  isOpen,
  toggle,
  fetchClasses,
}: SharePlanProps) => {
  const handleShareModal = () => {};

  return (
    <Modal
      titleText={className}
      isOpen={isOpen}
      onCloseModal={toggle}
      primaryAction={<CopyButton onClick={copy}>Share</CopyButton>}
      customStyles={{ content: { minHeight: 'fit-content' } }}
    >
      <Container>
        <Text>Share this Plan</Text>
        <ShareLinkContainer>
          <LinkDisplay></LinkDisplay>
          <CopyButton>Copy Link</CopyButton>
        </ShareLinkContainer>
      </Container>
    </Modal>
  );
};
