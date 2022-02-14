import React from "react";
import IngredientSelection from "../components/CreatePage/IngredientSelection";
import AvailableIngredients from "../components/CreatePage/AvailableIngredients";

const CreatePage = () => {
  return (
    <div className="flex">
      <div className="container inline-block w-1/4 h-screen relative">
        {/* Put BASE here so it will appear above CUP but below TOPPING */}
        <img
          className="absolute"
          src="https://drive.google.com/uc?export=view&id=1KULwHaygOZFVPkRnzVkYj4zItod4AZhn"
          alt="milk tea"
        />
        {/* Put TOPPING here so it will appear above BASE */}
        <img
          className="absolute"
          src="https://drive.google.com/uc?export=view&id=1pgEENjWjQldeA95EyXCXcemZeaNKbMs2"
          alt="grass jelly"
        />
        {/* Put CUP here so it will appear below BASE and TOPPING */}
        <img
          src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
          alt="cup"
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
