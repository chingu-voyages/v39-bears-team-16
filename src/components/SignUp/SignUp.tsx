import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './SignUp.elements';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);

  return (
    <S.AuthContainer>
      <S.AuthCard>
        <S.AuthHead>Sign Up</S.AuthHead>
        <S.TwitterIcon />
        <S.AuthSub>or use your email to register</S.AuthSub>
        <S.AuthForm onSubmit={handleSubmit(onSubmit)}>
          <S.AuthField>
            <S.UserIcon />
            <S.AuthInput
              type="text"
              placeholder="name"
              {...register('name', { required: true, maxLength: 80 })}
            />
          </S.AuthField>

          <S.AuthField>
            <S.EmailIcon />
            <S.AuthInput
              type="email"
              placeholder="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </S.AuthField>

          <S.AuthField>
            <S.PasswordIcon />
            <S.AuthInput
              type="password"
              placeholder="password"
              {...register('password', { required: true })}
            />
          </S.AuthField>

          <S.SignUpBtn type="submit">SIGN UP</S.SignUpBtn>
        </S.AuthForm>
        <S.AuthSub>Already have an account?</S.AuthSub>
        <S.AuthLogin to="/sign-in">Login Here</S.AuthLogin>
      </S.AuthCard>
    </S.AuthContainer>
  );
};

export default SignUp;
