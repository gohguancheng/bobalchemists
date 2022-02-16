import React, { useState } from "react";
import LoginForm from "../components/LoginPage/LoginForm";
import SignUpForm from "../components/LoginPage/SignUpForm";
// import { LockClosedIcon } from "@heroicons/react/solid";

//* Code copied from Tailwind site: https://tailwindui.com/components/application-ui/forms/sign-in-forms

const LoginPage = ({ setSession }) => {
  const [accessSignUp, setAccessSignUp] = useState(false);
  return (
   accessSignUp ? <SignUpForm setAccessSignUp={setAccessSignUp} /> : <LoginForm setSession={setSession} setAccessSignUp={setAccessSignUp} />
  )
}

export default LoginPage;
