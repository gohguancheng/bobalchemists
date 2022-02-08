import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 flex flex-row bg-zinc-600 justify-between items-center">
      <span className="flex flex-row justify-between items-center">
      <Link to="/">
        <h1 className="text-white text-4xl font-bold mx-4">
          BOBAlchemist
        </h1>
      </Link>
      <Link to="/create">
        <div className="text-white text-xl font-bold mx-4">
          Create BOBA
        </div>
      </Link>
      </span>
      <span className="flex flex-row justify-between items-center">
      <Link to="/login">
        <div className="text-white text-xl font-bold mx-4">
          Sign Up
        </div>
      </Link>
      <Link to="/login">
        <div className="text-white text-xl font-bold mx-4">Login</div>
      </Link>
      </span>
    </div>
  );
};

export default Navbar;
