import React from 'react';
import { useForm } from 'react-hook-form';
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

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);

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
              {...register('name', { required: true, maxLength: 80 })}
            />
          </AuthField>

          <AuthField>
            <EmailIcon />
            <AuthInput
              type="email"
              placeholder="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput
              type="password"
              placeholder="password"
              {...register('password', { required: true })}
            />
          </AuthField>

          <AuthButton type="submit">SIGN UP</AuthButton>
        </AuthForm>
        <AuthSub>Already have an account?</AuthSub>
        <AuthRedirectLink to="/sign-in">Login Here</AuthRedirectLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignUp;
