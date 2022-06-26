import React from 'react';
import styled from 'styled-components';
import { deleteClass } from '../../../api/apiPlanClass';

import { Modal } from '../../../components/Modal/Modal';
import { Button, PrimaryButton } from '../../../components/Button';

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
    width: 35%;
  }
`;

interface deleteClassProps {
  classID: string;
  isOpen: boolean;
  toggle(): void;
}

export const DeleteClassModal = ({
  classID,
  isOpen,
  toggle,
}: deleteClassProps) => {
  const handleSubmit = () => {
    deleteClass(classID);
    toggle();
  };
  const handleCancelModal = () => {
    toggle();
  };

  return (
    <Modal
      titleText=""
      isOpen={isOpen}
      hide={toggle}
      primaryAction={<PrimaryButton onClick={handleSubmit}>Yes</PrimaryButton>}
      secondaryAction={<Button onClick={handleCancelModal}>No</Button>}
    >
      <Container>
        <Text>Are you Sure you want to delete ? </Text>
      </Container>
    </Modal>
  );
};
