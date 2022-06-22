import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, setSession }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogOut = async () => {
    const response = await (async () =>
      fetch("/api/sessions/logout").then((data) => data.json()))();
    setSession((prev) => {});
    window.location.reload();
  };

  useEffect(() => {
    const admincheck =
      currentUser?.username === "guanch" ||
      currentUser?.username === "rizal" ||
      currentUser?.username === "danning";

    if (admincheck) setIsAdmin(true);
  });

  return (
    <div className="h-16 w-full flex flex-row justify-between items-center bg-purple text-lightgray">
      <span className="flex justify-between items-center">
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
          <Link to="/user?form=sign-up">
            <div
              className="text-white text-xl font-bold mx-4 font-logo"
            >
              Create BOBA
            </div>
          </Link>
        )}

        {isAdmin ? (
          <Link to="/admin">
            <div className="text-gray-100 text-sm font-bold mx-4 font-logo">
              Admin Page
            </div>
          </Link>
        ) : null}
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
          <Link to="/user?form=login">
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
