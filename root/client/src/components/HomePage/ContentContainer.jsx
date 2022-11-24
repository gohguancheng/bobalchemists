import React, { useEffect, useState } from "react";
import FiltersContainer from "./FiltersContainer";
import Gallery from "./Gallery";
import Logo from "../Reusables/Logo";
import Button from "../Reusables/Button";
import close from "../../images/close.svg";

const ContentContainer = ({ currentUserData }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex w-full h-full bg-lighterpink text-gray-700">
      <div
        className={`${
          showFilter
            ? "absolute z-10 inset-0 bg-white overflow-hidden"
            : "hidden"
        } md:relative md:bg-transparent md:block md:max-w-1/4 md:h-full`}
      >
        <div className={`${showFilter ? "flex justify-end" : ""} md:hidden`}>
          <img
            src={close}
            className="cursor-pointer m-[10px]"
            onClick={() => setShowFilter(false)}
          />
        </div>
        <FiltersContainer
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          showFilter={showFilter}
        />
      </div>
      <div className="flex-1 h-full max-h-full w-full flex flex-col">
        <div className="sticky">
          <div className="flex justify-center items-end mb-[5px] md:mb-[10px]">
            <Logo />
            <h1 className="text-2xl md:text-5xl font-black font-logo">
              BOBAlchemist
            </h1>
          </div>
          <>
            <span className="hidden md:flex justify-center gap-[10px] max-w-full overflow-x-auto text-xs md:text-sm pb-[20px]">
              <Button color="regular">Popular</Button>
              <Button color="regular">Recently added</Button>
            </span>
            <span className="md:hidden flex justify-center max-w-full overflow-x-auto text-xs pt-[10px] pb-[20px]">
              <Button color="regular" onClick={() => setShowFilter(true)}>
                Filters
              </Button>
            </span>
          </>
          <hr className="border-t-[1px] border-purple mx-[15px]" />
        </div>

        <div className="flex-1 h-full relative">
          <div className="absolute inset-0 py-[10px]">
            <div className="overflow-y-auto h-full max-h-full">
              <Gallery
                currentUserData={currentUserData}
                selectedFilters={selectedFilters}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
