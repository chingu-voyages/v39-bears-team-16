import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getCsrfToken } from '../../api/getCsrfToken';
import { resetPassword } from '../../api/resetPassword';
import {
  AuthContainer,
  AuthCard,
  KeySuccessIcon,
  AuthForm,
  AuthField,
  AuthInput,
  AuthButton,
  PasswordIcon,
  EmailIcon,
  AuthHead,
} from '../../components/Auth.elements';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';
import { ErrorMessageType } from '../../types';
import { getValidationRules } from '../../utilities/auth';

interface ResetPasswordInputs {
  email: string;
  newPassword: string;
  passwordConfirmation: string;
}

const ResetPassword = () => {
  const { token = '' } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ResetPasswordInputs>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageType[]>([]);
  const navigate = useNavigate();

  const onSubmit = async (payload: ResetPasswordInputs) => {
    try {
      await resetPassword({ ...payload, token });
      navigate('/sign-in', { replace: true });
    } catch (error) {
      setErrorMessages(error as ErrorMessageType[]);
    }
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHead>Reset Password</AuthHead>
        <KeySuccessIcon />

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <EmailIcon />
            <AuthInput
              type="email"
              placeholder="email"
              {...register('email', { ...getValidationRules('email') })}
            />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput
              type="password"
              placeholder="new password"
              {...register('newPassword', {
                ...getValidationRules('newPassword'),
              })}
            />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput
              type="password"
              placeholder="confirm new password"
              {...register('passwordConfirmation', {
                ...getValidationRules('passwordConfirmation'),
              })}
            />
          </AuthField>
          {Object.keys(formErrors).length > 0 && (
            <FormErrorMessages errors={formErrors} />
          )}

          {errorMessages?.map(({ msg }) => (
            <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
          ))}
          <AuthButton type="submit">Change Password</AuthButton>
        </AuthForm>
      </AuthCard>
    </AuthContainer>
  );
};

export default ResetPassword;
