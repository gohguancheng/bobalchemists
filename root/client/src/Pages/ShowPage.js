import React, { useEffect, useState } from "react";
import Button from "../components/Reusables/Button";
import CreatedImage from "../components/CreatePage/CreatedImage";
import axios from "axios";

const ShowPage = () => {
  const [card, setCard] = useState({});

  useEffect(async () => {
    await axios.get("/api/teacardsinfo").then((res) => {
      console.log("res", res);
      // setCard();
    });
  }, []);

  return (
    <div className="flex bg-lighterpink text-gray-700">
      <CreatedImage />
      <div className="container inline-block w-2/3 h-screen font-normal">
        <div className="container mx-auto w-5/6 h-screen p-20 text-center justify-around">
          <h1 className="text-2xl py-5">Caramel Milk Tea Delight</h1>
          <p className="py-5">
            Classic milk tea with a dash of caramel to bring some delight to
            your day!
          </p>
          <div className="py-5">
            <h1>Ingredients</h1>
            <p>Base:</p>
            <p>Flavouring:</p>
            <p>Toppings:</p>
          </div>
          <div>
            <p className="w-1/3 inline-block">👍 Likes</p>
            <p className="w-1/3 inline-block">Creator:</p>
            <Button color="primary">Edit</Button>
            <Button color="danger">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
