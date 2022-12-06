import React from "react";

const displayReadyImg = (imgUrl, element) => {
  return imgUrl ? element : null;
};

const CustomImage = ({ chosenIngredients }) => {
  return (
    <div className="container w-1/4 h-1/3 relative bg-lightblue rounded-full drop-shadow-md">
      {/* Put BASE here */}
      {displayReadyImg(
        chosenIngredients?.Bases?.img,
        <img
          className="absolute"
          src={chosenIngredients?.Bases?.img}
          alt="base"
        />
      )}
      {/* Put TOPPING here*/}
      {chosenIngredients?.Toppings?.map((topping) => {
        return <img className="absolute" src={topping?.img} alt="topping(s)" />;
      })}
      {/* Put FLAVOURING here */}
      {displayReadyImg(
        chosenIngredients?.Flavourings?.img,
        <img
          className="absolute"
          src={chosenIngredients?.Flavourings?.img}
          alt="flavouring"
        />
      )}
      <img
        src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
        alt="cup"
        className="w-full"
      />
    </div>
  );
};

export default CustomImage;
