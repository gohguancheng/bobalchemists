import React from "react";

const PlusButton = (props) => {
  return (
    <button
      onClick={(e) => {
        console.log("e.target", e.target);
        console.log("clicked");
      }}
      className="bg-amber-300 hover:bg-amber-400 px-2 rounded-full border-amber-500 border-2"
    >
      +
    </button>
  );
};

export default PlusButton;
