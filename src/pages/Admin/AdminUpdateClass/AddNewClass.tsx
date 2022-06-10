import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Input, InputField } from '../../../components/Input';
import { ErrorMessageType } from '../../../types';
import { ERROR_MESSAGES } from '../../../utilities/constants';
import {
  adminCreateClass,
  AdminCreateClassProps,
  getAdminClass,
} from '../../../api/getAdminClasses';
import { PrimaryButton } from '../../../components/Button';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

interface InputProps {
  example: string;
  exampleRequired: string;
}

export const AddNewClassForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<any>();

  const { id } = useParams();
  console.log(id);

  const onSubmit = async (payload: AdminCreateClassProps) => {
    try {
      await adminCreateClass(payload, id);
      const { data } = await getAdminClass(id);
      console.log(data, 'in Post call');
    } catch (error) {
      console.log(error, 'error');
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
            {...register('name', {
              required: 'Please enter your Class Title.',
            })}
          />
        </InputField>
        <InputField htmlFor="subject">
          <span>Class Description</span>
          <Input
            type="text"
            id="subject"
            placeholder="Enter Class description"
            {...register('subject')}
          />
        </InputField>
        <InputField htmlFor="date">
          <span>Date</span>
          <Input
            type="text"
            id="date"
            placeholder="yyyy-mm-dd"
            {...register('date')}
          />
        </InputField>

        <PrimaryButton type="submit" form="addClassForm">
          Submit
        </PrimaryButton>
      </form>
    </StyledForm>
  );
};
