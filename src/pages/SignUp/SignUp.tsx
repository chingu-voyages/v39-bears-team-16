import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken } from '../../api/getCsrfToken';
import { registerUser } from '../../api/register';
import {
  AuthContainer,
  AuthCard,
  AuthHead,
  TwitterIcon,
  AuthSub,
  AuthForm,
  AuthField,
  UserIcon,
  AuthInput,
  EmailIcon,
  PasswordIcon,
  AuthButton,
  AuthRedirectLink,
} from '../../components/Auth.elements';
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

const validationRules = {
  name: {
    required: 'Name is required',
    maxLength: {
      value: 80,
      message: 'Name cannot exceed 80 characters',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email is invalid',
    },
  },
  password: {
    required: 'Password is required',
  },
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignUpFormInputs>();
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (payload: SignUpFormInputs) => {
    await getCsrfToken();
    const res = await registerUser(payload);

    if (res.data) {
      navigate('/sign-in', { replace: true });
    } else {
      setErrorMessages(res);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthHead>Sign Up</AuthHead>
        <TwitterIcon />
        <AuthSub>or use your email to register</AuthSub>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <UserIcon />
            <AuthInput
              type="text"
              placeholder="name"
              {...register('name', { ...validationRules.name })}
            />
          </AuthField>

          <AuthField>
            <EmailIcon />
            <AuthInput
              type="email"
              placeholder="email"
              {...register('email', { ...validationRules.email })}
            />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput
              type="password"
              placeholder="password"
              {...register('password', { ...validationRules.password })}
            />
          </AuthField>
          <FormErrorMessages errors={formErrors} />

          {errorMessages.map(({ msg, param }) => (
            <StyledErrorMessage key={param}>{msg}</StyledErrorMessage>
          ))}

          <AuthButton type="submit">SIGN UP</AuthButton>
        </AuthForm>
        <AuthSub>Already have an account?</AuthSub>
        <AuthRedirectLink to="/sign-in">Login Here</AuthRedirectLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignUp;
