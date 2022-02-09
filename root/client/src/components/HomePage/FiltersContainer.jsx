import React from "react";
import FilterSection from "./FilterSection";
import { ingredientList } from "./sideBarFilterData.js"

const FiltersContainer = () => {
  const filterContainerDisplay = ingredientList.map(e=><FilterSection key={Object.keys(e)[0]} subsection={e} />);

  return <div className='flex flex-col pl-8'>
      <div className="text-xl font-bold" > Ingredients Filter: </div>
      {filterContainerDisplay}
  </div>;
};

export default FiltersContainer;
