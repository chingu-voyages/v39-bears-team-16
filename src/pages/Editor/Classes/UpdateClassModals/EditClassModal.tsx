/* eslint-disable no-bitwise */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Control, useFieldArray, useForm, useWatch } from 'react-hook-form';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Input, InputField, TextArea } from 'components/Input';
import { ErrorMessageInterface, EditClassModalProps } from 'types';
import { CreateClassProps, editClass } from 'api/classes';

import { FormErrorMessages, StyledErrorMessage } from 'components/ErrorMessage';

import { Modal } from 'components/Modal/Modal';
import {
  Button,
  InvertPrimaryButton,
  PrimaryButton,
  WarningButton,
} from 'components/Button';
import { classValidationRules } from 'utilities/validation';
import { FaPlus } from 'react-icons/fa';
import { TrashIcon } from '../ClassComponent.styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Classworks = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 1em;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
`;

export const ClassWorkButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: 4px;
  height: 2.5em;
  color: ${({ theme }) => theme.color.primary};
  width: 30%;
`;

/* eslint no-underscore-dangle: 0 */

export const EditClassModal = ({
  item,
  isOpen,
  toggle,
  fetchClasses,
}: EditClassModalProps) => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateClassProps>({
    defaultValues: {
      classworks: item.classworks,
    },
    mode: 'onChange',
  });
  const { fields, append, remove } = useFieldArray({
    name: 'classworks',
    control,
  });
  useEffect(() => {
    setValue('name', item.name);
    setValue('description', item.description);
  }, [item.name, item.description, setValue]);

  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );

  // ClassWork

  const handleCancelModal = () => {
    setValue('name', item.name);
    setValue('description', item.description);
    reset();
    toggle();
  };

  const onSubmit = async (data: CreateClassProps) => {
    try {
      await editClass(data, item._id);
      fetchClasses();
      reset();
      toggle();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  return (
    <Modal
      className="edit"
      titleText="Edit Class"
      isOpen={isOpen}
      onCloseModal={toggle}
      primaryAction={
        <PrimaryButton type="submit" form="EditClassForm">
          Submit
        </PrimaryButton>
      }
      secondaryAction={<Button onClick={handleCancelModal}>Cancel</Button>}
    >
      <StyledForm id="EditClassForm" onSubmit={handleSubmit(onSubmit)}>
        <InputField htmlFor="name">
          <span>Class Title</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Class Title"
            {...register('name', classValidationRules.name)}
          />
        </InputField>
        <InputField htmlFor="description">
          <span>Class Description</span>
          <TextArea
            id="description"
            placeholder="Enter Class description"
            {...register('description', classValidationRules.description)}
          />
        </InputField>

        {fields.map((field, index) => {
          return (
            <Classworks key={field.id}>
              <Input
                placeholder="name"
                {...register(`classworks.${index}.name` as const, {
                  required: true,
                })}
                defaultValue={field.name}
              />
              <Input
                placeholder="description"
                {...register(`classworks.${index}.description` as const, {
                  required: true,
                })}
                defaultValue={field.description}
              />

              <TrashIcon type="button" onClick={() => remove(index)} />
            </Classworks>
          );
        })}
        <PrimaryButton
          type="button"
          onClick={() =>
            append({
              name: '',
              description: '',
            })
          }
        >
          <FaPlus /> New Class Work
        </PrimaryButton>
      </StyledForm>
      {Object.keys(errors).length > 0 && <FormErrorMessages errors={errors} />}
      {errorMessages?.map(({ msg }) => (
        <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
      ))}
    </Modal>
  );
};
