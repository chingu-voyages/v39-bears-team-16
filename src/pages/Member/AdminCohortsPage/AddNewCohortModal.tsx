import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { Input, InputField } from '../../../components/Input';
import { Modal } from '../../../components/Modal/Modal';
import { Button, PrimaryButton } from '../../../components/Button';
import {
  adminCreateCohort,
  AdminCreateCohortProps,
} from '../../../api/adminCreateCohort';
import { getPlans } from '../../../api/getPlans';
import { CohortInterface, ErrorMessageInterface } from '../../../types';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../../components/ErrorMessage';
import { cohortValidationRules } from '../../../utilities/validation';

export interface AddNewCohortModalProps {
  isOpen: boolean;
  toggle(): void;
  setCohortsList(value: CohortInterface[]): void;
}

const defaultCohortValues = {
  name: '',
  startDate: '',
  endDate: '',
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const AddNewCohortModal = ({
  isOpen,
  toggle,
  setCohortsList,
}: AddNewCohortModalProps) => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm<AdminCreateCohortProps>();

  const handleCloseModal = () => {
    toggle();
    reset(defaultCohortValues);
  };

  const onSubmit = async (payload: AdminCreateCohortProps) => {
    try {
      await adminCreateCohort(payload);
      const { data } = await getPlans();
      setCohortsList(data);
      handleCloseModal();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  return (
    <Modal
      titleText="Add New Cohort"
      isOpen={isOpen}
      hide={handleCloseModal}
      primaryAction={
        <PrimaryButton type="submit" form="add-cohort-form">
          Submit
        </PrimaryButton>
      }
      secondaryAction={<Button onClick={handleCloseModal}>Cancel</Button>}
    >
      <StyledForm id="add-cohort-form" onSubmit={handleSubmit(onSubmit)}>
        <InputField htmlFor="name">
          <span>Cohort Name</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Cohort Name"
            {...register('name', cohortValidationRules.name)}
          />
        </InputField>
        <InputField htmlFor="start-date">
          <span>Start Date</span>
          <Input
            type="date"
            id="start-date"
            {...register('startDate', cohortValidationRules.startDate)}
          />
        </InputField>
        <InputField htmlFor="end-date">
          <span>End Date</span>
          <Input
            type="date"
            id="end-date"
            {...register('endDate', cohortValidationRules.endDate)}
          />
        </InputField>
        {Object.keys(formErrors).length > 0 && (
          <FormErrorMessages errors={formErrors} />
        )}
        {errorMessages?.map(({ msg }) => (
          <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
        ))}
      </StyledForm>
    </Modal>
  );
};
