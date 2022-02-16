import React from "react";
import CreatedImage from "../CreatePage/CreatedImage";

const Card = ({ info }) => {
  // console.log("info", info);
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg w-80 drop-shadow-md">
      {/* <div className="basis-40">Graphic Art</div> */}
      <CreatedImage info={info} />
      <div className="h-max text-center">{info.name}</div>
      <span className="flex flex-row gap-4 justify-center items-center">
        <div>👍 Likes:</div>
        <div>Created By: {info.createdBy}</div>
      </span>
    </div>
  );
};

export default Card;
