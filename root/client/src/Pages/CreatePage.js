import React from "react";
import IngredientSelection from "../components/CreatePage/IngredientSelection";
import AvailableIngredients from "../components/CreatePage/AvailableIngredients";

const CreatePage = () => {
  return (
    <div className="flex">
      <div className="container inline-block w-1/4 h-screen">
        <img
          src="https://image.shutterstock.com/image-vector/cute-boba-bubble-green-tea-600w-793882456.jpg"
          alt="bbt"
        />
      </div>
      <div className="container w-3/4 h-screen flex">
        <IngredientSelection />
        <AvailableIngredients />
      </div>
    </div>
  );
};

export default CreatePage;
