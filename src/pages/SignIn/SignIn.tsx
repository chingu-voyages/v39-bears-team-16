import React from 'react';
import {
  AuthContainer,
  AuthCard,
  AuthHead,
  TwitterIcon,
  AuthSub,
  AuthForm,
  AuthField,
  AuthProgram,
  AuthProgramField,
  AuthSelect,
  UserIcon,
  ProgramIcon,
  CohortIcon,
  AuthInput,
  EmailIcon,
  PasswordIcon,
  SignUpBtn,
  AuthLogin,
} from '../../components/Auth.elements';

const SignIn = () => {
  return (
    <AuthContainer>
      <AuthCard>
        <AuthHead>Sign In</AuthHead>
        <TwitterIcon />
        <AuthSub>or use your email to login</AuthSub>

        <AuthForm>
          <AuthField>
            <EmailIcon />
            <AuthInput />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput />
          </AuthField>

          <AuthProgram>
            <AuthProgramField>
              <ProgramIcon />
              <AuthSelect />
            </AuthProgramField>

            <AuthProgramField>
              <CohortIcon />
              <AuthSelect />
            </AuthProgramField>
          </AuthProgram>

          <SignUpBtn type="submit">SIGN IN</SignUpBtn>
        </AuthForm>
        <AuthSub>Forget your password?</AuthSub>
        <AuthLogin to="/forgot-password">Click Here</AuthLogin>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignIn;
