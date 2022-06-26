import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Input, InputField, TextArea } from '../../../components/Input';
import { ErrorMessageInterface } from '../../../types';
import { createClass, CreateClassProps } from '../../../api/apiPlanClass';

import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../../components/ErrorMessage';

import { Modal } from '../../../components/Modal/Modal';
import { Button, PrimaryButton } from '../../../components/Button';
import { classValidationRules } from '../../../utilities/validation';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const defaultClassValues = {
  name: '',
  startDate: '',
  endDate: '',
};

interface AddNewClassFormProps {
  isOpen: boolean;
  toggle(): void;
  handleClose(): void;
}

export const AddNewClassForm = ({
  isOpen,
  toggle,
  handleClose,
}: AddNewClassFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateClassProps>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );
  const { id } = useParams();

  const handleCancelModal = () => {
    toggle();
    reset(defaultClassValues);
  };

  const onSubmit = async (data: CreateClassProps) => {
    try {
      await createClass(data, id);

      reset(defaultClassValues);
      handleClose();
      toggle();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  return (
    <Modal
      titleText="Add New Class"
      isOpen={isOpen}
      hide={toggle}
      primaryAction={
        <PrimaryButton type="submit" form="addClassForm">
          Submit
        </PrimaryButton>
      }
      secondaryAction={<Button onClick={handleCancelModal}>Cancel</Button>}
    >
      <StyledForm id="addClassForm" onSubmit={handleSubmit(onSubmit)}>
        <InputField htmlFor="name">
          <span>Class Title</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Class Title"
            {...register('name', classValidationRules.name)}
          />
        </InputField>
        <InputField htmlFor="subject">
          <span>Class Description</span>
          <TextArea
            id="description"
            placeholder="Enter Class description"
            {...register('description', classValidationRules.description)}
          />
        </InputField>

        {Object.keys(errors).length > 0 && (
          <FormErrorMessages errors={errors} />
        )}
        {errorMessages?.map(({ msg }) => (
          <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
        ))}
      </StyledForm>
    </Modal>
  );
};
