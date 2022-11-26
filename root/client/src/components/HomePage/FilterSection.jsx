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

    const dataName = response.data.map((e) => ({
      name: e.name, 
      ingredientId: e._id,
      type: category}));
    //const dataName = response.data.map((e) => e.name);
    setOptions(dataName);
  }, []);

  const ingredientsDisplay = options.map((e) => (
    <ToggleButton
      key={e.ingredientId}
      id={e.ingredientId}
      category={e.type}
      label={e.name}
      selection={selectedFilters}
      setSelection={setSelectedFilters}
      input={e.type === 'Toppings' ? "checkbox" : "radio"}
    />
  ));

  return (
    <div className="my-2">
      <div className="text-purple my-1 text-lg font-bold">{category}</div>
      <div>{ingredientsDisplay}</div>
    </div>
  );
};

export default FilterSection;
