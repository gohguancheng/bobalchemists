import React from 'react';

const ToggleButton = ({ label }) => {

  return (
    <div className="mb-2">
    <div className="relative inline-block w-8 mr-2 align-middle select-none">
        <input type="checkbox" name="toggle" id={label} className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer"/>
            <label className="block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer">
            </label>
        </div>
        <span className="text-gray-400 font-medium text-sm">
        {label}
        </span>
    </div>
  )
};

export default ToggleButton;
