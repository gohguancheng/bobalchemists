import React from "react";

const CreatedImage = ({ info }) => {
  console.log("info", info?.toppings);
  return (
    <div className="container inline-block w-1/4 h-1/3 relative bg-lightgray rounded-full drop-shadow-md">
      {/* Put BASE here */}
      <img className="absolute" src={info?.base?.img} alt="base" />

      {/* Put TOPPING here*/}
      {info?.toppings?.map((topping, id) => {
        return (
          <img
            className="absolute"
            src={topping?.img}
            alt="topping(s)"
            key={id}
          />
        );
      })}
      {/* Put FLAVOURING here */}
      {info?.flavour?.img &&
      info?.flavour?._id !== "620b2afdb98e26a5d939f8d8" ? (
        <img className="absolute" src={info?.flavour?.img} alt="flavouring" />
      ) : null}
      {/* Put CUP here */}
      <img
        src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
        alt="cup"
      />
    </div>
  );
};

export default CreatedImage;
