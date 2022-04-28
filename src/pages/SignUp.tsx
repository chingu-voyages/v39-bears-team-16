import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUserAlt, FaTwitterSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../styles/Container';
import { Section } from '../styles/Section';
import { AuthField } from '../styles/AuthField';
import { AuthButton } from '../styles/AuthButton';
import { registerUser } from '../api/register';

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
    <Container>
      <Section>
        <h1>Sign Up</h1>
        <FaTwitterSquare className="twitterIcon" />
        <h2>or use your email to register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthField>
            <FaUserAlt className="fieldIcon" />
            <input
              type="text"
              placeholder="name"
              {...register('name', { required: true, maxLength: 80 })}
            />
          </AuthField>

          <AuthField>
            <HiMail className="fieldIcon" />
            <input
              type="email"
              placeholder="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
          </AuthField>

          <AuthField>
            <RiLockPasswordFill className="fieldIcon" />
            <input
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

          <AuthButton type="submit">SIGN UP</AuthButton>
        </form>
        <h3>Already have an account?</h3>
        <Link className="link" to="/sign-in">
          Login Here
        </Link>
      </Section>
    </Container>
  );
};

export default SignUp;
