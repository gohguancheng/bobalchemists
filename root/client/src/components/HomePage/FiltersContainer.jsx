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
      } flex flex-col h-full max-h-full overflow-y-auto px-[20px] py-[40px]`}
    >
      <div>
        <div className="text-purple text-lg font-bold"> Ingredients Filter: </div>
        {filterContainerDisplay}
      </div>
    </div>
  );
};

export default FiltersContainer;
