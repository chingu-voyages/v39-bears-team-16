/* eslint-disable no-bitwise */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Input, InputField, TextArea } from 'components/Input';
import { ErrorMessageInterface } from 'types';
import { EditClassModalProps } from 'pages/Editor/Classes/classTypes';
import { CreateClassProps, editClass } from 'api/classes';
import { v4 as uuidv4 } from 'uuid';
import { StyledErrorMessage } from 'components/ErrorMessage';

import { Modal } from 'components/Modal/Modal';
import {
  TransparentButton,
  PrimaryButton,
  SecondaryButton,
} from 'components/Button';
import {
  classValidationRules,
  classWorkValidationRules,
} from 'utilities/validation';
import { FaPlus } from 'react-icons/fa';
import { TrashIcon } from 'pages/Editor/Classes/EditorClassComponent.styled';

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
    0 8px 1px -8px hsla(0, 0%, 0%, 0.1), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
`;

/* eslint no-underscore-dangle: 0 */

export const EditClassModal = ({
  classData,
  isOpen,
  toggle,
  fetchClasses,
}: EditClassModalProps) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateClassProps>({
    defaultValues: {
      classworks: classData.classworks,
    },
    mode: 'onChange',
  });
  const { fields, append, remove } = useFieldArray({
    name: 'classworks',
    control,
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );

  // ClassWork

  const handleCancelModal = () => {
    reset();
    toggle();
  };

  const onSubmit = async (data: CreateClassProps) => {
    try {
      await editClass(data, classData._id);
      fetchClasses();
      handleCancelModal();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  return (
    <Modal
      titleText="Edit Class"
      isOpen={isOpen}
      onCloseModal={toggle}
      primaryAction={
        <SecondaryButton type="submit" form="EditClassForm">
          Submit
        </SecondaryButton>
      }
      secondaryAction={
        <TransparentButton onClick={handleCancelModal}>
          Cancel
        </TransparentButton>
      }
      customStyles={{
        content: {
          height: '90vh',
          width: '90vw',
        },
      }}
    >
      <StyledForm id="EditClassForm" onSubmit={handleSubmit(onSubmit)}>
        <InputField htmlFor="name">
          <span>Class Title</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Class Title"
            {...register('name', classValidationRules.name)}
            defaultValue={classData.name}
          />
        </InputField>
        {errors.name?.message ? (
          <StyledErrorMessage>{errors.name?.message}</StyledErrorMessage>
        ) : null}
        <InputField htmlFor="description">
          <span>Class Description</span>
          <TextArea
            id="description"
            placeholder="Enter Class description"
            {...register('description', classValidationRules.description)}
            defaultValue={classData.description}
          />
        </InputField>
        {errors.description?.message ? (
          <StyledErrorMessage>{errors.description?.message}</StyledErrorMessage>
        ) : null}

        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <Classworks key={field.id}>
                <InputField htmlFor="classworkName">
                  <span>Class Work {index + 1}</span>
                  <Input
                    placeholder="name"
                    {...register(
                      `classworks.${index}.name` as const,
                      classWorkValidationRules.name
                    )}
                    defaultValue={field.name}
                  />
                </InputField>
                {errors.classworks?.map(({ name }, ind) =>
                  ind === index ? (
                    <StyledErrorMessage key={uuidv4()}>
                      {name?.message}
                    </StyledErrorMessage>
                  ) : null
                )}
                <InputField htmlFor="classworkDescription">
                  <Input
                    placeholder="description"
                    {...register(
                      `classworks.${index}.description` as const,
                      classWorkValidationRules.description
                    )}
                    defaultValue={field.description}
                  />
                </InputField>
                {errors.classworks?.map(({ description }, ind) =>
                  ind === index ? (
                    <StyledErrorMessage key={uuidv4()}>
                      {description?.message}
                    </StyledErrorMessage>
                  ) : null
                )}
                <TrashIcon type="button" onClick={() => remove(index)} />
              </Classworks>
            </div>
          );
        })}
        <PrimaryButton
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
      {errorMessages?.map(({ msg }) => (
        <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
      ))}
    </Modal>
  );
};
