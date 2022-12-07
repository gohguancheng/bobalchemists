import React from "react";

const CreatedImage = ({ info, containerClass }) => {
  return (
    <div className={`container max-h-full max-w-full ${containerClass}`}>
      {/* Put BASE here */}
      <div className="relative h-full w-full">
        <img
          className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
          src={info?.base?.img}
          alt="base"
        />

        {/* Put TOPPING here*/}
        {info?.toppings?.map((topping, id) => {
          return (
            <img
              className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
              src={topping?.img}
              alt="topping(s)"
              key={id}
            />
          );
        })}
        {/* Put FLAVOURING here */}
        {info?.flavour?.img &&
        info?.flavour?._id !== "620b2afdb98e26a5d939f8d8" ? (
          <img
            className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
            src={info?.flavour?.img}
            alt="flavouring"
          />
        ) : null}
        {/* Put CUP here */}
        <img
          className="relative h-full w-full inset-0 object-contain object-center"
          src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
          alt="cup"
        />
      </div>
    </div>
  );
};

export default CreatedImage;
