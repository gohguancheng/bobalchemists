import React, { createContext, useState, useEffect } from "react";
import IngredientSelection from "../components/CreatePage/IngredientSelection";
import AvailableIngredients from "../components/CreatePage/AvailableIngredients";
import CreatedImage from "../components/CreatePage/CreatedImage";
import axios from "axios";

const CreatePage = () => {
  // Create states
  const [allBases, setAllBases] = useState([]);
  const [allFlavourings, setAllFlavourings] = useState([]);
  const [allToppings, setAllToppings] = useState([]);
  const [category, setCategory] = useState("");
  const [chosenIngredients, setChosenIngredients] = useState({});

  // Make API calls
  useEffect(async () => {
    await axios
      .all([
        axios.get("api/ingredients/base"),
        axios.get("api/ingredients/flavours"),
        axios.get("api/ingredients/toppings"),
      ])
      .then((resArr) => {
        console.log("resArr", resArr);
        setAllBases(resArr[0]);
        setAllFlavourings(resArr[1]);
        setAllToppings(resArr[2]);
      });
  }, []);

  // Put all states in one object
  const allData = {
    allBases: allBases,
    allFlavourings: allFlavourings,
    allToppings: allToppings,
    category: category,
    chosenIngredients: chosenIngredients,
  };

  return (
    <div className="flex">
      <CreatedImage />
      <div className="container w-3/4 h-screen flex">
        <IngredientSelection allData={allData}/>
        <AvailableIngredients />
      </div>
    </div>
  );
};

export default CreatePage;
