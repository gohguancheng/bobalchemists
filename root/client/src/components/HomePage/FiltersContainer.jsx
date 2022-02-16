import React, { useState } from "react";
import FilterSection from "./FilterSection";
const categoryList = ["Bases","Toppings","Flavours"];

const FiltersContainer = (  {selectedFilters, setSelectedFilters} ) => {
  
  const filterContainerDisplay = categoryList.map(e=><FilterSection key={e} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} category={e} />);

  return <div className='flex flex-col pl-8'>
      <div className="text-lg font-bold" > Ingredients Filter: </div>
      {filterContainerDisplay}
  </div>;
};

export default FiltersContainer;
