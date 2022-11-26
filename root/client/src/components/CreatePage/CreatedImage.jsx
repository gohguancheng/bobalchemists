import React from "react";

const CreatedImage = ({ info }) => {
  return (
    <div className="container h-full relative bg-lightblue rounded-full drop-shadow-md">
      <div>
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
    </div>
  );
};

export default CreatedImage;
