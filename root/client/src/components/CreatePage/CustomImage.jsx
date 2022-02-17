import React from "react";

const CustomImage = ({ chosenIngredients }) => {
  console.log("chosenIngredients", chosenIngredients);
  return (
    <div className="container inline-block w-1/4 h-1/3 relative bg-lightgray rounded-full drop-shadow-md">
      {/* Put BASE here */}
      <img
        className="absolute"
        src={chosenIngredients?.Bases?.img}
        alt="base"
      />
      {/* Put TOPPING here*/}
      <img className="absolute" src="" alt="topping(s)" />
      {/* Put FLAVOURING here */}
      <img
        className="absolute"
        src={chosenIngredients?.Flavourings?.img}
        alt="flavouring"
      />
      {/* Put CUP here */}
      <img
        src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
        alt="cup"
      />
    </div>
  );
};

export default CustomImage;
