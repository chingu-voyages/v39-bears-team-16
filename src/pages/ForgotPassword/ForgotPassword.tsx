import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../../api/forgotPassword';
import { getCsrfToken } from '../../api/getCsrfToken';
import {
  AuthContainer,
  AuthCard,
  KeyIcon,
  AuthForm,
  AuthField,
  AuthInput,
  EmailIcon,
  AuthButton,
  AuthRedirectLink,
  AuthSpan,
  AuthHead,
} from '../../components/Auth.elements';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';
import { ErrorMessageType } from '../../types';
import { authValidationRules } from '../../utilities/validation';

interface ForgotPasswordFormInputs {
  email: string;
}

const ForgotPassword = () => {
  const [errorMessages, setErrorMessages] = useState<ErrorMessageType[]>([]);
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
      setErrorMessages(error as ErrorMessageType[]);
    }
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHead>Forgot Password</AuthHead>
        <KeyIcon />
        <AuthSpan>Enter your email to get a password reset link.</AuthSpan>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <EmailIcon />
            <AuthInput
              type="email"
              placeholder="email"
              {...register('email', { ...authValidationRules.email })}
            />
          </AuthField>
          {Object.keys(formErrors).length > 0 && (
            <FormErrorMessages errors={formErrors} />
          )}

          {errorMessages?.map(({ msg, param }) => (
            <StyledErrorMessage key={param}>{msg}</StyledErrorMessage>
          ))}
          <AuthButton type="submit">Send Reset Link</AuthButton>
        </AuthForm>
        <AuthRedirectLink to="/sign-in">Try again?</AuthRedirectLink>
        {showSuccessMessage && <p>Check your email for the next steps.</p>}
      </AuthCard>
    </AuthContainer>
  );
};

export default ForgotPassword;
