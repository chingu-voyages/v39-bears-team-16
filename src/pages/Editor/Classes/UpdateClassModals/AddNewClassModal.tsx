import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Input, InputField, TextArea } from 'components/Input';
import { ErrorMessageInterface } from 'types';
import {
  AddNewClassFormProps,
  EditorClassProps,
} from 'pages/Editor/Classes/classTypes';
import { createClass } from 'api/classes';
import { FormErrorMessages, StyledErrorMessage } from 'components/ErrorMessage';
import { Form } from 'components/Form';
import { Modal } from 'components/Modal/Modal';
import { TransparentButton, SecondaryButton } from 'components/Button';
import { classValidationRules } from 'utilities/validation';

export const AddNewClassForm = ({
  isOpen,
  toggle,
  fetchClasses,
}: AddNewClassFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditorClassProps>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );
  const { id } = useParams();

  const handleCancelModal = () => {
    reset();
    toggle();
  };

  const onSubmit = async (data: EditorClassProps) => {
    try {
      await createClass(data, id);
      reset();
      fetchClasses();
      toggle();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  return (
    <Modal
      titleText="Add New Class"
      isOpen={isOpen}
      onCloseModal={toggle}
      primaryAction={
        <SecondaryButton type="submit" form="addClassForm">
          Submit
        </SecondaryButton>
      }
      secondaryAction={
        <TransparentButton onClick={handleCancelModal}>
          Cancel
        </TransparentButton>
      }
    >
      <Form id="addClassForm" onSubmit={handleSubmit(onSubmit)}>
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
            placeholder="Enter Class Description"
            {...register('description', classValidationRules.description)}
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
