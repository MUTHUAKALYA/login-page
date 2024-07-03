import React from "react";
import { useForm } from "react-hook-form";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

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
    <div className="bg-custom-image  bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <div className="bg-blue-950 px-8 py-6 rounded-md w-[460px] mx-auto bg-opacity-70  shadow-2xl">
        <p className="text-blue-300 font-extrabold text-2xl text-center">
          Sign In
        </p>
        <form className=" my-6 space-y-8" onSubmit={handleSubmit(sendInfo)}>
          {/* username field*/}

          <div
            className={`flex justify-center items-center pb-2 gap-x-2  ${
              errors.userName
                ? "border-b border-red-600"
                : "border-b border-gray-300"
            }`}
          >
            <FaUser className="text-gray-300" />
            <FormInput
              type="text"
              name="userName"
              placeholder={"User name"}
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
          </div>
          {errors.userName && (
            <small className="text-red-500">{errors.userName.message}</small>
          )}

          {/* password field */}
          <div
            className={`flex justify-center items-center pb-2 gap-x-2 ${
              errors.password
                ? "  border-b  border-red-600"
                : "  border-b  border-gray-300"
            }`}
          >
            <FaLock className="text-gray-300" />
            <FormInput
              type="password"
              name="password"
              placeholder={"Password"}
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
          </div>
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
