import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Input, InputField } from '../../../../components/Input';
import { ErrorMessageInterface } from '../../../../types';
import {
  createClassWorks,
  CreateClassWorkProps,
} from '../../../../api/classes';

import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../../../components/ErrorMessage';
import { Modal } from '../../../../components/Modal/Modal';
import { Form } from '../../../../components/Form';
import { Button, PrimaryButton } from '../../../../components/Button';
import { classWorkValidationRules } from '../../../../utilities/validation';

const defaultClassWorkValues = {
  name: '',
  body: '',
};

interface AddNewClassWorkFormProps {
  classId: string | undefined;
  isOpen: boolean;
  toggle(): void;
  handleClose(): void;
}

export const AddNewClassWorkForm = ({
  classId,
  isOpen,
  toggle,
  handleClose,
}: AddNewClassWorkFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateClassWorkProps>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );
  const { id } = useParams();

  const onSubmitNewClassWork = async (payload: CreateClassWorkProps) => {
    try {
      await createClassWorks(payload, classId, id);
      reset(defaultClassWorkValues);
      handleClose();
      toggle();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
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
      onCloseModal={toggle}
      primaryAction={
        <PrimaryButton type="submit" form="addClassWork">
          Submit
        </PrimaryButton>
      }
      secondaryAction={<Button onClick={handleCancelModal}>Cancel</Button>}
    >
      <Form
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
            placeholder="Enter Classwork resource"
            {...register('body', classWorkValidationRules.body)}
          />
        </InputField>

        {Object.keys(errors).length > 0 && (
          <FormErrorMessages errors={errors} />
        )}
        {errorMessages?.map(({ msg }) => (
          <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
        ))}
      </Form>
    </Modal>
  );
};
