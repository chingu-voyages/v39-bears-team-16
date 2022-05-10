import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../api/resetPassword';
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
import {
  FormErrorMessages,
  StyledErrorMessage,
} from '../../components/ErrorMessage';
import { getValidationRules } from '../../utilities/auth';

interface ResetPasswordInputs {
  email: string;
  newPassword: string;
  passwordConfirmation: string;
}

const ResetPassword = () => {
  const { token = '' } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<ResetPasswordInputs>();

  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (payload: ResetPasswordInputs) => {
    const res = await resetPassword({ ...payload, token });

    if (res.data) {
      navigate('/sign-in', { replace: true });
    } else {
      setErrorMessages(res);
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthForgetHead>
          Create a new <br /> password
        </AuthForgetHead>
        <KeySuccessIcon />

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="new password"
              {...register('newPassword', {
                ...getValidationRules('newPassword'),
              })}
            />
          </AuthField>

          <AuthField>
            <PasswordIcon />
            <AuthInput
              type="password"
              placeholder="confirm new password"
              {...register('passwordConfirmation', {
                ...getValidationRules('passwordConfirmation'),
              })}
            />
          </AuthField>
          <FormErrorMessages errors={formErrors} />

          {errorMessages.map(({ msg, param }) => (
            <StyledErrorMessage key={param}>{msg}</StyledErrorMessage>
          ))}
          <AuthButton type="submit">CHANGE PASSWORD</AuthButton>
        </AuthForm>
      </AuthCard>
    </AuthContainer>
  );
};

export default ResetPassword;
