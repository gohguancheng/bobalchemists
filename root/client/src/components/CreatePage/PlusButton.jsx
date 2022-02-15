import React from "react";

const PlusButton = ({id , setCategory}) => {
  return (
    <button
      id = {`${id}`}
      onClick={(e) => {
        setCategory(e.target.id);
      }}
      className="bg-amber-300 hover:bg-amber-400 px-2 rounded-full border-amber-500 border-2"
    >
      +
    </button>
  );
};

export default PlusButton;
