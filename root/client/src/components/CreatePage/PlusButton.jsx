import React from "react";

const PlusButton = ({id , setCategory}) => {
  return (
    <div
      id = {`${id}`}
      onClick={(e) => {
        setCategory(e.target.id);
      }}
      className="text-xs bg-amber-300 hover:bg-amber-400 px-2 rounded-full border-amber-500 border-2 w-max cursor-pointer"
    >
      Show
    </div>
  );
};

export default PlusButton;
