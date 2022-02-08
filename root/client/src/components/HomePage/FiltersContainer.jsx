import React from "react";
import FilterSection from "./FilterSection";

const FiltersContainer = () => {
  const ingredientList = [
    { milk: ["normal", "skimmed"] },
    { toppings: ["boba", "aloe vera", "coconut shavings"] },
  ];
  const filterContainerDisplay = ingredientList.map(e=><FilterSection subsection={e} />)

  return <div className='flex flex-col p-4'>
      <div className="" > Filters: </div>
      {filterContainerDisplay}
  </div>;
};

export default FiltersContainer;
