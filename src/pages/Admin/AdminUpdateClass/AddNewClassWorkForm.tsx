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
import { StyledSuccessMessage } from '../../../components/SuccessMessage';

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

interface classIDProps {
  classId: string | undefined;
}

export const AddNewClassWorkForm = ({ classId }: classIDProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminCreateClassWorkProps>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageType[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const { id } = useParams();

  const onSubmit = async (payload: AdminCreateClassWorkProps) => {
    try {
      await adminCreateClassWorks(payload, classId, id);
      setSuccess(true);
    } catch (error) {
      setErrorMessages(error as ErrorMessageType[]);
      setSuccess(false);
    }
  };

  return (
    <StyledForm id="addClassWork" onSubmit={handleSubmit(onSubmit)}>
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

      {success ? (
        <StyledSuccessMessage>
          The ClassWork has been added
        </StyledSuccessMessage>
      ) : null}

      {Object.keys(errors).length > 0 && <FormErrorMessages errors={errors} />}
      {errorMessages?.map(({ msg }) => (
        <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
      ))}
    </StyledForm>
  );
};
