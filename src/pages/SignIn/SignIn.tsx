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
  AuthSub,
  AuthForm,
  AuthField,
  AuthInput,
  EmailIcon,
  PasswordIcon,
  AuthButton,
  AuthRedirectLink,
  CookieRequest,
} from '../../components/Auth.elements';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';
import { ErrorMessageType } from '../../types';
import { getValidationRules } from '../../utilities/auth';

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
        <AuthHead>Sign In</AuthHead>
        <GithubIcon />
        <AuthSub>or use your email to login</AuthSub>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <EmailIcon />
            <AuthInput
              type="text"
              placeholder="email"
              {...register('email', { ...getValidationRules('email') })}
            />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput
              type="password"
              placeholder="password"
              {...register('password', { ...getValidationRules('password') })}
            />
          </AuthField>

          <FormErrorMessages errors={formErrors} />

          {errorMessages?.map(({ msg }) => (
            <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
          ))}

          <AuthButton type="submit">SIGN IN</AuthButton>
        </AuthForm>
        <AuthSub>Forget your password?</AuthSub>
        <AuthRedirectLink to="/forgot-password">Click Here</AuthRedirectLink>
        or
        <AuthSub>Create Account</AuthSub>
        <AuthRedirectLink to="/sign-up">Click Here</AuthRedirectLink>
        <CookieRequest>Please enable cookies to stay signed in.</CookieRequest>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignIn;
