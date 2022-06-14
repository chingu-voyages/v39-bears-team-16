import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { forgotPassword } from '../../api/forgotPassword';
import { getCsrfToken } from '../../api/getCsrfToken';
import {
  AuthContainer,
  AuthCard,
  AuthForgetHead,
  KeyIcon,
  AuthSpan,
  AuthForm,
  AuthField,
  AuthInput,
  EmailIcon,
  AuthButton,
  AuthRedirectLink,
} from '../../components/Auth.elements';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';
import { ErrorMessageType } from '../../types';
import { getValidationRules } from '../../utilities/auth';

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
        <AuthForgetHead>
          Yo! Forgot your <br /> password again?!
        </AuthForgetHead>
        <KeyIcon />
        <AuthSpan>
          No worries! <br /> Enter your email and we will send you a reset
        </AuthSpan>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <EmailIcon />
            <AuthInput
              type="email"
              placeholder="email"
              {...register('email', { ...getValidationRules('email') })}
            />
          </AuthField>
          <FormErrorMessages errors={formErrors} />

          {errorMessages?.map(({ msg, param }) => (
            <StyledErrorMessage key={param}>{msg}</StyledErrorMessage>
          ))}
          <AuthButton type="submit">SEND REQUEST</AuthButton>
        </AuthForm>
        <AuthSpan>Try again?</AuthSpan>
        <AuthRedirectLink to="/sign-in">Login Here</AuthRedirectLink>
        {showSuccessMessage && <p>Check your email for the next steps</p>}
      </AuthCard>
    </AuthContainer>
  );
};

export default ForgotPassword;
