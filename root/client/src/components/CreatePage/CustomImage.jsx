import React from "react";

const displayReadyImg = (imgUrl, element) => {
  return imgUrl ? element : null;
};

const CustomImage = ({ chosenIngredients }) => {
  return (
    <div className="w-full h-full">
      <div className="relative inset-0 h-full w-full">
        {/* Put BASE here */}
        {chosenIngredients?.Bases?.img ? (
          <img
            className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
            src={chosenIngredients?.Bases?.img}
            alt="base"
          />
        ) : null}
        {/* Put TOPPING here*/}
        {chosenIngredients?.Toppings?.map((topping) => {
          return (
            <img
              className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
              src={topping?.img}
              alt="topping(s)"
            />
          );
        })}
        {/* Put FLAVOURING here */}
        {chosenIngredients?.Flavourings?.img ? (
          <img
            className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
            src={chosenIngredients?.Flavourings?.img}
            alt="flavouring"
          />
        ) : null}
        <img
          src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
          alt="cup"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default CustomImage;
