/* eslint-disable prettier/prettier */
/* eslint-disable no-bitwise */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Input, InputField, Select, TextArea, Option } from 'components/Input';
import { ErrorMessageInterface } from 'types';
import { EditClassModalProps } from 'pages/Editor/Classes/classTypes';
import { CreateClassProps, editClass } from 'api/classes';
import { v4 as uuidv4 } from 'uuid';
import { StyledErrorMessage } from 'components/ErrorMessage';
import { Modal } from 'components/Modal/Modal';
import { LinkButton, SecondaryButton } from 'components/Button';
import {
  classValidationRules,
  classWorkValidationRules,
} from 'utilities/validation';
import { FaPlus } from 'react-icons/fa';
import {
  LeftArrow,
  TrashIcon,
} from 'pages/Editor/Classes/EditorClassComponent.styled';

import { StyledForm, Classworks, ClassWorkHeading, AddNewClassWorkBtn } from 'pages/Editor/Classes/styles'


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
      await fetchClasses();
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
        <SecondaryButton type="submit" form="EditClassForm">
          Save
        </SecondaryButton>
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
          <FaPlus /> Add New Classwork
        </AddNewClassWorkBtn>
      }
      customStyles={{
        content: {
          height: '100vh',
          width: '100vw',
        },
      }}
    >
      <LinkButton onClick={handleCancelModal}>
        <LeftArrow /> back to Syllabus
      </LinkButton>
      <StyledForm id="EditClassForm" onSubmit={handleSubmit(onSubmit)}>
        <InputField htmlFor="name">
          <span>Class Title</span>
          <Input
            type="text"
            id="name"
            aria-invalid={errors.name ? 'true' : 'false'}
            placeholder="Enter Class Title"
            {...register('name', classValidationRules.name)}
            defaultValue={classData.name}
          />
        </InputField>
        {errors.name?.message ? (
          <StyledErrorMessage role="alert">
            {errors.name?.message}
          </StyledErrorMessage>
        ) : null}
        <InputField htmlFor="description">
          <span>Class Description</span>
          <TextArea
            id="description"
            aria-invalid={errors.description ? 'true' : 'false'}
            placeholder="Enter Class description"
            {...register('description', classValidationRules.description)}
            defaultValue={classData.description}
          />
        </InputField>
        {errors.description?.message ? (
          <StyledErrorMessage role="alert">
            {errors.description?.message}
          </StyledErrorMessage>
        ) : null}

        {fields.map((field, index) => {
          return (
            <div>
              <Classworks key={field.id}>
                <ClassWorkHeading>
                  <span>Classwork {index + 1}</span>
                  <TrashIcon type="button" onClick={() => remove(index)} />
                </ClassWorkHeading>
                <InputField htmlFor="type">
                  <span> Type</span>
                  <Select
                    id="type"
                    placeholder="Select Type"
                    {...register(
                      `classworks.${index}.type` as const,
                      classWorkValidationRules.type
                    )}
                    defaultValue={field.type}
                  >
                    <Option value="material" selected>
                      Material
                    </Option>
                    <Option value="submission">Submission</Option>
                  </Select>
                </InputField>
                {errors.classworks?.map(({ type }, ind) =>
                  ind === index ? (
                    <StyledErrorMessage role="alert" key={uuidv4()}>
                      {type?.message}
                    </StyledErrorMessage>
                  ) : null
                )}
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
                    <StyledErrorMessage role="alert" key={uuidv4()}>
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
                    <StyledErrorMessage role="alert" key={uuidv4()}>
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