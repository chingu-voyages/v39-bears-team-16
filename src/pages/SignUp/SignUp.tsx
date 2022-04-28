import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
  SignUpBtn,
  AuthLogin,
} from '../../components/Auth.elements';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (payload: any) => {
    const res = await registerUser(payload);

    if (res.data) {
      navigate('/sign-in', { replace: true });
    } else {
      setErrorMessages(res);
    }
  };

  useEffect(() => {
    if (formErrors) {
      console.log('formErrors', formErrors);
    }
  }, [formErrors]);

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
          <div>
            {errorMessages.map(({ msg, param }) => (
              <span key={param}>{msg}</span>
            ))}
          </div>

          <SignUpBtn type="submit">SIGN UP</SignUpBtn>
        </AuthForm>
        <AuthSub>Already have an account?</AuthSub>
        <AuthLogin to="/sign-in">Login Here</AuthLogin>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignUp;
