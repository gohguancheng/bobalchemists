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
    const admincheck = currentUser?.isAdmin;
    if (admincheck) setIsAdmin(true);
  });

  return (
    <div className="bg-purple text-lightblue">
      <div className="h-full px-[20px] py-[10px] flex justify-between items-center">
        <span className="flex justify-between items-center gap-[15px] md:gap-[30px]">
          <Link to="/">
            <h1 className="text-white text-lg md:text-4xl font-bold font-logo">
              BOBAlchemist
            </h1>
          </Link>
          {currentUser?.username ? (
            <Link to="/create">
              <div className="text-white text-xs md:text-xl font-bold font-logo">
                Create BOBA
              </div>
            </Link>
          ) : (
            <Link to="/user?form=sign-up">
              <div className="text-white text-xs md:text-xl font-bold font-logo">
                Create BOBA
              </div>
            </Link>
          )}

          {isAdmin ? (
            <Link to="/admin">
              <div className="text-gray-100 text-xs md:text-xl font-bold font-logo">
                Admin
              </div>
            </Link>
          ) : null}
        </span>

        {currentUser?.username ? (
          <span className="flex gap-[10px]">
            <div className="text-white text-xs md:text-lg font-semibold font-logo">
              <span className="hidden md:inline">Welcome back, </span>
              <span className="inline md:hidden">Hi, </span>
              {currentUser.username}!
            </div>
            <Link to="/">
              <div
                className="text-white text-xs md:text-xl font-bold font-logo"
                onClick={handleLogOut}
              >
                Log Out
              </div>
            </Link>
          </span>
        ) : (
          <span className="flex">
            <Link to="/user?form=login">
              <div className="text-white text-xs md:text-xl font-bold font-logo">
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
