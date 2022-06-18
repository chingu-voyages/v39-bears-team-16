import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken } from '../../api/getCsrfToken';
import { login } from '../../api/login';
import { logout } from '../../api/logout';
import {
  AuthContainer,
  AuthCard,
  AuthHead,
  GithubIcon,
  AuthForm,
  AuthField,
  AuthInput,
  EmailIcon,
  PasswordIcon,
  AuthButton,
  AuthRedirectLink,
  CookieRequest,
  CloseIcon,
  AuthSpan,
  AuthFoot,
} from '../../components/Auth.elements';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';
import { ErrorMessageType } from '../../types';
import { authValidationRules } from '../../utilities/validation';
import { GITHUB_AUTH_URL } from '../../utilities/constants';

interface SignInFormInputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignInFormInputs>();
  const [errorMessages, setErrorMessages] = useState<ErrorMessageType[]>([]);
  const navigate = useNavigate();

  const onSubmit = async (payload: SignInFormInputs) => {
    try {
      const res = await login(payload);
      const redirectUrl = res?.data?.isAdmin ? '/admin' : '/student';
      navigate(redirectUrl, { replace: true });
    } catch (error) {
      setErrorMessages(error as ErrorMessageType[]);
    }
  };

  useEffect(() => {
    getCsrfToken().then(() => logout());
  }, []);

  return (
    <AuthContainer>
      <AuthCard>
        <CookieRequest>
          <CloseIcon />
          Please ensure cookies are enabled.
        </CookieRequest>
        <AuthHead>Sign In</AuthHead>
        <a href={GITHUB_AUTH_URL}>
          <GithubIcon />
        </a>
        <AuthSpan>or use your email to login</AuthSpan>

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <EmailIcon />
            <AuthInput
              type="text"
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

          <AuthButton type="submit">Sign In</AuthButton>
        </AuthForm>

        <AuthFoot>
          <AuthRedirectLink to="/forgot-password">
            Forgot your password?
          </AuthRedirectLink>

          <AuthSpan>or</AuthSpan>

          <AuthRedirectLink to="/sign-up">
            Create a new account
          </AuthRedirectLink>
        </AuthFoot>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignIn;
