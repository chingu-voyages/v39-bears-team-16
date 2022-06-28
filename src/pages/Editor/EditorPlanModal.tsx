import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Input, InputField, TextArea } from '../../components/Input';
import { Modal } from '../../components/Modal/Modal';
import { Button, SuccessButton } from '../../components/Button';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';
import { Form } from '../../components/Form';
import { AddUpdatePlanProps, getPlans } from '../../api/plans';
import { PlanInterface, ErrorMessageInterface } from '../../types';
import { planValidationRules } from '../../utilities/validation';

export interface EditorPlanModalProps {
  isOpen: boolean;
  toggle(): void;
  type: 'add' | 'edit';
  setPlans(value: PlanInterface[]): void;
  submitCallback(payload): void;
}

const defaultPlanValues = {
  name: '',
  description: '',
};

export const EditorPlanModal = ({
  isOpen,
  type,
  toggle,
  setPlans,
  submitCallback,
}: EditorPlanModalProps) => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<AddUpdatePlanProps>();

  const handleCloseModal = () => {
    toggle();
    reset(defaultPlanValues);
  };

  const onSubmit = async (payload: AddUpdatePlanProps) => {
    try {
      await submitCallback(payload);
      const { data } = await getPlans();
      setPlans(data);
      handleCloseModal();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  const titleText = type === 'add' ? 'Add New Plan' : 'Update Plan';

  return (
    <Modal
      titleText={titleText}
      isOpen={isOpen}
      hide={handleCloseModal}
      primaryAction={
        <SuccessButton type="submit" form="add-update-plan-form">
          Submit
        </SuccessButton>
      }
      secondaryAction={<Button onClick={handleCloseModal}>Cancel</Button>}
    >
      <Form id="add-update-plan-form" onSubmit={handleSubmit(onSubmit)}>
        <InputField htmlFor="name">
          <span>Plan Name</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Plan Name"
            {...register('name', planValidationRules.name)}
          />
        </InputField>
        <InputField htmlFor="description">
          <span>Plan Description</span>
          <TextArea
            id="description"
            placeholder="Enter some description about the plan"
            {...register('description', planValidationRules.description)}
          />
        </InputField>
        {Object.keys(formErrors).length > 0 && (
          <FormErrorMessages errors={formErrors} />
        )}
        {errorMessages?.map(({ msg }) => (
          <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
        ))}
      </Form>
    </Modal>
  );
};
