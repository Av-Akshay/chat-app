import React from "react";
import { Button, Input } from "./index";
import useRegister from "../hooks/useRegister";

const Signup = () => {
  const {
    handleSubmit,
    register,
    errors,
    minLowercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    minUppercasePattern,
    submitForm,
  } = useRegister();

  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center">
      <form
        className="flex flex-col items-center gap-5 p-10 bg-[rgba(225,225,225,0.4)] rounded-xl "
        onSubmit={handleSubmit(submitForm)}
      >
        <Input
          placeholder="User name"
          type="text"
          label="Username"
          id="username"
          {...register("userName", {
            required: true,
          })}
        />
        <Input
          placeholder="Enter your email"
          type="email"
          label="E-mail"
          id="email"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors?.email?.message}</p>
        )}
        <Input
          placeholder="Enter your password"
          type="password"
          label="Password"
          id="password"
          {...register("password", {
            required: true,
            validate: {
              minLength: (value) =>
                value.length >= 8 || "Password must be at least 8 characters",
              uppercase: (value) =>
                minUppercasePattern.test(value) ||
                "Password must contain at least one uppercase letter",
              lowercase: (value) =>
                minLowercasePattern.test(value) ||
                "Password must contain at least one lowercase letter",
              number: (value) =>
                minNumberPattern.test(value) ||
                "Password must contain at least one number",
              specialChar: (value) =>
                minSpecialCharPattern.test(value) ||
                "Password must contain at least one special character",
            },
          })}
        />
        {errors.password && (
          <p className="error-message">{errors?.password?.message}</p>
        )}
        <Input
          accept="image/*"
          placeholder="profile photo"
          type="file"
          label="Profile photo"
          id="profile"
          {...register("profile", {
            required: true,
          })}
        />
        <div className="w-full">
          <Button type="submit" className="w-full bg-blue-700">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
