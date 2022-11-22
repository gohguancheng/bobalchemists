import React, { useState } from "react";
import FiltersContainer from "./FiltersContainer";
import Gallery from "./Gallery";
import Logo from "../Reusables/Logo";
import Button from "../Reusables/Button";

const ContentContainer = ({ currentUserData }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  return (
    <div className="flex-1 flex w-full bg-lighterpink text-gray-700">
      <div className="hidden md:block max-w-1/4 h-full px-[20px] py-[40px]">
        <FiltersContainer
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="flex-1 h-full max-h-full w-full flex flex-col">
        <div className="">
          <div className="flex justify-center items-end">
            <Logo />
            <h1 className="text-2xl sm:text-5xl font-black font-logo pb-[5px] sm:pb-[10px]">
              BOBAlchemist
            </h1>
          </div>
          <span className="flex justify-center max-w-full overflow-x-auto text-sm py-[5px] sm:py-[10px]">
            <Button color="regular">Popular</Button>
            <Button color="regular">Recently added</Button>
          </span>
        </div>
        <div className="flex-1 h-full relative">
          <div className="absolute inset-0 overflow-y-auto">
            <Gallery
              currentUserData={currentUserData}
              selectedFilters={selectedFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
