import React from 'react';

const ToggleButton = ({ label }) => {

  return (
    <div class="mb-2">
    <div class="relative inline-block w-8 mr-2 align-middle select-none">
        <input type="checkbox" name="toggle" id={label} class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer"/>
            <label for={label} class="block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer">
            </label>
        </div>
        <span class="text-gray-400 font-medium text-sm">
        {label}
        </span>
    </div>
  )
};

export default ToggleButton;
