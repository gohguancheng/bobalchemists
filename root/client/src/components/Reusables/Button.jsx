import React, { forwardRef } from "react";

// Look under 'Outline' buttons at: https://kimia-ui.vercel.app/components/buttons

const colors = {
  primary: `border-blue-700 border-2 text-blue-700 active:bg-blue-700 active:text-white hover:bg-blue-700 hover:text-white`,
  danger: `border-red-600 border-2 text-red-600 active:bg-red-700 active:text-white hover:bg-red-700 hover:text-white`,
  regular: `border-purple border-2 text-purple active:bg-blue-700 active:text-white hover:bg-purple hover:text-white`,
};

const Button = forwardRef(({ children, color, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    className={`${colors[color]} text-white focus:outline-none shadow rounded-lg px-3 py-1 font-medium m-2`}
  >
    {children}
  </button>
));

export default Button;
