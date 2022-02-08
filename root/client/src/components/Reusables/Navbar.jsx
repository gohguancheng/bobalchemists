import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-max w-screen flex flex-row bg-zinc-600 items-center h-16">
      <Link to="/">
        {" "}
        <h1 className="basis-1/8 text-white text-4xl font-bold mx-4">
          BOBAlchemist
        </h1>
      </Link>

      <Link to="/create">
        <div className="basis-1/8 text-white text-xl font-bold mx-4">
          Create BOBA
        </div>
      </Link>
      <div className="basis-2/3 shrink"> </div>
      <Link to="/login">
        <div className="basis-1/8 text-white text-xl font-bold mx-4">
          Sign Up
        </div>
      </Link>
      <Link to="/login">
        <div className="basis-1/8 text-white text-xl font-bold mx-4">Login</div>
      </Link>
    </div>
  );
};

export default Navbar;
