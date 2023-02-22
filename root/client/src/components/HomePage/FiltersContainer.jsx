import React, { useState } from "react";
import FilterSection from "./FilterSection";
const categoryList = ["Bases", "Toppings", "Flavours"];

const FiltersContainer = ({
  selectedFilters,
  setSelectedFilters,
  showFilter,
}) => {
  const filterContainerDisplay = categoryList.map((e) => (
    <FilterSection
      key={e}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
      category={e}
    />
  ));

  return (
    <div
      className={`${
        showFilter ? "items-center" : ""
      } flex flex-col px-[20px]`}
    >
      <div>
        <div className="text-purple text-lg font-bold text-center">
          Ingredients
        </div>
        <div className="flex justify-around max-w-[800px] mx-auto">
          {filterContainerDisplay}
        </div>
      </div>
    </div>
  );
};

export default FiltersContainer;
