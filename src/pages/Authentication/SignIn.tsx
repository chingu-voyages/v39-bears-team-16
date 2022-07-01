import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getCsrfToken } from 'api/getCsrfToken';
import { login } from 'api/login';
import { logout } from 'api/logout';
import { StyledErrorMessage } from 'components';
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
  AuthFoot,
  AuthHeaderWrapper,
} from './Auth.elements';
import { PasswordIcon, EmailIcon } from './components/AuthenticationIcons';
import { GithubLoginButton } from './components/ThirdPartyLoginButton';
import { CookieRequestBanner } from './components/CookieRequestBanner';
import { AuthPageContainer } from './components/AuthPageContainer';

interface SignInFormInputs {
  email: string;
  password: string;
}

const SignIn = ({ setCookie }) => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<SignInFormInputs>();

  const [errorMessages, setErrorMessages] = useState<ErrorMessageInterface[]>(
    []
  );

  const navigate = useNavigate();

  const onSubmit = async (payload: SignInFormInputs) => {
    try {
      const { data } = await login(payload);
      const { name, email, profilePicture, location, isAdmin } = data;

      setCookie('name', name, { path: '/' });
      setCookie('email', email, { path: '/' });
      setCookie('profilePicture', profilePicture, { path: '/' });
      setCookie('location', location, { path: '/' });
      setCookie('isAdmin', isAdmin, { path: '/' });

      navigate('/member', { replace: true });
    } catch (error) {
      setErrorMessages(error as ErrorMessageInterface[]);
    }
  };

  useEffect(() => {
    getCsrfToken().then(() => logout());
  }, []);

  return (
    <AuthPageContainer>
      <AuthCard>
        <CookieRequestBanner />
        <AuthHeaderWrapper>
          <img src={logo} alt="sail-logo" />
          <AuthHead>Log in to Sail</AuthHead>
        </AuthHeaderWrapper>
        <GithubLoginButton />

        <AuthSpan>or use your email to login</AuthSpan>

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <AuthField hasError={Boolean(formErrors.email?.message)}>
              <EmailIcon />
              <AuthInput
                type="text"
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

          <AuthButton type="submit">Sign In</AuthButton>
        </AuthForm>

        <AuthFoot>
          <AuthRedirectLink to="/forgot-password">
            Forgot your password?
          </AuthRedirectLink>

          <AuthSpan>or</AuthSpan>

          <AuthRedirectLink to="/sign-up">
            Create a new account
          </AuthRedirectLink>
        </AuthFoot>
      </AuthCard>
    </AuthPageContainer>
  );
};

export default SignIn;
