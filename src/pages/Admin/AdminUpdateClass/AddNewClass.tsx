import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Input, InputField } from '../../../components/Input';
import { ErrorMessageType } from '../../../types';
import {
  adminCreateClass,
  AdminCreateClassProps,
} from '../../../api/getAdminClasses';

import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../../components/ErrorMessage';
import { StyledSuccessMessage } from '../../../components/SuccessMessage';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const classValidationRules = {
  name: {
    required: 'Class Title is required',
  },
  subject: {
    required: 'Class Description is required',
  },
  date: {
    required: 'Date is required',
  },
};

export const AddNewClassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminCreateClassProps>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageType[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const { id } = useParams();

  const onSubmit = async (payload: AdminCreateClassProps) => {
    try {
      await adminCreateClass(payload, id);
      setSuccess(true);
    } catch (error) {
      setErrorMessages(error as ErrorMessageType[]);
      setSuccess(false);
    }
  };

  return (
    <StyledForm>
      <form id="addClassForm" onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            type="text"
            id="subject"
            placeholder="Enter Class description"
            {...register('subject', classValidationRules.subject)}
          />
        </InputField>
        <InputField htmlFor="date">
          <span>Date</span>
          <Input
            type="text"
            id="date"
            placeholder="yyyy-mm-dd"
            {...register('date', classValidationRules.date)}
          />
        </InputField>

        {success ? (
          <StyledSuccessMessage>The Class has been added</StyledSuccessMessage>
        ) : null}

        {Object.keys(errors).length > 0 && (
          <FormErrorMessages errors={errors} />
        )}
        {errorMessages?.map(({ msg }) => (
          <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
        ))}
      </form>
    </StyledForm>
  );
};
