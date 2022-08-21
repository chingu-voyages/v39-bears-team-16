import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { Input, InputField, TextArea } from '../../components/Input';
import { Modal } from '../../components/Modal/Modal';
import {
  TransparentButton,
  SecondaryButton,
  WarningButton,
} from '../../components/Button';
import { StyledErrorMessage } from '../../components/ErrorMessage';
import { Form } from '../../components/Form';
import { AddUpdatePlanProps } from '../../api/plans';
import { ErrorMessageInterface } from '../../types';
import { planValidationRules } from '../../utilities/validation';

export enum EditorModalTypes {
  Add = 'add',
  Update = 'update',
  Delete = 'delete',
}

const toastMsgMap = {
  add: {
    success: 'Successfully added the plan!',
    error: 'Failed to add plan.',
  },
  delete: {
    success: 'Successfully deleted the plan!',
    error: 'Failed to delete plan.',
  },
  update: {
    success: 'Successfully updated the plan!',
    error: 'Failed to update plan.',
  },
};

export interface EditorPlanModalProps {
  isOpen: boolean;
  toggle(): void;
  fetchEditorPlans(): void;
  type: EditorModalTypes;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  submitCallback(payload): Promise<AxiosResponse<any, any>>;
  name?: string;
  description?: string;
}

const defaultPlanValues = {
  name: '',
  description: '',
};

const DeletePlanModal = ({ onSubmit, name, isOpen, handleCloseModal }) => {
  return (
    <Modal
      titleText="Delete Plan"
      isOpen={isOpen}
      onCloseModal={handleCloseModal}
      primaryAction={
        <WarningButton type="submit" onClick={onSubmit}>
          Delete
        </WarningButton>
      }
      secondaryAction={
        <TransparentButton onClick={handleCloseModal}>Cancel</TransparentButton>
      }
      customStyles={{ content: { minHeight: 'fit-content' } }}
    >
      Are you sure you want to delete <strong>{name}</strong>?
    </Modal>
  );
};

export const EditorPlanModal = ({
  isOpen,
  type,
  toggle,
  submitCallback,
  fetchEditorPlans,
  name,
  description,
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
      fetchEditorPlans();
      handleCloseModal();
      toast.success(toastMsgMap[type].success, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
      toast.error(toastMsgMap[type].error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  useEffect(() => {
    if (name !== '' || description !== '') {
      reset({ name, description });
    }
  }, [reset, name, description]);

  return type === EditorModalTypes.Delete ? (
    <DeletePlanModal
      onSubmit={onSubmit}
      name={name}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
    />
  ) : (
    <Modal
      titleText={
        type === EditorModalTypes.Add ? 'Add New Plan' : 'Edit Plan Info'
      }
      isOpen={isOpen}
      onCloseModal={handleCloseModal}
      primaryAction={
        <SecondaryButton type="submit" form="add-update-plan-form">
          Save
        </SecondaryButton>
      }
      secondaryAction={
        <TransparentButton onClick={handleCloseModal}>Cancel</TransparentButton>
      }
    >
      <Form id="add-update-plan-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputField htmlFor="name">
            <span>Plan Name</span>
            <Input
              type="text"
              id="name"
              placeholder="Enter Plan Name"
              {...register('name', planValidationRules.name)}
              hasError={Boolean(formErrors.name?.message)}
            />
          </InputField>
          {formErrors.name?.message ? (
            <StyledErrorMessage>{formErrors.name?.message}</StyledErrorMessage>
          ) : null}
        </div>

        <div>
          <InputField htmlFor="description">
            <span>Plan Description</span>
            <TextArea
              id="description"
              placeholder="Enter some description about the plan"
              {...register('description', planValidationRules.description)}
              hasError={Boolean(formErrors.description?.message)}
            />
          </InputField>
          {formErrors.description?.message ? (
            <StyledErrorMessage>
              {formErrors.description?.message}
            </StyledErrorMessage>
          ) : null}
        </div>
        {errorMessages?.map(({ msg }) => (
          <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
        ))}
      </Form>
    </Modal>
  );
};
