import React from 'react';
import {
  AuthContainer,
  AuthCard,
  AuthForgetHead,
  KeySuccessIcon,
  AuthForm,
  AuthField,
  AuthInput,
  AuthButton,
  PasswordIcon,
  EmailIcon,
} from '../../components/Auth.elements';

const CreatePassword = () => {
  return (
    <AuthContainer>
      <AuthCard>
        <AuthForgetHead>
          Create a new <br /> password
        </AuthForgetHead>
        <KeySuccessIcon />

        <AuthForm>
          <AuthField>
            <EmailIcon />
            <AuthInput placeholder="email" />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput placeholder="new password" />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput placeholder="verify password" />
          </AuthField>

          <AuthButton type="submit">CHANGE PASSWORD</AuthButton>
        </AuthForm>
      </AuthCard>
    </AuthContainer>
  );
};

export default CreatePassword;
