import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt, FaTwitterSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <>
      <h1>Sign Up</h1>
      <FaTwitterSquare />
      <h2>or use your email to register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FaUserAlt />
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true, maxLength: 80 })}
        />
        <AiOutlineMail />
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <RiLockPasswordLine />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <button type="submit">SIGN UP</button>
      </form>
      <h3>Already have an account?</h3>
      <a href="/sign-in">Login Here</a>
    </>
  );
}
