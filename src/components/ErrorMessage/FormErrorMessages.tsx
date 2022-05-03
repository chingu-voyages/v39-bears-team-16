import React from 'react';
import { FieldErrors } from 'react-hook-form';
import { ErrorMessageList, StyledErrorMessage } from './ErrorMessage.styled';

interface ErrorProps {
  errors: FieldErrors;
}

export const FormErrorMessages = ({ errors }: ErrorProps) => {
  return (
    <ErrorMessageList>
      {Object.keys(errors).map((fieldName) => {
        return (
          <li key={fieldName}>
            <StyledErrorMessage>{errors[fieldName].message}</StyledErrorMessage>
          </li>
        );
      })}
    </ErrorMessageList>
  );
};
