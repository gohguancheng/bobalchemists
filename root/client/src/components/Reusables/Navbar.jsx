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
    <div className="bg-purple text-lightgray">
      <div className="h-full px-[20px] py-[10px] flex justify-between items-center">
        <span className="flex justify-between items-end gap-[15px] sm:gap-[30px]">
          <Link to="/">
            <h1 className="text-white text-lg font-bold font-logo">
              BOBAlchemist
            </h1>
          </Link>
          {currentUser?.username ? (
            <Link to="/create">
              <div className="hidden sm:block text-white text-lg font-bold font-logo">
                Create BOBA
              </div>
            </Link>
          ) : (
            <Link to="/user?form=sign-up">
              <div className="hidden sm:block text-white text-lg font-bold font-logo">
                Create BOBA
              </div>
            </Link>
          )}

          {isAdmin ? (
            <Link to="/admin">
              <div className="hidden sm:block text-gray-100 text-sm font-bold font-logo">
                Admin Page
              </div>
            </Link>
          ) : null}
        </span>

        {currentUser?.username ? (
          <span className="flex justify-between">
            <div className="text-white text-sm font-semibold font-logo">
              Welcome back, {currentUser.username}!
            </div>
            <Link to="/">
              <div
                className="text-white text-sm font-bold font-logo"
                onClick={handleLogOut}
              >
                Log Out
              </div>
            </Link>
          </span>
        ) : (
          <span className="flex justify-between">
            <Link to="/user?form=login">
              <div className="text-white text-xs font-bold font-logo">
                Login / Sign Up
              </div>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
