import React, { useEffect, useState } from "react";

const axios = require("axios").default;
const ingredientURL = {
  Bases: "/api/ingredients/base",
  Toppings: "/api/ingredients/toppings",
  Flavours: "/api/ingredients/flavours",
};

const FilterSection = ({ category, selectedFilters, setSelectedFilters }) => {
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(null);

  const getIngredientData = async (path) => {
    return axios.get(path).then(({ data }) => data);
  };

  useEffect(async () => {
    const response = await getIngredientData(ingredientURL[category]);

    const dataName = response.data.map((e) => ({
      name: e.name,
      ingredientId: e._id,
      type: category,
    }));
    //const dataName = response.data.map((e) => e.name);
    setOptions(dataName);
  }, []);

  const handleChange = (filter) => {
    let isRadio = filter.type !== "Toppings";
    let index = selectedFilters.findIndex(
      (ele) => ele.ingredientId === filter.ingredientId
    );

    isRadio ? setIsOpen(null) : null;

    if (index < 0) {
      if (isRadio) {
        setSelectedFilters((prev) =>
          prev.filter(({ type }) => filter.type !== type)
        );
      }
      setSelectedFilters((prev) => [...prev, filter]);
    } else {
      setSelectedFilters((prev) => prev.filter((_, i) => index !== i));
    }
  };

  const filters = options.map((e) => {
    return (
      <div
        key={e.ingredientId}
        onClick={() => handleChange({ ...e, id: e.ingredientId })}
        className={`button px-[10px] py-[5px] text-xs  md:text-sm ${
          selectedFilters.map(({ id }) => id).includes(e.ingredientId)
            ? "bg-lightpink text-gray-700"
            : ""
        }`}
      >
        {e.name}
      </div>
    );
  });

  const displayedFilters = selectedFilters
    .filter(({ type }) => type === category)
    .map((element) => element.name)
    .join(" + ");

  return (
    <div>
      <div className="text-purple my-1 text-sm md:text-lg font-semibold text-center">
        {category}
      </div>
      <div className="relative w-[100px] md:w-[200px] max-w-[100px] md:max-w-[250px]">
        <div
          className={`bg-white text-gray-700 md:min-h-[35px] px-[10px] py-[5px] rounded-[5px] button truncate text-center text-xs md:text-sm`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {displayedFilters || "All"}
        </div>
        <div
          className={`absolute z-10 mt-[1px] bg-white w-full rounded-[10px] overflow-hidden ${
            isOpen ? "" : "hidden"
          }`}
        >
          {filters}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
