import React from "react";
import { useEffect } from "react";
import CreatedImage from "../CreatePage/CreatedImage";
const axios = require("axios").default;

const updateDBLikes = () => {};

const Card = ({ info }) => {
  console.log(info);

  const handleLikeClick = () => {};

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg w-80 drop-shadow-md hover:border-purple hover:border-2">
      <CreatedImage info={info} />
      <div className="h-max text-center text-sm font-semibold">{info.name}</div>
      <span className="flex flex-row gap-4 justify-between items-center">
        <div className="text-left text-xs w-max">
          {" "}
          <button onClick={handleLikeClick}>👍</button>
          <span> Likes: {info.likes} </span>
        </div>
        <div className="text-right text-xs w-max">
          Created By: {info.createdBy}
        </div>
      </span>
    </div>
  );
};

export default Card;
