import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  //set up local user data --> for page refreshes
  useEffect(async () => {
    if (!currentUserData || !info) {
      return;
    }
    if (!!info) {
      let { data } = await getUserLikes(currentUserData?._id);
      if (data) {
        setUser(() => data);
        const dbShowsLiked = data?.likedCreations?.includes(info?._id);
        setLikedByCurrent(dbShowsLiked);
      }
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

  const handleLikeClick = async (e) => {
    e.stopPropagation();

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

  const goToCard = (id) => {
    navigate(`/show/${id}`);
  };

  return (
    <div
      className="flex flex-col bg-white rounded-[20px] px-[20px] py-[40px] hover:shadow-lg relative overflow-hidden cursor-pointer"
      onClick={() => goToCard(info._id)}
    >
      <div className={`absolute inset-0 z-10 ${hover ? "" : "hidden"}`}>
        <div className="absolute inset-0 bg-purple opacity-95"></div>
        <div className="absolute bottom-0 h-1/2 w-full px-[20px]">
          <p className="text-md font-semibold text-white text-center">{info.description}</p>
        </div>
      </div>

      <div
        className="h-[100px] w-[100px] bg-white rounded-full overflow-hidden mx-auto mb-[10px] relative inset-0 z-[10]"
        onMouseEnter={() => setHover(() => true)}
        onMouseLeave={() => setHover(() => false)}
      >
        <CreatedImage info={info} />
      </div>

      <div className="flex-1 flex flex-col gap-[10px] justify-evenly w-[200px] relative z-[5]">
        <div className="min-h-[75px]">
          <p className="text-center text-md font-semibold">{info.name}</p>
        </div>
        <div className="text-sm text-center">By: {info.createdBy}</div>

        <div
          className={`w-[80px] mx-auto border-[0.5px] border-lighterpink rounded-[5px] cursor-pointer text-left px-[5px] py-[1px] flex items-center justify-center gap-[5px] ${
            likedByCurrent ? "bg-lighterpink" : "bg-[#F5F5F5]"
          }`}
          onClick={handleLikeClick}
        >
          <button className="text-sm">❤️</button>
          <span className="text-sm">
            {" "}
            {!!currentUserData ? likeState?.likes : info.likes}{" "}
          </span>
        </div>

        <div className="text-sm text-center">
          {!currentUserData ? (
            <span className="h-[20px]">
              <Link
                onClick={(e) => e.stopPropagation()}
                to="/user?form=login"
                className="hover:underline font-semibold"
              >
                Sign In
              </Link>{" "}
              to vote!
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
