import React from "react";
import CreatedImage from "../CreatePage/CreatedImage";

const Card = ({ info }) => {
  console.log(info.name, ":", info.likes);
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg w-80 drop-shadow-md">
      <CreatedImage info={info} />
      <div className="h-max text-center text-sm font-semibold">{info.name}</div>
      <span className="flex flex-row gap-4 justify-between items-center">
        <div className="text-left text-xs w-max" >👍 Likes: {info.likes}</div>
        <div className="text-right text-xs w-max">Created By: {info.createdBy}</div>
      </span>
    </div>
  );
};

export default Card;
