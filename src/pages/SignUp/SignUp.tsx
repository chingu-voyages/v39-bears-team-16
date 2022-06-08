import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken } from '../../api/getCsrfToken';
import { registerUser } from '../../api/register';
import {
  AuthContainer,
  AuthCard,
  AuthHead,
  GithubIcon,
  AuthSub,
  AuthForm,
  AuthField,
  UserIcon,
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
  const [errorMessages, setErrorMessages] = useState<ErrorMessageType[]>([]);
  const navigate = useNavigate();

  const onSubmit = async (payload: SignUpFormInputs) => {
    try {
      await registerUser(payload);
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
        <AuthHead>Sign Up</AuthHead>
        <a href="http://localhost:5000/auth/github">
          {' '}
          <GithubIcon />
        </a>
        <AuthSub>or use your email to register</AuthSub>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <UserIcon />
            <AuthInput
              type="text"
              placeholder="name"
              {...register('name', { ...getValidationRules('name') })}
            />
          </AuthField>

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
              placeholder="password"
              {...register('password', { ...getValidationRules('password') })}
            />
          </AuthField>
          <FormErrorMessages errors={formErrors} />

          {errorMessages?.map(({ msg }) => (
            <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
          ))}

          <AuthButton type="submit">SIGN UP</AuthButton>
        </AuthForm>
        <AuthSub>Already have an account?</AuthSub>
        <AuthRedirectLink to="/sign-in">Login Here</AuthRedirectLink>
        <CookieRequest>Please make sure cookies are enabled.</CookieRequest>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignUp;
