import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInFlag = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="login-main-container relative">
      <div className="overlay w-full h-full bg-black opacity-60 top-0 bottom-0 left-0 right-0 fixed z-0"></div>
      <div className="background-img-container absolute bg-cover w-full h-full -z-10">
        <img
          className="min-w-full min-h-full h-[102vh]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <Header />
      <div className="form-container w-4/12 m-auto text-white z-10 relative">
        <form className="bg-black bg-opacity-70 rounded-lg p-14">
          <h1 className="text-[32px] font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              className="input-email p-4 w-full bg-gray-700 bg-opacity-30 border border-white rounded-lg mb-8"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="input-email p-4 w-full bg-gray-700 bg-opacity-30 border border-white rounded-lg mb-8"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            className="input-email p-4 w-full bg-gray-700 bg-opacity-30 border border-white rounded-lg mb-8"
            type="password"
            placeholder="Password"
          />
          <button className="w-full p-3 bg-red-600 rounded-md">
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
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
