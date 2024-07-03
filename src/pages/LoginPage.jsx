import React from "react";
import { useForm } from "react-hook-form";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendInfo = (data) => {
    alert("You're logged in Sucessfully 👍");
    console.log(data);
    navigate("/customer");
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
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username should have mininum of 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username exceeds 20 characters",
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
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Password should have mininum of 6 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password exceeds 16 characters",
                },
              })}
              error={errors.password}
            />
          </div>
          {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
          <div className="flex justify-between">
            <div className="space-x-2 text-gray-400">
              <input type="checkbox" name="checkbox" id="chexbox" />
              <span>Remember me</span>
            </div>
            <span className="text-gray-400 hover:text-gray-50 cursor-pointer">
              Forget password?
            </span>
          </div>
          <FormButton label="Sign In" />
          <p className="text-gray-300 text-center">
            Don't have an account ?{" "}
            <span className="underline font-medium hover:cursor-pointer hover:text-gray-50">
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
