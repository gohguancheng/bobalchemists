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
  useEffect(async () => {
    await axios.get(`/api/teacardsinfo/show/${id}`).then((res) => {
      setCard(res?.data?.data);
    });
  }, []);

  useEffect(() => {
    document.title = card?.name ? `${card.name}` : "BobAlchemist";
    if (!!currentUsername && !!card?.createdBy) {
      if (currentUsername === card.createdBy) {
        setRightsToEdit(true);
      }
    }
  }, [card]);

  const handleEditButtonClick = () => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteButtonClick = async () => {
    setAlertOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center text-gray-700 h-full max-h-full overflow-y-auto md:overflow-hidden px-[20px]">
      <Alert alertOpen={alertOpen} setAlertOpen={setAlertOpen} />
      <CreatedImage
        info={card}
        containerClass="w-full md:w-1/2 h-[250px] md:h-full"
      />
      <div className="container w-full md:w-1/2 md:flex-grow flex items-center justify-center mb-[20px]">
        <div className="bg-white rounded-[20px] shadow-md px-[30px] py-[20px] min-w-[340px] text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">
            {card?.name}
          </h1>
          <p className="text-xs md:text-sm mb-5">{card?.description}</p>
          <div>
            <h1 className="md:text-lg font-semibold">Ingredients</h1>
            <div className="md:text-lg mb-8 flex flex-col items-center gap-[5px]">
              <p>Base: {card?.base?.name}</p>
              <p>Flavouring: {!card?.flavour ? "None" : card?.flavour?.name}</p>
              <p>
                Toppings:{" "}
                {card?.toppings?.length === 0
                  ? "None"
                  : card?.toppings?.map((e) => e.name).join(", ")}
              </p>
            </div>
            <div className="text-sm md:text-md">
              <p className="w-1/2 inline-block">❤️ {card?.likes} Likes</p>
              <p className="w-1/2 inline-block">Creator: {card?.createdBy}</p>
              {rightsToEdit ? (
                <div className="flex items-center justify-center gap-[10px] my-[10px]">
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
                <div className="my-[10px]">
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
