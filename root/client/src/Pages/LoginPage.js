import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoginForm from "../components/LoginPage/LoginForm";
import SignUpForm from "../components/LoginPage/SignUpForm";
// import { LockClosedIcon } from "@heroicons/react/solid";

//* Code copied from Tailwind site: https://tailwindui.com/components/application-ui/forms/sign-in-forms

const LoginPage = ({ setSession }) => {
  const [accessSignUp, setAccessSignUp] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log();
    setAccessSignUp(searchParams.get("form") === "sign-up" ? true : false);
  }, [searchParams]);

  return accessSignUp ? (
    <SignUpForm setAccessSignUp={setAccessSignUp} />
  ) : (
    <LoginForm setSession={setSession} setAccessSignUp={setAccessSignUp} />
  );
};

export default LoginPage;
