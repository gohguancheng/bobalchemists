import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PlusButton from "./PlusButton";
const axios = require("axios").default;

const postCreation = async (credentials) => {
  return axios
    .post("/api/teacardsinfo/newCard", credentials, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
    .then(({ data }) => data);
};

const IngredientSelection = ({
  setCategory,
  chosenIngredients,
  username,
  setNoSessionFound,
  currentSelection,
}) => {
  const [nameInput, setNameInput] = useState();
  const [descriptionInput, setDescriptionInput] = useState();
  const [formData, setFormData] = useState({});
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const navigate = useNavigate();
  console.log("formData: ", formData);
  // console.log("currentsel: ", currentSelection)

  useEffect(() => {
    const updates = {
      name: nameInput,
      createdBy: username,
      description: descriptionInput,
      base: chosenIngredients?.Bases?.id,
      flavour: chosenIngredients?.Flavourings?.id,
      toppings: chosenIngredients?.Toppings?.map((e) => e.id),
      likes: 0,
    };
    if (!!currentSelection) {
      if (!updates.name) updates.name = currentSelection.name;
      if (!updates.description) updates.description = currentSelection.description;
    }
    setFormData(prev => {
      return { ...prev, ...updates }
    });
  }, [nameInput, descriptionInput, chosenIngredients, username]);

  useEffect(() => {
    if (
      formData.base !== undefined &&
      formData.flavour !== undefined &&
      formData.name
    ) {
      setReadyToSubmit(true);
    } else {
      setReadyToSubmit(false);
    }
  }, [formData]);

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
    if (!username) {
      setNoSessionFound(true);
      console.log("no session detected!");
      navigate("/login");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postCreation(formData);
    navigate(`/show/${response.data._id}`)
    console.log(response);
  };
  
  // console.log(currentSelection);

  return (
    <div className="container mx-auto h-screen w-1/2 text-center justify-around">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4">
        <h1 className="block w-full text-center text-grey-darkest mb-6">
          Create a Bubble Tea
        </h1>
        <form className="mb-4" action="/" method="post" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 uppercase font-bold text-lg text-grey-darkest"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border py-2 px-3 text-grey-darkest"
              type="text"
              name="name"
              id="name"
              defaultValue={
                !!currentSelection ? currentSelection.name : null
              }
              onChange={handleNameInput}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="mb-2 uppercase font-bold text-lg text-grey-darkest"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="border py-2 px-3 text-grey-darkest"
              name="description"
              id="description"
              rows="3"
              defaultValue={
                !!currentSelection ? currentSelection.description : null
              }
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
          </div>
          <div className="flex flex-col container mx-auto items-center">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Base</label>
            <div className="p-1 text-sm">
              {chosenIngredients?.Bases?.name
                ? chosenIngredients?.Bases.name
                : null}
            </div>
            <PlusButton id={"Bases"} setCategory={setCategory} />
            <br />
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Flavouring</label>
            <div className="p-1 text-sm">
              {chosenIngredients?.Flavourings?.name
                ? chosenIngredients?.Flavourings.name
                : null}
            </div>
            <PlusButton id={"Flavourings"} setCategory={setCategory} />
            <br />
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest">Toppings</label>
            <div className="p-1 text-sm">
              {chosenIngredients?.Toppings
                ? chosenIngredients?.Toppings.map((e) => e.name).join(", ")
                : null}
            </div>
            <PlusButton id={"Toppings"} setCategory={setCategory} />
            <br />
          </div>
          {readyToSubmit ? (
            <input
              type="submit"
              value="Submit Creation"
              className="bg-blue-700 hover:bg-blue-500 text-white m-2 p-1 drop-shadow-2xl rounded"
            />
          ) : (
            <div className="p-1 text-sm">
              Ensure all fields are filled up / selected.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default IngredientSelection;
