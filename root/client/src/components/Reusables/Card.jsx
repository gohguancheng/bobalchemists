import React from "react";

const Card = ({ info }) => {
  // const ingredients = info.ingredients.map(e=> {return <span key={e}>{e}</span>})
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg w-80">
      <div className="basis-40">Graphic Art</div>
      <div className="h-max text-center">{info.name}</div>
      <span className="flex flex-row gap-4 justify-center items-center">
        <div>👍 Likes:</div>
        <div>Created By: {info.createdBy}</div>
      </span>
    </div>
  );
};

export default Card;
