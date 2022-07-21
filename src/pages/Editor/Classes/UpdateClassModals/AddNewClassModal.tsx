import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Input, InputField, TextArea } from 'components/Input';
import { ErrorMessageInterface, AddNewClassFormProps } from 'types';
import { createClass, CreateClassProps } from 'api/classes';
import { FormErrorMessages, StyledErrorMessage } from 'components/ErrorMessage';
import { Form } from 'components/Form';
import { Modal } from 'components/Modal/Modal';
import { Button, PrimaryButton } from 'components/Button';
import { classValidationRules } from 'utilities/validation';

const defaultClassValues = {
  name: '',
  startDate: '',
  endDate: '',
};

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
        <PrimaryButton type="submit" form="addClassForm">
          Submit
        </PrimaryButton>
      }
      secondaryAction={<Button onClick={handleCancelModal}>Cancel</Button>}
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
