import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken } from 'api/getCsrfToken';
import { registerUser } from 'api/register';
import { StyledErrorMessage } from 'components/ErrorMessage';
import { ErrorMessageInterface } from 'types';
import { authValidationRules } from 'utilities/validation';
import logo from 'assets/sail-logo/vector/default-monochrome-primary.svg';

import {
  AuthCard,
  AuthHead,
  AuthForm,
  AuthField,
  AuthInput,
  AuthButton,
  AuthRedirectLink,
  AuthSpan,
  AuthHeaderWrapper,
} from './Auth.elements';
import {
  PasswordIcon,
  EmailIcon,
  UserIcon,
} from './components/AuthenticationIcons';
import { GithubLoginButton } from './components/ThirdPartyLoginButton';
import { CookieRequestBanner } from './components/CookieRequestBanner';
import { AuthPageContainer } from './components/AuthPageContainer';

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
  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );
  const navigate = useNavigate();

  const onSubmit = async (payload: SignUpFormInputs) => {
    try {
      await registerUser(payload);
      navigate('/sign-in', { replace: true });
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <AuthPageContainer>
      <AuthCard>
        <CookieRequestBanner />
        <AuthHeaderWrapper>
          <img src={logo} alt="sail-logo" />
          <AuthHead>Sign Up</AuthHead>
        </AuthHeaderWrapper>
        <GithubLoginButton />
        <AuthSpan>or use your email to register</AuthSpan>

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AuthField hasError={Boolean(formErrors.name?.message)}>
              <UserIcon />
              <AuthInput
                type="text"
                placeholder="name"
                {...register('name', authValidationRules.name)}
              />
            </AuthField>
            {formErrors.name?.message ? (
              <StyledErrorMessage>
                {formErrors.name?.message}
              </StyledErrorMessage>
            ) : null}
          </div>

          <div>
            <AuthField hasError={Boolean(formErrors.email?.message)}>
              <EmailIcon />
              <AuthInput
                type="email"
                placeholder="email"
                {...register('email', authValidationRules.email)}
              />
            </AuthField>
            {formErrors.email?.message ? (
              <StyledErrorMessage>
                {formErrors.email?.message}
              </StyledErrorMessage>
            ) : null}
          </div>

          <div>
            <AuthField hasError={Boolean(formErrors.password?.message)}>
              <PasswordIcon />
              <AuthInput
                type="password"
                placeholder="password"
                {...register('password', authValidationRules.password)}
              />
            </AuthField>
            {formErrors.password?.message ? (
              <StyledErrorMessage>
                {formErrors.password?.message}
              </StyledErrorMessage>
            ) : null}
          </div>

          {errorMessages?.map(({ msg }) => (
            <StyledErrorMessage key={msg}>{msg}</StyledErrorMessage>
          ))}

          <AuthButton type="submit">Create account</AuthButton>
        </AuthForm>

        <AuthRedirectLink to="/sign-in">
          Already have an account?
        </AuthRedirectLink>
      </AuthCard>
    </AuthPageContainer>
  );
};

export default SignUp;
