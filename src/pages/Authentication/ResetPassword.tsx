import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getCsrfToken } from 'api/getCsrfToken';
import { resetPassword } from 'api/resetPassword';
import { StyledErrorMessage } from 'components';
import { ErrorMessageInterface } from 'types';
import { authValidationRules } from 'utilities/validation';
import {
  AuthCard,
  AuthForm,
  AuthField,
  AuthInput,
  AuthButton,
  AuthHead,
  LockIconWrapper,
} from './Auth.elements';
import {
  PasswordIcon,
  EmailIcon,
  LockIcon,
} from './components/AuthenticationIcons';
import { AuthPageContainer } from './components/AuthPageContainer';

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

  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );
  const navigate = useNavigate();

  const onSubmit = async (payload: ResetPasswordInputs) => {
    try {
      await resetPassword({ ...payload, token });
      navigate('/sign-in', { replace: true });
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <AuthPageContainer>
      <AuthCard>
        <LockIconWrapper>
          <LockIcon />
        </LockIconWrapper>
        <AuthHead>Reset Password</AuthHead>

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AuthField>
              <EmailIcon />
              <AuthInput
                type="email"
                placeholder="email"
                {...register('email', authValidationRules.email)}
              />
            </AuthField>
            {formErrors.email?.message ? (
              <StyledErrorMessage>
                {formErrors.email?.message}
              </StyledErrorMessage>
            ) : null}
          </div>
          <div>
            <AuthField>
              <PasswordIcon />
              <AuthInput
                type="password"
                placeholder="new password"
                {...register('newPassword', authValidationRules.newPassword)}
              />
            </AuthField>
            {formErrors.newPassword?.message ? (
              <StyledErrorMessage>
                {formErrors.newPassword?.message}
              </StyledErrorMessage>
            ) : null}
          </div>

          <div>
            <AuthField>
              <PasswordIcon />
              <AuthInput
                type="password"
                placeholder="confirm new password"
                {...register(
                  'passwordConfirmation',
                  authValidationRules.passwordConfirmation
                )}
              />
            </AuthField>
            {formErrors.passwordConfirmation?.message ? (
              <StyledErrorMessage>
                {formErrors.passwordConfirmation?.message}
              </StyledErrorMessage>
            ) : null}
          </div>

          {errorMessages?.map(({ msg }) => (
            <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
          ))}
          <AuthButton type="submit">Change Password</AuthButton>
        </AuthForm>
      </AuthCard>
    </AuthPageContainer>
  );
};

export default ResetPassword;
