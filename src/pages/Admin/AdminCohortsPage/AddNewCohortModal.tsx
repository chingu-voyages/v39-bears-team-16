import React, { FormHTMLAttributes, useState } from 'react';
import styled from 'styled-components';

import { Input, InputField } from '../../../components/Input';
import { Modal } from '../../../components/Modal/Modal';
import { Button, PrimaryButton } from '../../../components/Button';
import {
  adminCreateCohort,
  AdminCreateCohortProps,
} from '../../../api/adminCreateCohort';
import { getAdminCohorts } from '../../../api/getAdminCohorts';
import { Cohort, ErrorMessageType } from '../../../types';
import { StyledErrorMessage } from '../../../components/ErrorMessage';

export interface AddNewCohortModalProps {
  isOpen: boolean;
  toggle(): void;
  setCohortsList(value: Cohort[]): void;
}

const defaultCohortValues = {
  name: '',
  startDate: '',
  endDate: '',
};

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const AddNewCohortModal = ({
  isOpen,
  toggle,
  setCohortsList,
}: AddNewCohortModalProps) => {
  const [values, setValues] = useState(defaultCohortValues);
  const [errorMessage, setErrorMessage] = useState('');

  const addNewCohort = async (payload: AdminCreateCohortProps) => {
    try {
      await adminCreateCohort(payload);
      const { data } = await getAdminCohorts();
      setCohortsList(data);
      setValues(defaultCohortValues);
    } catch (error) {
      const { msg } = error as ErrorMessageType;
      setErrorMessage(msg);
    }
  };

  const handleSubmit = () => {
    addNewCohort(values);
    toggle();
  };

  const handleChange = (value: string, fieldName: string) => {
    setValues({
      ...values,
      [fieldName]: value || '',
    });
  };

  return (
    <Modal
      titleText="Add New Cohort"
      isOpen={isOpen}
      hide={toggle}
      primaryAction={
        <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
      }
      secondaryAction={<Button onClick={toggle}>Cancel</Button>}
    >
      <StyledForm>
        <InputField htmlFor="name">
          <span>Cohort Name</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Cohort Name"
            value={values.name}
            onChange={(e) => handleChange(e.target.value, 'name')}
          />
        </InputField>
        <InputField htmlFor="name">
          <span>Start Date</span>
          <Input
            type="text"
            id="start-date"
            placeholder="YYYY-MM-DD"
            value={values.startDate}
            onChange={(e) => handleChange(e.target.value, 'startDate')}
          />
        </InputField>
        <InputField htmlFor="name">
          <span>End Date</span>
          <Input
            type="text"
            id="end-date"
            placeholder="YYYY-MM-DD"
            value={values.endDate}
            onChange={(e) => handleChange(e.target.value, 'endDate')}
          />
        </InputField>
      </StyledForm>
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </Modal>
  );
};
