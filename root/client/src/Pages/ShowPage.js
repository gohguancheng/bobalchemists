import React, { useEffect, useState, useRef, Fragment } from "react";
import Button from "../components/Reusables/Button";
import CreatedImage from "../components/CreatePage/CreatedImage";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Alert from "../components/Reusables/Alert";

const ShowPage = ({ currentUsername }) => {
  const [card, setCard] = useState({});
  const [rightsToEdit, setRightsToEdit] = useState(false);
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);

  const { id } = useParams();
  console.log(card);
  useEffect(async () => {
    await axios.get(`/api/teacardsinfo/show/${id}`).then((res) => {
      setCard(res?.data?.data);
    });
  }, []);

  useEffect(() => {
    if (!!currentUsername && !!card?.createdBy) {
      if (currentUsername === card.createdBy) {
        console.log("valid user!");
        setRightsToEdit(true);
      }
    }
  }, [card]);

  const handleEditButtonClick = () => {
    console.log("edit button clicked");
    // redirect user to the "create page"
    navigate(`/edit/${id}`);
    // "create page" should have fields populated with 'card' details
  };

  const handleDeleteButtonClick = async () => {
    console.log("delete button clicked");
    setAlertOpen(true);
    // deletes card from database
    // await axios.delete(`/api/teacardsinfo/delete/${id}`);
    // navigate("/");
  };

  return (
    <div className="flex text-gray-700">
      <Alert alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
      <CreatedImage info={card} />
      <div className="container inline-block w-2/3 h-screen font-normal">
        <div className="container mx-auto w-5/6 h-screen p-20 text-center justify-around">
          <div className="bg-white rounded-lg drop-shadow-lg p-3 pb-3">
            <h1 className="text-2xl py-5">{card?.name}</h1>
            <p className="py-5">{card?.description}</p>
            <div className="py-5">
              <h1>Ingredients</h1>
              <p>Base: {card?.base?.name}</p>
              <p>Flavouring: {card?.flavour?.name}</p>
              <p>Toppings: {card?.toppings?.map((e) => e.name).join(", ")}</p>
            </div>
            <div>
              <p className="w-1/3 inline-block">👍 {card?.likes} Likes</p>
              <p className="w-1/3 inline-block">Creator: {card?.createdBy}</p>
              {rightsToEdit ? (
                <div>
                  <Button
                    color="primary"
                    onClick={() => handleEditButtonClick()}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => handleDeleteButtonClick()}
                  >
                    Delete
                  </Button>
                </div>
              ) : !currentUsername ? (
                <div>
                  <span className="text-xs">
                    {" "}
                    For creators, log in for more functions.
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
