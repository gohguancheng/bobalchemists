import React, { createContext, useState, useEffect } from "react";
import IngredientSelection from "../components/CreatePage/IngredientSelection";
import AvailableIngredients from "../components/CreatePage/AvailableIngredients";
import CreatedImage from "../components/CreatePage/CreatedImage";
import axios from "axios";

const CreatePage = ({ currentUsername, setNoSessionFound }) => {
  // Create states
  const [ingredientsList, setIngredientsList] = useState({});
  const [category, setCategory] = useState("Bases");
  const [chosenIngredients, setChosenIngredients] = useState({
    Bases: null,
    Flavourings: null,
    Toppings: [],
  });

  // Make API calls
  useEffect(async () => {
    await axios
      .all([
        axios.get("/api/ingredients/base"),
        axios.get("/api/ingredients/flavours"),
        axios.get("/api/ingredients/toppings"),
      ])
      .then(
        ([
          { data: baseData },
          { data: flavouringData },
          { data: toppingsData },
        ]) => {
          const fetched = {
            Bases: baseData.data,
            Flavourings: flavouringData.data,
            Toppings: toppingsData.data,
          };
          setIngredientsList({ ...ingredientsList, ...fetched });
        }
      );
  }, []);

  return (
    <div className="flex bg-lighterpink font-normal">
      <CreatedImage />
      <div className="container w-3/4 h-screen flex">
        <IngredientSelection
          category={category}
          setCategory={setCategory}
          chosenIngredients={chosenIngredients}
          username={currentUsername}
          setNoSessionFound={setNoSessionFound}
        />
        <AvailableIngredients
          ingredientsList={ingredientsList}
          chosenIngredients={chosenIngredients}
          setChosenIngredients={setChosenIngredients}
          category={category}
        />
      </div>
    </div>
  );
};

export default CreatePage;
