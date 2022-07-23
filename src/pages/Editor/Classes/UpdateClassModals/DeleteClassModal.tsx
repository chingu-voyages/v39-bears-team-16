import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteClass } from 'api/classes';
import { Modal } from 'components/Modal/Modal';
import { Button, WarningButton } from 'components/Button';
import { ErrorMessageInterface, deleteClassProps } from 'types';
import { StyledErrorMessage } from 'components/ErrorMessage';

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

export const DeleteClassModal = ({
  className,
  classID,
  isOpen,
  toggle,
  fetchClasses,
}: deleteClassProps) => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );

  const handleSubmit = async () => {
    try {
      await deleteClass(classID);
      fetchClasses();
      toggle();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  return (
    <Modal
      titleText={className}
      isOpen={isOpen}
      onCloseModal={toggle}
      primaryAction={<WarningButton onClick={handleSubmit}>Yes</WarningButton>}
      secondaryAction={<Button onClick={toggle}>No</Button>}
      customStyles={{ content: { minHeight: 'fit-content' } }}
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
