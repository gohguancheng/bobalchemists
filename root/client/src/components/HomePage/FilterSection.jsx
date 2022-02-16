import React, { useEffect, useState } from "react";
import ToggleButton from "../Reusables/ToggleButton";
const axios = require("axios").default;
const ingredientURL = {
  Bases: "/api/ingredients/base",
  Toppings: "/api/ingredients/toppings",
  Flavours: "/api/ingredients/flavours",
};

const FilterSection = ({ category, selectedFilters, setSelectedFilters }) => {
  const [options, setOptions] = useState([]);

  const getIngredientData = async (path) => {
    return axios.get(path).then(({ data }) => data);
  };

  useEffect(async () => {
    const response = await getIngredientData(ingredientURL[category]);
    const dataName = response.data.map((e) => e.name);
    setOptions(dataName);
  }, []);

  const ingredientsDisplay = options.map((e) => (
    <ToggleButton
      key={e}
      label={e}
      selection={selectedFilters}
      setSelection={setSelectedFilters}
      category={category}
    />
  ));

  return (
    <div className="my-2">
      <div className="my-1 text-lg font-bold">{category}</div>
      <div>{ingredientsDisplay}</div>
    </div>
  );
};

export default FilterSection;
