import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Input, InputField } from '../../../components/Input';
import { ErrorMessageType } from '../../../types';
import {
  adminCreateClassWorks,
  AdminCreateClassWorkProps,
} from '../../../api/getAdminClasses';

import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../../components/ErrorMessage';
import { Modal } from '../../../components/Modal/Modal';

import { Button, PrimaryButton } from '../../../components/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const classWorkValidationRules = {
  name: {
    required: 'Class Type is required',
  },
  body: {
    required: 'Class Description is required',
  },
};

const defaultClassWorkValues = {
  name: '',
  body: '',
};

interface AddNewClassWorkFormProps {
  classId: string | undefined;
  isOpen: boolean;
  toggle(): void;
}

export const AddNewClassWorkForm = ({
  classId,
  isOpen,
  toggle,
}: AddNewClassWorkFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminCreateClassWorkProps>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageType[]>([]);
  const { id } = useParams();

  const onSubmitNewClassWork = async (payload: AdminCreateClassWorkProps) => {
    try {
      await adminCreateClassWorks(payload, classId, id);
      reset(defaultClassWorkValues);
    } catch (error) {
      setErrorMessages(error as ErrorMessageType[]);
    }
  };
  const handleCancelModal = () => {
    toggle();
    reset(defaultClassWorkValues);
  };

  return (
    <Modal
      titleText="Add New Class Work Form"
      isOpen={isOpen}
      hide={toggle}
      primaryAction={
        <PrimaryButton type="submit" form="addClassWork">
          Submit
        </PrimaryButton>
      }
      secondaryAction={<Button onClick={handleCancelModal}>Cancel</Button>}
    >
      <StyledForm
        id="addClassWork"
        onSubmit={(e) => {
          handleSubmit(onSubmitNewClassWork)(e);
        }}
      >
        <InputField htmlFor="name">
          <span>Classwork Type</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Class Title"
            {...register('name', classWorkValidationRules.name)}
          />
        </InputField>

        <InputField htmlFor="body">
          <span>Classwork Link</span>

          <Input
            type="text"
            id="body"
            placeholder="Enter Class description"
            {...register('body', classWorkValidationRules.body)}
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
