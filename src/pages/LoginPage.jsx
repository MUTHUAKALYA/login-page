import React from "react";
import { useForm } from "react-hook-form";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendInfo = (data) => {
    console.log(data);
  };
  //states

  return (
    <div className="bg-blue-950 h-screen ">
      <div className="bg-gray-100 p-6 rounded max-w-lg mx-auto">
        <form className=" my-5 space-y-4" onSubmit={handleSubmit(sendInfo)}>
          {/* username field*/}
          <FormInput
            type="text"
            label={"User name"}
            name="userName"
            placeholder={"Enter user name"}
            register={register("userName", {
              required: "This Field is required",
              minLength: {
                value: 3,
                message: "This field should have mininum of 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This field exceeds 20 characters",
              },
            })}
            error={errors.userName}
          />
          {errors.userName && (
            <small className="text-red-500">{errors.userName.message}</small>
          )}
          {/* password field */}
          <FormInput
            type="text"
            label={"Password"}
            name="password"
            placeholder={"Enter password"}
            register={register("password", {
              required: "This Field is required",
              minLength: {
                value: 3,
                message: "This field should have mininum of 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This field exceeds 20 characters",
              },
            })}
            error={errors.password}
          />
          {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
          <FormButton label="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
