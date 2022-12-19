import ContentLoader from "react-content-loader";
import { useState, useEffect } from "react";

const CreatedImage = ({ info, containerClass }) => {
  const [isLoaded, setIsLoaded] = useState(null);
  const [imgCount, setImgCount] = useState(null);
  const [loadCount, setLoadCount] = useState(0);
  useEffect(() => {
    let count = 1; // initalise with cup
    if (info?.base) {
      count++;
    }
    if (info?.flavour) {
      count++;
    }
    if (info?.toppings) {
      count = count + info.toppings.length;
    }
    setImgCount(count);
  }, [info]);

  useEffect(() => {
    if (loadCount === imgCount) {
      setIsLoaded(true);
    }
  }, [loadCount]);

  const addToLoaded = () => {
    setLoadCount((prev) => prev + 1);
  };

  return (
    <div className={`container max-h-full max-w-full ${containerClass} `}>
      {/* Put BASE here */}
      <div
        className={`relative h-full w-full ${isLoaded ? "block" : "hidden"}`}
      >
        <img
          className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
          src={info?.base?.img}
          alt="base"
          onLoad={addToLoaded}
        />

        {/* Put TOPPING here*/}
        {info?.toppings?.map((topping, id) => {
          return (
            <img
              className="absolute h-full w-full inset-0 z-[1] object-contain object-center"
              src={topping?.img}
              alt="topping(s)"
              key={id}
              onLoad={addToLoaded}
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
            onLoad={addToLoaded}
          />
        ) : null}
        {/* Put CUP here */}
        <img
          className="relative h-full w-full inset-0 object-contain object-center"
          src="https://drive.google.com/uc?export=view&id=1DIvoIC4JTWbeTzwiouiikbe81dmu8VcE"
          alt="cup"
          onLoad={addToLoaded}
        />
      </div>
      <div
        className={`relative h-full w-full flex items-center justify-center ${
          isLoaded ? "hidden" : "block"
        }`}
      >
        <ContentLoader
          speed={1}
          width={100}
          height={100}
          viewBox="0 0 100 100"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="50" cy="50" r="50" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default CreatedImage;
