import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container";
import { Section } from "../styles/Section";
import { Field } from "../styles/Field";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <Container>
      <Section>
        <h1>Sign Up</h1>
        <FaTwitterSquare className="tweeterIcon" />
        <h2>or use your email to register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <FaUserAlt className="fieldIcon" />
            <input
              type="text"
              placeholder="name"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </Field>

          <Field>
            <AiOutlineMail className="fieldIcon" />
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </Field>

          <Field>
            <RiLockPasswordLine className="fieldIcon" />
            <input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
          </Field>

          <Field>
            <button type="submit">SIGN UP</button>
          </Field>
        </form>
        <h3>Already have an account?</h3>
        <Link className="link" to="/sign-in">Login Here</Link>
      </Section>
    </Container>
  );
};

export default SignUp;
