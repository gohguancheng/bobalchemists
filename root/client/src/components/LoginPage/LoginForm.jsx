import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../Reusables/Logo";
const axios = require("axios").default;

const LoginForm = ({ setSession, setAccessSignUp }) => {
  const [usernameInput, setUsernameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [loginResult, setLoginResult] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  async function loginUser(credentials) {
    return axios
      .post("/api/sessions/login", credentials, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({ data }) => data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username: usernameInput, password: passwordInput };
    const responseData = await loginUser(credentials);
    setLoginResult(responseData);
    setSession(responseData.session);
  };

  loginResult?.isAuthenticated ? navigate("/") : null;
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-lighterpink text-gray-700 font-normal">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-700">
            LOG IN
          </h2>
          Please log in to make your own BBT creations.
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
            {loginResult
              ? `${loginResult.status}: ${loginResult.message}.`
              : `Login credentials not submitted..`}
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
              className="group relative w-full flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Log in
            </button>
          </div>
        </form>
        <span>
          Don't have an account?
          <button
            onClick={() => setSearchParams({ form: "sign-up" })}
            className="group relative w-max flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up here!
          </button>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
