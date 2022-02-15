import React, { useState } from "react";
import ToggleButton from "../Reusables/ToggleButton";

const FilterSection = ({ subsection }) => {
  const [filterOptions, setFilterOptions] = useState([]);

  console.log("selected: ", filterOptions);

  

  const nameOfSubsection = Object.keys(subsection)[0];
  const ingredientsArray = subsection[nameOfSubsection];
  const ingredientsDisplay = ingredientsArray.map((e) => (
    <ToggleButton
      key={e}
      label={e}
      selection={filterOptions}
      setSelection={setFilterOptions}
    />
  ));

  return (
    <div className="my-2">
      <div className="my-1 text-lg font-bold">{nameOfSubsection}</div>
      <div>{ingredientsDisplay}</div>
    </div>
  );
};

export default FilterSection;
