import React from "react";

const Card = ({ info }) => {
  const ingredients = info.ingredients.map(e=> {return <span key={e}>{e}</span>})
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="basis-40">Graphic Art</div>
      <div className="h-max">{info.name}</div>
      <div className="flex flex-row gap-4 text-sm justify-center items-center">{ingredients}</div>
      <span className="flex flex-row gap-4 justify-center items-center">
      <div>Likes:{info.likes}</div>
      <div>Created By: {info.creator}</div>
      </span>

    </div>
  );
};

export default Card;
