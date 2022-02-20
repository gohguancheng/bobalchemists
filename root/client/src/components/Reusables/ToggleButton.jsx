import React from "react";

const ToggleButton = ({
  id,
  label,
  type,
  selection,
  setSelection,
  category,
  input,
}) => {
  const handleChange = (event) => {
    const isSelected = event.target.checked;
    const labelToFilter = {
      name: event.target.name,
      id: event.target.id,
      type: category,
    };
    if (isSelected) {
      setSelection((prev) => [...prev, labelToFilter]);
    } else {
      const index = selection.findIndex(
        (element) => element.name === labelToFilter.name
      );
      if (index !== -1) {
        setSelection((prev) => prev.filter((item, i) => index !== i));
      }
    }
  };
  console.log(label, input);
  return (
    <div className="mb-2" name={label} id={id} onChange={handleChange}>
      <label className="relative inline-block w-8 mr-2 align-middle select-none cursor-pointer">
        <input
          type={"checkbox"}
          name={label}
          id={id}
          onChange={handleChange}
          className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer"
        />
        <span className="block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer"></span>
      </label>
      <span className="text-gray-400 font-medium text-sm">{label}</span>
    </div>
  );
};

export default ToggleButton;
