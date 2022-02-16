import React, { useEffect, useState } from "react";
import Button from "../components/Reusables/Button";
import CreatedImage from "../components/CreatePage/CreatedImage";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ShowPage = () => {
  const [card, setCard] = useState({});
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("id", id);

  useEffect(async () => {
    await axios.get(`/api/teacardsinfo/show/${id}`).then((res) => {
      console.log("res", res.data.data);
      setCard(res?.data?.data);
      console.log("Card data", card);
    });
  }, []);

  const handleEdit = () => {
    console.log("edit button clicked");
    // redirect user to the "create page"
    navigate("/create");
    // "create page" should have fields populated with 'card' details
  };

  return (
    <div className="flex bg-lighterpink text-gray-700">
      <CreatedImage />
      <div className="container inline-block w-2/3 h-screen font-normal">
        <div className="container mx-auto w-5/6 h-screen p-20 text-center justify-around">
          <h1 className="text-2xl py-5">{card.name}</h1>
          <p className="py-5">{card.description}</p>
          <div className="py-5">
            <h1>Ingredients</h1>
            <p>Base: {card?.base?.name}</p>
            <p>Flavouring: {card?.flavour?.name}</p>
            <p>Toppings:{card?.toppings}</p>
          </div>
          <div>
            <p className="w-1/3 inline-block">👍 Likes</p>
            <p className="w-1/3 inline-block">Creator: {card?.createdBy}</p>
            <Button color="primary" onClick={() => handleEdit()}>
              Edit
            </Button>
            <Button color="danger">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
