import React from "react";
import FilterSection from "./FilterSection";
import { ingredientList } from "./sideBarFilterData.js"

const FiltersContainer = () => {
  const filterContainerDisplay = ingredientList.map(e=><FilterSection subsection={e} />);

  return <div className='flex flex-col px-12'>
      <div className="text-xl font-bold" > Ingredient Filter: </div>
      {filterContainerDisplay}
  </div>;
};

export default FiltersContainer;
