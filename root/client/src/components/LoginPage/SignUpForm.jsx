import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;

const SignUpForm = ({ setAccessSignUp }) => {
  const [usernameInput, setUsernameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [signupResult, setSignupResult] = useState(null);
  const [nameAvailable, setNameAvailable] = useState(true);
  const navigate = useNavigate();

  async function submitCredentials(credentials) {
    return axios
      .post("/api/registration/newUser", credentials, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({ data }) => data);
  }

  async function checkName(credentials) {
    return axios
      .post("/api/registration/check", credentials, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({ data }) => data);
  }

  useEffect(async () => {
    const responseData = await checkName({ username: usernameInput });
    console.log(responseData);
    setNameAvailable(responseData.isAvailable);
  }, [usernameInput]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username: usernameInput, password: passwordInput };
    const response = await submitCredentials(credentials);
    setSignupResult(response);
  };

  if (signupResult?.status === "success") {
    setAccessSignUp(false);
    navigate("/login");
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-lighterpink font-normal">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-24 w-auto"
            src="https://cdn.pixabay.com/photo/2021/02/11/19/03/bubble-tea-6006193_960_720.png"
            alt="Icon"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            SIGN UP
          </h2>
        </div>
        {/* Start of Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="username"
                onChange={(e) => setUsernameInput(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </div>
          </div>
          <div className="text-xs font-semibold">
            {signupResult
              ? `Sign Up: ${signupResult.status}.`
              : nameAvailable
              ? `Click 'Sign Up' to submit credentials to create account`
              : `username is not available`}
          </div>
          {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
    
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div> */}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign Up
            </button>
          </div>
        </form>
        <span>
          Have an account?
          <button
            onClick={() => setAccessSignUp(false)}
            className="group relative w-max flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log in here!
          </button>
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
