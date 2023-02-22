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
    <div className="w-full h-full bg-lighterpink text-gray-700">
      <div className="h-full max-h-full w-full flex flex-col">
        <div className="sticky z-10">
          <div className="flex justify-center items-end mb-[5px] md:mb-[10px]">
            <Logo />
            <h1 className="text-2xl md:text-5xl font-black font-logo">
              BOBAlchemist
            </h1>
          </div>
          <>
            <span className="hidden md:flex justify-center gap-[10px] max-w-full overflow-x-auto text-xs md:text-sm pb-[20px]">
              {/* <Button color="regular">Popular</Button>
              <Button color="regular">Recently added</Button> */}
            </span>
            {/* <span className="md:hidden flex justify-center max-w-full overflow-x-auto text-xs pt-[10px] pb-[20px]">
              <Button color="regular" onClick={() => setShowFilter(true)}>
                Filters
              </Button>
            </span> */}
          </>
          <hr className="border-t-[1px] border-purple mx-[15px]" />
          <div className={`relative bg-transparent block max-w-1/4 pt-[10px] pb-[20px]`}>
            <FiltersContainer
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              showFilter={showFilter}
            />
          </div>
        </div>

        <div className="flex-1 h-full relative z-0">
          <div className="absolute inset-0 pb-[10px]">
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
