import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreatedImage from "../CreatePage/CreatedImage";
const axios = require("axios").default;

const updateDBLikes = async (url, uploadedData) => {
  const response = await axios.put(url, uploadedData);
  console.log(response);
};

const Card = ({ info, currentUserData }) => {
  const cardID = info._id;
  if (!!currentUserData) console.log("we have user data!", )
  const [likeState, setLikeState] = useState({likes: "loading", likedCreations: "loading"});
  const [likedByCurrent, setLikedByCurrent] = useState()

  console.log("liked by me? -> ", likeState, likedByCurrent);
  console.log("db: ", currentUserData?.likedCreations)
  console.log("frontend: ", likeState?.likedCreations)
  
  useEffect(()=>{
    if(!!currentUserData?.likedCreations) {
      const fetchedState = { likes: info?.likes, likedCreations: currentUserData?.likedCreations };
      setLikeState(prev => {
        return {...prev, ...fetchedState}
      })
      if (!!info) {
        console.log(" is this in liked array in database? ", currentUserData?.likedCreations?.includes(info?._id))
        const dbShowsLiked = currentUserData?.likedCreations?.includes(info?._id);
        setLikedByCurrent(dbShowsLiked);
      }
    }
  }, [currentUserData, info])

  const handleLikeClick = () => {
    console.log("clicked!");
    if (!currentUserData || !info) {
      console.log("login to like!");
      return
    }
    if (likedByCurrent) {
      console.log("unlike!");
      const updatedLikes = likeState.likes - 1;
      const dataForUpload = {
        likes: updatedLikes,
        username: currentUserData.username,
      };
      updateDBLikes(`/api/teacardsinfo/unliked/${cardID}`, dataForUpload);
      const newArr = likeState.likedCreations.filter(e => e !== cardID);
      const newState = { likes: updatedLikes, likedCreations: newArr }
      setLikeState(prev => {
        return {...prev, ...newState}
      });
      setLikedByCurrent(prev => !prev);

    } else if (!likedByCurrent) {
      console.log("like!");
      const updatedLikes = likeState.likes + 1;
      const dataForUpload = {
        likes: updatedLikes,
        username: currentUserData.username,
      };
      updateDBLikes(`/api/teacardsinfo/liked/${cardID}`, dataForUpload);
      const newArr = [...likeState.likedCreations, cardID]
      const newState = { likes: updatedLikes, likedCreations: newArr }
      setLikeState(prev => {
        return {...prev, ...newState}
      })
      setLikedByCurrent(prev => !prev);
    } else {
      console.log("Like Frontend Error!");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg w-80 drop-shadow-md">
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
          <button className="text-sm" onClick={handleLikeClick}>👍</button>
          <span onClick={handleLikeClick} className="text-sm"> Likes: {!!currentUserData ? likeState?.likes : info.likes} </span>
        </div>
        <div className="text-right text-sm w-max">
          Created By: {info.createdBy}
        </div>
      </span>
      <div>{likedByCurrent ? "you liked this!" : "you haven't liked this!" }</div>
    </div>
  );
};

export default Card;
