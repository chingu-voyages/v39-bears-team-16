import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { forgotPassword } from 'api/forgotPassword';
import { getCsrfToken } from 'api/getCsrfToken';
import { StyledErrorMessage } from 'components';
import { ErrorMessageInterface } from 'types';
import { authValidationRules } from 'utilities/validation';
import {
  AuthCard,
  AuthForm,
  AuthField,
  AuthInput,
  AuthButton,
  AuthRedirectLink,
  AuthSpan,
  AuthHead,
  LockIconWrapper,
} from './Auth.elements';
import { LockIcon, EmailIcon } from './components/AuthenticationIcons';
import { AuthPageContainer } from './components/AuthPageContainer';

interface ForgotPasswordFormInputs {
  email: string;
}

const ForgotPassword = () => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ForgotPasswordFormInputs>();

  const onSubmit = async (payload: ForgotPasswordFormInputs) => {
    try {
      await forgotPassword(payload);
      setShowSuccessMessage(true);
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
        <AuthHead>Forgot Password</AuthHead>
        <AuthSpan>Enter your email to reset password</AuthSpan>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AuthField hasError={Boolean(formErrors.email?.message)}>
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

          {errorMessages?.map(({ msg, param }) => (
            <StyledErrorMessage key={param}>{msg}</StyledErrorMessage>
          ))}
          <AuthButton type="submit">Send Reset Link</AuthButton>
        </AuthForm>
        <AuthRedirectLink to="/sign-in">Return to Login</AuthRedirectLink>
        {showSuccessMessage && <p>Check your email for the next steps</p>}
      </AuthCard>
    </AuthPageContainer>
  );
};

export default ForgotPassword;
