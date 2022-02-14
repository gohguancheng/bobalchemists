import React from "react";
import IngredientSelection from "../components/CreatePage/IngredientSelection";
import AvailableIngredients from "../components/CreatePage/AvailableIngredients";
import CreatedImage from "../components/CreatePage/CreatedImage";

const CreatePage = () => {
  return (
    <div className="flex">
      <CreatedImage />
      <div className="container w-3/4 h-screen flex">
        <IngredientSelection />
        <AvailableIngredients />
      </div>
    </div>
  );
};

export default CreatePage;
