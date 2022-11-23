import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreatedImage from "../CreatePage/CreatedImage";
const axios = require("axios").default;

const updateDBLikes = async (url, uploadedData) => {
  const response = axios.put(url, uploadedData);
};

const getUserLikes = async (userID) => {
  return axios
    .get(`/api/userdata/creations/${userID}`)
    .then(({ data }) => data);
};

const Card = ({ info, currentUserData }) => {
  const cardID = info._id;

  const [likeState, setLikeState] = useState({
    likes: "loading",
    likedCreations: "loading",
  });
  const [likedByCurrent, setLikedByCurrent] = useState();
  const [user, setUser] = useState();

  //set up local user data --> for page refreshes
  useEffect(async () => {
    if (!currentUserData) {
      return;
    }
    let { data } = await getUserLikes(currentUserData?._id);
    setUser(data);
    if (!!info) {
      const dbShowsLiked = data?.likedCreations?.includes(info?._id);
      setLikedByCurrent(dbShowsLiked);
    }
  }, [currentUserData, info]);

  //set up local 'like' states
  useEffect(() => {
    if (!!user) {
      const state = {
        likes: info?.likes,
        likedCreations: user?.likedCreations,
      };
      setLikeState((prev) => {
        return { ...prev, ...state };
      });
    }
  }, [user]);

  const handleLikeClick = async () => {
    if (!currentUserData || !info) {
      return;
    }
    if (likedByCurrent) {
      const updatedLikes = likeState.likes - 1;
      const dataForUpload = {
        likes: updatedLikes,
        username: currentUserData.username,
      };
      await updateDBLikes(`/api/teacardsinfo/unliked/${cardID}`, dataForUpload);
      const newArr = likeState.likedCreations.filter((e) => e !== cardID);
      const newState = { likes: updatedLikes, likedCreations: newArr };
      setLikeState((prev) => {
        return { ...prev, ...newState };
      });
      setLikedByCurrent((prev) => !prev);
    } else if (!likedByCurrent) {
      const updatedLikes = likeState.likes + 1;
      const dataForUpload = {
        likes: updatedLikes,
        username: currentUserData.username,
      };
      await updateDBLikes(`/api/teacardsinfo/liked/${cardID}`, dataForUpload);
      const newArr = [...likeState.likedCreations, cardID];
      const newState = { likes: updatedLikes, likedCreations: newArr };
      setLikeState((prev) => {
        return { ...prev, ...newState };
      });
      setLikedByCurrent((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-[20px] border-[1px] border-transparent px-[20px] py-[40px] hover:shadow-lg">
      <Link key={info._id} to={`/show/${info._id}`}>
        <div className="container">
          <div className="h-[80px] w-[80px] mx-auto mb-[20px]">
            <CreatedImage info={info} />
          </div>
        </div>
      </Link>
      <div className="flex-1 flex flex-col justify-evenly w-[200px]">
        <p className="text-center text-md font-semibold">{info.name}</p>

        <span className="flex justify-between items-center">
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

        <div className="text-sm text-center">
          {!currentUserData ? (
            <span>
              <Link
                to="/user?form=login"
                className="hover:underline font-semibold"
              >
                Sign In
              </Link>{" "}
              to vote!
            </span>
          ) : likedByCurrent ? (
            "Liked!"
          ) : (
            "Haven't like!"
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
