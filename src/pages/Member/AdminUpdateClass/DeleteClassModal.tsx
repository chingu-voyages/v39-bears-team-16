import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteClass } from '../../../api/apiPlanClass';

import { Modal } from '../../../components/Modal/Modal';
import { Button, PrimaryButton } from '../../../components/Button';
import { ErrorMessageInterface } from '../../../types';
import { StyledErrorMessage } from '../../../components/ErrorMessage';

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
    font-size: 1.5rem;
  }
`;

interface deleteClassProps {
  className: string;
  classID: string;
  isOpen: boolean;
  toggle(): void;
  handleClose(): void;
}

export const DeleteClassModal = ({
  className,
  classID,
  isOpen,
  toggle,
  handleClose,
}: deleteClassProps) => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );

  const handleSubmit = async () => {
    try {
      await deleteClass(classID);
      handleClose();
      toggle();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };
  const handleCancelModal = () => {
    toggle();
  };

  return (
    <Modal
      titleText={className}
      isOpen={isOpen}
      hide={toggle}
      primaryAction={<PrimaryButton onClick={handleSubmit}>Yes</PrimaryButton>}
      secondaryAction={<Button onClick={handleCancelModal}>No</Button>}
    >
      <Container>
        <Text>
          Are you sure you want to delete
          <span>{`${className}?`}</span>
        </Text>
      </Container>
      {errorMessages?.map(({ msg }) => (
        <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
      ))}
    </Modal>
  );
};
