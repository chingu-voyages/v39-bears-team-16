import React from 'react';
import {
  AuthContainer,
  AuthCard,
  AuthHead,
  TwitterIcon,
  AuthSub,
  AuthForm,
  AuthField,
  AuthProgramContainer,
  AuthProgramField,
  AuthSelect,
  ProgramIcon,
  CohortIcon,
  AuthInput,
  EmailIcon,
  PasswordIcon,
  AuthButton,
  AuthRedirectLink,
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

          <AuthProgramContainer>
            <AuthProgramField>
              <ProgramIcon />
              <AuthSelect />
            </AuthProgramField>

            <AuthProgramField>
              <CohortIcon />
              <AuthSelect />
            </AuthProgramField>
          </AuthProgramContainer>

          <AuthButton type="submit">SIGN IN</AuthButton>
        </AuthForm>
        <AuthSub>Forget your password?</AuthSub>
        <AuthRedirectLink to="/forgot-password">Click Here</AuthRedirectLink>
      </AuthCard>
    </AuthContainer>
  );
};

export default SignIn;
