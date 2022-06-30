import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken } from '../api/getCsrfToken';
import { registerUser } from '../api/register';
import {
  AuthContainer,
  AuthCard,
  AuthHead,
  GithubIcon,
  AuthForm,
  AuthField,
  UserIcon,
  AuthInput,
  EmailIcon,
  PasswordIcon,
  AuthButton,
  AuthRedirectLink,
  CookieRequest,
  CloseIcon,
  AuthSpan,
} from '../components/Auth.elements';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../components/ErrorMessage';
import { ErrorMessageInterface } from '../types';
import { authValidationRules } from '../utilities/validation';
import { GITHUB_AUTH_URL } from '../utilities/constants';

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignUpFormInputs>();
  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );
  const navigate = useNavigate();

  const onSubmit = async (payload: SignUpFormInputs) => {
    try {
      await registerUser(payload);
      navigate('/sign-in', { replace: true });
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <AuthContainer>
      <AuthCard>
        <CookieRequest>
          <CloseIcon />
          Please ensure cookies are enabled.
        </CookieRequest>
        <AuthHead>Sign Up</AuthHead>

        <a href={GITHUB_AUTH_URL}>
          <GithubIcon />
        </a>

        <AuthSpan>or use your email to register</AuthSpan>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <UserIcon />
            <AuthInput
              type="text"
              placeholder="name"
              {...register('name', authValidationRules.name)}
            />
          </AuthField>

          <AuthField>
            <EmailIcon />
            <AuthInput
              type="email"
              placeholder="email"
              {...register('email', authValidationRules.email)}
            />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput
              type="password"
              placeholder="password"
              {...register('password', authValidationRules.password)}
            />
          </AuthField>

          {Object.keys(formErrors).length > 0 && (
            <FormErrorMessages errors={formErrors} />
          )}

          {errorMessages?.map(({ msg }) => (
            <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
          ))}

          <AuthButton type="submit">Sign Up</AuthButton>
        </AuthForm>

        <AuthRedirectLink to="/sign-in">
          Already have an account?
        </AuthRedirectLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignUp;