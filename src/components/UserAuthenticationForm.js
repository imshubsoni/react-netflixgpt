import React, { useRef, useState } from "react";
import { EmailPasswordValidator } from "../utils/Validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const UserAuthenticationForm = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const email = useRef();
  const password = useRef();
  const fullname = useRef();

  const toggleSignInFlag = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitForm = () => {
    const result = EmailPasswordValidator(
      email.current.value,
      password.current.value
    );
    setErrorMessage(result);
    if (result) return;

    // Handle Sign Up and Sign In
    if (!isSignIn) {
      // SIGN UP USER
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // Update User Information
          updateProfile(auth.currentUser, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/56208408?v=4",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -- " + errorMessage);
        });
    } else {
      // SIGN IN USER
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " -- " + errorMessage);
        });
    }
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
