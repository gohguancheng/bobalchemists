import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreatedImage from "../CreatePage/CreatedImage";
const axios = require("axios").default;

const updateDBLikes = async (url, uploadedData) => {
  const response = axios.put(url, uploadedData);
  console.log("update likes API:", response);
};

const getUserLikes = async (userID) => {
  return axios.get(`/api/userdata/creations/${userID}`).then(({data})=>data);
  
}

const Card = ({ info, currentUserData }) => {
  const cardID = info._id;
  //if (!!currentUserData) console.log("we have user data!", )
  const [likeState, setLikeState] = useState({likes: "loading", likedCreations: "loading"});
  const [likedByCurrent, setLikedByCurrent] = useState();
  const [user, setUser] = useState();

  //console.log("liked by me? -> ", likeState, likedByCurrent);
  // console.log("currentuser", currentUserData)
  //console.log("frontend: ", likeState?.likedCreations)
  
  //set up local user data --> for page refreshes
  useEffect(async ()=>{
    if (!currentUserData) {return};
    let { data } = await getUserLikes(currentUserData?._id);
    setUser(data);
    if (!!info) {
      //  console.log(" is this in liked array in database? ", currentUserData?.likedCreations?.includes(info?._id))
        const dbShowsLiked = data?.likedCreations?.includes(info?._id);
        setLikedByCurrent(dbShowsLiked);
      }
  }, [currentUserData, info])
  
  //set up local 'like' states
  useEffect(()=>{
    if(!!user) {
      const state = { likes: info?.likes, likedCreations: user?.likedCreations };
      setLikeState(prev => {
        return {...prev, ...state}
      })
    }
  }, [user])

  const handleLikeClick = async () => {
    console.log("clicked!");
    if (!currentUserData || !info) {
      console.log("login to like!");
      return;
    }
    if (likedByCurrent) {
      console.log("unlike!");
      const updatedLikes = likeState.likes - 1;
      const dataForUpload = {
        likes: updatedLikes,
        username: currentUserData.username,
      };

      await updateDBLikes(`/api/teacardsinfo/unliked/${cardID}`, dataForUpload);
      const newArr = likeState.likedCreations.filter(e => e !== cardID);
      const newState = { likes: updatedLikes, likedCreations: newArr }
      setLikeState(prev => {
        return {...prev, ...newState}

      });
      setLikedByCurrent((prev) => !prev);
    } else if (!likedByCurrent) {
      console.log("like!");
      const updatedLikes = likeState.likes + 1;
      const dataForUpload = {
        likes: updatedLikes,
        username: currentUserData.username,
      };

      await updateDBLikes(`/api/teacardsinfo/liked/${cardID}`, dataForUpload);
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
    <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-lg w-80 drop-shadow-md hover:border-purple hover:border-2 hover:drop-shadow-md">
      <Link key={info._id} to={`/show/${info._id}`}>
        <div className="container mx-auto w-80">
          <div className="container mx-auto flex justify-center p-2">
            <CreatedImage info={info} />
          </div>
          <p className="h-max text-center text-md font-semibold">{info.name}</p>
        </div>
      </Link>
      <span className="flex flex-row gap-4 justify-between items-center">
        <div className="border-rounded cursor-pointer text-left w-max">
          <button className="text-sm" onClick={handleLikeClick}>
            👍
          </button>
          <span onClick={handleLikeClick} className="text-sm">
            {" "}
            Likes: {!!currentUserData ? likeState?.likes : info.likes}{" "}
          </span>
        </div>
        <div className="text-right text-sm w-max">
          Created By: {info.createdBy}
        </div>
      </span>

      <div className="text-sm">{!currentUserData ? "Log in to add 'likes'." : (likedByCurrent ? "Liked!" : "Haven't like!") }</div>
    </div>
  );
};

export default Card;
