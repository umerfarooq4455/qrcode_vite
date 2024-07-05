import React, { useState } from "react";
import InputField from "../../components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useApiContext } from "../../contextapi/contextApi";
import Animation from "../../assets/animation/Animation";
import FogotpassowordAnimation from "../../assets/animation/FogotpassowordAnimation";

export default function SignIn() {
  const { instance, setAccessToken, setAnimationVisible, setForgotpassanimi } =
    useApiContext(useApiContext);
  const [view, setView] = useState("signin");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // name: "",
    confirmpassword: "",
    newPassword: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (id, value) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSignIn = async () => {
    try {
      const response = await instance.post("auth/login", formData);
      if (response.status === 200) {
        const token = response.data.access_token;
        console.log("token", token);
        setAccessToken(token);
        localStorage.setItem("token", token);
        navigate("/qr-code-generator");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Sign Up failed. Please try again."
      );
    }
  };

  const handleSignUp = async () => {
    try {
      // Make API call for sign up
      const response = await instance.post("auth/signup", formData);
      console.log("Sign Up successful", response.data);
      // Handle success (e.g., redirect or store user token)
      if (response.status === 201) {
        setAnimationVisible(true);
        setTimeout(() => {
          setView("signin");
          setAnimationVisible(false);
        }, 3000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Sign Up failed. Please try again."
      );
    }
  };

  const handleForgotPassword = async () => {
    try {
      // Make API call for forgot password
      const response = await instance.post("v1/reset-password", {
        email: formData.email,
      });
      console.log("Forgot Password successful", response.data);
      if (response.status === 201) {
        setForgotpassanimi(true);
        setTimeout(() => {
          setView("signin");
          setForgotpassanimi(false);
        }, 3000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Forgot Password failed. Please try again."
      );
    }
  };

  const renderView = () => {
    switch (view) {
      case "signin":
        return (
          <>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
              value={formData.email}
              onChange={handleInputChange}
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {/* Display error */}
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between ">
              <button
                className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-white"
                onClick={() => setView("forgotpassword")}
              >
                Forgot Password
              </button>
            </div>
            <button
              className="linear mt-2 w-full rounded-xl bg-blue-600 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-blue-700 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Not registered yet?
              </span>
              <button
                className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-white"
                onClick={() => setView("signup")}
              >
                Create an account
              </button>
            </div>
          </>
        );

      case "signup":
        return (
          <>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

            <button
              className="linear mt-2 w-full rounded-xl bg-blue-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Already have an account?
              </span>
              <button
                className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-white"
                onClick={() => setView("signin")}
              >
                Sign In
              </button>
            </div>
          </>
        );

      case "forgotpassword":
        return (
          <>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
              value={formData.email}
              onChange={handleInputChange}
            />
            {error && <p className="text-red-500">{error}</p>}
            {/* Verification Code */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="New Password*"
              placeholder="Min. 8 characters"
              id="newPassword"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />

            {/* New Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Confirm new password*"
              placeholder="Min. 8 characters"
              id="confirmpassword"
              type="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleInputChange}
            />

            {/* Display error */}
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            <button
              className="linear mt-2 w-full rounded-xl bg-blue-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
              onClick={handleForgotPassword}
            >
              Change Password
            </button>
            <div className="mt-4">
              <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
                Remember your password?
              </span>
              <button
                className="ml-1 text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-white"
                onClick={() => setView("signin")}
              >
                Sign In
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Animation />
      <FogotpassowordAnimation />
      <div className="flex  h-full w-full items-center justify-center px-2 md:mx-0 md:mb-16  md:px-0 lg:mb-10 lg:items-center lg:justify-start">
        {/* Sign in section */}
        <div className="mt-[10vh] w-full max-w-full flex-col items-center  lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
            {view === "signin"
              ? "Sign In"
              : view === "signup"
              ? "Sign Up"
              : view === "forgotpassword"
              ? "Forgot Password"
              : ""}
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            {view === "signin"
              ? "Enter your email and password to sign in!"
              : view === "signup"
              ? "Create your account by providing the following details:"
              : view === "forgotpassword"
              ? "Enter your email to receive a verification code and reset your password."
              : ""}
          </p>
          <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-[#03040a]">
            <div className="rounded-full text-xl">
              <FcGoogle />
            </div>
            <h5 className="text-sm font-medium text-navy-700 dark:text-white">
              Sign In with Google
            </h5>
          </div>
          <div className="mb-6 flex items-center  gap-3">
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
            <p className="text-base text-gray-600 dark:text-white"> or </p>
            <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          </div>

          {renderView()}
        </div>
      </div>
    </>
  );
}
