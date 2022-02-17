import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CreatedImage from "../CreatePage/CreatedImage";
const axios = require("axios").default;

const updateDBLikes = async (url, uploadedData) => {
  const response = await axios.put(url, uploadedData);
  console.log(response);
};

const Card = ({ info, currentUserData }) => {
  const cardID = info._id;
  const [likes, setLikes] = useState(info.likes);
  const [arrayofCurrentUserLikes, setArrayOfCurrentUserLikes] = useState(
    currentUserData?.likedCreations
  );

  const handleLikeClick = () => {
    if (!currentUserData) return;
    console.log(arrayofCurrentUserLikes);
    if (arrayofCurrentUserLikes?.includes(cardID)) {
      console.log("unlike!");
      const dataForUpload = {
        likes: info.likes - 1,
        username: currentUserData.username,
      };

      setLikes((prev) => prev - 1);
      const newArr = arrayofCurrentUserLikes.filter(cardID);
      console.log(newArr);
      setArrayOfCurrentUserLikes(newArr);
    } else if (!arrayofCurrentUserLikes.includes(cardID)) {
      console.log("unlike!");
      const dataForUpload = {
        likes: info.likes + 1,
        username: currentUserData.username,
      };
      updateDBLikes(`/api/teacardsinfo/liked/${cardID}`, dataForUpload);
      setLikes((prev) => prev + 1);
      setArrayOfCurrentUserLikes((state) => {
        state.push(cardID);
        return state;
      });
    } else {
      console.log("Like Frontend Error!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg w-80 drop-shadow-md hover:border-purple hover:border-2 hover:drop-shadow-md">
      <Link key={info._id} to={`/show/${info._id}`}>
        <div>
          <CreatedImage info={info} />
        </div>
        <div className="h-max text-center text-sm font-semibold">
          {info.name}
        </div>
      </Link>
      <span className="flex flex-row gap-4 justify-between items-center">
        <div className="border-rounded cursor-pointer text-left w-max">
          <button className="text-sm" onClick={handleLikeClick}>
            👍
          </button>
          <span onClick={handleLikeClick} className="text-sm">
            {" "}
            Likes: {likes}{" "}
          </span>
        </div>
        <div className="text-right text-sm w-max">
          Created By: {info.createdBy}
        </div>
      </span>
    </div>
  );
};

export default Card;
