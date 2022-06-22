import React, { useState } from "react";
import FiltersContainer from "./FiltersContainer";
import Gallery from "./Gallery";
import Logo from "../Reusables/Logo";
import Button from "../Reusables/Button";

const ContentContainer = ( {currentUserData} ) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  return (
    <div className="h-full w-full grid grid-rows-5 grid-cols-5 font-normal">
      <div className="pt-12 col-start-1 col-end-2 row-start-1 row-end-6">
        <FiltersContainer
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="col-start-2 col-end-5 row-start-1 row-end-2 flex flex-col">
        <div className="basis-5/6 flex justify-center items-center">
          <h1 className="h-max w-max shrink text-5xl font-black font-logo md:flex md:2xl md:shrink">
            <Logo />
            BOBAlchemist
          </h1>
        </div>
        <span className="basis-1/6 flex flex-row items-center">
          <Button color="regular">Popular</Button>
          <Button color="regular">Recently added</Button>
        </span>
      </div>
      <div className="col-start=5 col-end-6 row-start-1 row-end-2"></div>
      <div className="col-start-2 row-start-2 col-end-6 row-end-6">
        <Gallery currentUserData={currentUserData} selectedFilters={selectedFilters}/>
      </div>
    </div>
  );
};

export default ContentContainer;
