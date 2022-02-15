import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, setSession }) => {
  const handleLogOut = () => {
    const logoutPromise = (async () =>
      fetch("/api/sessions/authcheck").then((data) => data.json()))();
    logoutPromise.then((res) => {
      if (res.isAuthenticated === false) {
        setSession({});
      }
    });
  };
  return (
    <div className="h-16 flex flex-row bg-zinc-600 justify-between items-center bg-purple text-white">
      <span className="flex flex-row justify-between items-center">
        <Link to="/">
          <h1 className="text-white text-4xl font-bold mx-4 font-logo">
            BOBAlchemist
          </h1>
        </Link>

        {currentUser?.username ? (
          <Link to="/create">
            <div className="text-white text-xl font-bold mx-4 font-logo">
              Create BOBA
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <div className="text-white text-xl font-bold mx-4 font-logo">
              Create BOBA
            </div>
          </Link>
        )}
      </span>
      {currentUser?.username ? (
        <span className="flex flex-row justify-between items-center">
          <div className="text-white text-lg font-semibold mx-4 font-logo">
            Welcome back, {currentUser.username}!
          </div>
          <Link to="/">
            <div
              className="text-white text-xl font-bold mx-4 font-logo"
              onClick={handleLogOut}
            >
              Log Out
            </div>
          </Link>
        </span>
      ) : (
        <span className="flex flex-row justify-between items-center">
          <Link to="/login">
            <div className="text-white text-xl font-bold mx-4 font-logo">
              Login / Sign Up
            </div>
          </Link>
        </span>
      )}
    </div>
  );
};

export default Navbar;
