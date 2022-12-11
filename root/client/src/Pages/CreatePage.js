import React, { useState, useEffect } from "react";
import IngredientSelection from "../components/CreatePage/IngredientSelection";
import AvailableIngredients from "../components/CreatePage/AvailableIngredients";
import CreatedImage from "../components/CreatePage/CreatedImage";
import CustomImage from "../components/CreatePage/CustomImage";
import axios from "axios";

const CreatePage = ({ currentUsername, setNoSessionFound }) => {
  useEffect(() => (document.title = "BobAlchemist - Create recipe"));
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
    <div className="flex flex-col lg:flex-row w-full h-full font-normal overflow-y-auto lg:overflow-hidden">
      <div className="w-full lg:w-1/3 h-1/2 lg:h-full">
        <CustomImage chosenIngredients={chosenIngredients} />
      </div>
      <div className="w-full h-full lg:w-1/3 text-center justify-around px-[20px] lg:px-[10px]">
        <IngredientSelection
          category={category}
          setCategory={setCategory}
          chosenIngredients={chosenIngredients}
          username={currentUsername}
          setNoSessionFound={setNoSessionFound}
        />
      </div>
      <div className="lg:w-1/3 lg:h-full">
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
