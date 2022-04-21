import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  background: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  width: fit-content;
  height: auto;
  padding: 2rem;
`;
const Input = styled.input`
  background: lightgray;
  border: none;
  border-radius: 1rem;
  height: 50px;
  width: 100%;
`;

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
        <FaTwitterSquare />
        <h2>or use your email to register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <FaUserAlt />
            <Input
              type="text"
              placeholder="name"
              {...register("name", { required: true, maxLength: 80 })}
            />
          </div>

          <div>
            <AiOutlineMail />
            <Input
              type="email"
              placeholder="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>

          <div>
            <RiLockPasswordLine />
            <Input
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
          </div>

          <button type="submit">SIGN UP</button>
        </form>
        <h3>Already have an account?</h3>
        <Link to="/sign-in">Login Here</Link>
      </Section>
    </Container>
  );
};

export default SignUp;
