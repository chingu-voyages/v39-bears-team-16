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
import { Button, PrimaryButton } from 'components/Button';
import {
  classValidationRules,
  classWorkValidationRules,
} from 'utilities/validation';
import { FaPlus } from 'react-icons/fa';
import {
  LeftArrow,
  TrashIcon,
} from 'pages/Editor/Classes/ClassComponent.styled';

const StyledForm = styled.form`
  margin: 0 5% 0 5%;
  font-family: 'Poppins';
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Classworks = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClassWorkHeading = styled.div`
  height: 50px;
  background: ${({ theme }) => theme.color.secondary};
  display: flex;
  justify-content: space-between;
  margin: 2px 0 2px 0;
  padding: 10px;

  span {
    height: 30px;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.5px;
  }
`;
const AddNewClassWorkBtn = styled(PrimaryButton)`
  border-radius: 20px;
`;
const ReturnBtn = styled(Button)`
  border-radius: 20px;
  height: 21px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.5px;
  margin: 2% 5% 2% 5%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
      await editClass(data, item._id);
      fetchClasses();
      handleCancelModal();
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  return (
    <Modal
      titleText=""
      isOpen={isOpen}
      onCloseModal={toggle}
      primaryAction={
        <PrimaryButton type="submit" form="EditClassForm">
          Submit
        </PrimaryButton>
      }
      secondaryAction={
        <AddNewClassWorkBtn
          type="button"
          onClick={() =>
            append({
              name: '',
              description: '',
            })
          }
        >
          <FaPlus /> New Class Work
        </AddNewClassWorkBtn>
      }
      customStyles={{
        content: {
          height: '100vh',
          width: '100vw',
        },
      }}
    >
      <ReturnBtn>
        <LeftArrow /> back to Syllabus
      </ReturnBtn>
      <StyledForm id="EditClassForm" onSubmit={handleSubmit(onSubmit)}>
        <InputField htmlFor="name">
          <span>Class Title</span>
          <Input
            type="text"
            id="name"
            placeholder="Enter Class Title"
            {...register('name', classValidationRules.name)}
            defaultValue={item.name}
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
            defaultValue={item.description}
          />
        </InputField>
        {errors.description?.message ? (
          <StyledErrorMessage>{errors.description?.message}</StyledErrorMessage>
        ) : null}

        {fields.map((field, index) => {
          return (
            <div>
              <Classworks key={field.id}>
                <ClassWorkHeading>
                  <span>Class Work {index + 1}</span>
                  <TrashIcon type="button" onClick={() => remove(index)} />
                </ClassWorkHeading>
                <InputField htmlFor="classworkName">
                  <span> Title</span>
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
                  <span> Description</span>
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
              </Classworks>
            </div>
          );
        })}
      </StyledForm>

      {errorMessages?.map(({ msg }) => (
        <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
      ))}
    </Modal>
  );
};
