import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, InputField } from 'components/Input';
import { ErrorMessageInterface } from 'types';
import { createClassWorks, CreateClassWorkProps } from 'api/classes';
import { FormErrorMessages, StyledErrorMessage } from 'components/ErrorMessage';
import { Modal } from 'components/Modal/Modal';
import { Form } from 'components/Form';
import { Button, PrimaryButton } from 'components/Button';
import { classWorkValidationRules } from 'utilities/validation';

const defaultClassWorkValues = {
  name: '',
  description: '',
};

interface AddNewClassWorkFormProps {
  classId: string | undefined;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export const AddNewClassWorkForm = ({
  classId,
  isOpen,
  toggle,
  fetchClasses,
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

  const onSubmitNewClassWork = async (payload: CreateClassWorkProps) => {
    try {
      await createClassWorks(payload, classId);
      reset(defaultClassWorkValues);
      fetchClasses();
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
            id="description"
            placeholder="Enter Classwork resource"
            {...register('description', classWorkValidationRules.description)}
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
