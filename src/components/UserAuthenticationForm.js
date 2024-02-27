import React, { useRef, useState } from "react";
import { EmailPasswordValidator } from "../utils/Validator";
import { ValidateUserAuthentication } from "../utils/UserAuthentication";

const UserAuthenticationForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef();
  const password = useRef();
  const fullname = useRef();

  const toggleSignInFlag = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitForm = async () => {
    const result = EmailPasswordValidator(
      email.current.value,
      password.current.value
    );
    setErrorMessage(result);
    if (result) return;

    // Handle Sign Up and Sign In
    const err = await ValidateUserAuthentication(
      isSignIn,
      email.current.value,
      password.current.value,
      fullname.current ? fullname.current.value : ""
    );
    setErrorMessage(err);
  };
  return (
    <div className="form-container w-4/12 m-auto text-white z-10 relative">
      <form
        className="bg-black bg-opacity-70 rounded-lg p-14"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-[32px] font-bold mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullname}
            className="input-email p-4 w-full bg-gray-700 bg-opacity-30 border border-white rounded-lg mb-8"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="input-email p-4 w-full bg-gray-700 bg-opacity-30 border border-white rounded-lg mb-8"
          type="text"
          placeholder="Email or Phone Number"
        />
        <input
          ref={password}
          className="input-email p-4 w-full bg-gray-700 bg-opacity-30 border border-white rounded-lg mb-5"
          type="password"
          placeholder="Password"
        />
        {errorMessage && (
          <p className="font-bold text-red-600 text-xl mb-8">{errorMessage}</p>
        )}
        <button
          className="w-full p-3 bg-red-600 rounded-md"
          onClick={handleSubmitForm}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className="mt-10">
            New to Netflix?
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInFlag}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="mt-10">
            Already a User?
            <span
              className="font-bold cursor-pointer"
              onClick={toggleSignInFlag}
            >
              Sign in now.
            </span>
          </p>
        )}
        <p className="mt-6 mb-20">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-indigo-700 font-bold underline">
            Learn more.
          </span>
        </p>
      </form>
    </div>
  );
};

export default UserAuthenticationForm;
