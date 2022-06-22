import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Admin/Form";
import EditForm from "../components/Admin/EditForm";
const axios = require("axios").default;

const getIngredients = () => {
  return axios.get("/api/ingredients/").then((data) => data);
};

const AdminPage = ({ currentUser }) => {
  const [selection, setSelection] = useState("bases");
  const [ingredients, setIngredients] = useState([]);
  const [selectedSub, setSelectedSub] = useState();
  const [isAdmin, setIsAdmin] =useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [done, setDone] = useState(false);
  
  const navigate = useNavigate();

  useEffect(async () => {
    let {
      data: { data },
    } = await getIngredients();
    setIngredients(data[selection]);
    
  }, [selection, isEditMode, done]);

  useEffect(()=>{
    const admincheck =
    (currentUser?.username === "guanch") ||
    (currentUser?.username === "rizal") ||
    (currentUser?.username === "danning");

    if (!!currentUser && !admincheck) setIsAdmin(prev=>false);
    if (!isAdmin) navigate('/');
  }, [currentUser])

  const handleDelete = async (id) => {
  const deleteRes = await axios.delete(`/api/ingredients/delete/${id}/${selection}`).then(({ data }) => data);
   setDone(prev => !prev);
  }

  
  const cat = ["bases", "flavourings", "toppings"];
  return (
    <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-lighterpink text-gray-700 font-normal">
      <div className="text-lg">Purple button click to display its current ingredients (Blue).</div>
      <div className="text-lg">Purple button then Blue button then fill in form below to EDIT.</div>
      <div className="text-lg">Purple button then Green NEW button to add ingredient to the category.</div>
      <div className="text-lg">Red button deletes corresponding ingredient.</div>
      <div className="flex">
        <div className="m-4">
          {cat.map((e, i) => (
            <button
              key={i}
              className="w-max flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                setSelection(e)
                setIsEditMode(false);
              }
              }
            >
              {e}
            </button>
          ))}
        </div>
        <div className="m-4">
          {ingredients?.map((element, i) => {
            return (
                <span key={i} className="flex">
                    <button
                      onClick={(e)=>{
                          setSelectedSub(element)
                          setIsEditMode(true);
                      }
                    }
                      className="w-max mr-2 flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {element.name}
                    </button>
                    <button
                    className="w-max flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={()=>{
                      const update = ingredients.filter((ele)=> ele!==element);
                      setIngredients(update);
                      handleDelete(element._id);
                    }}
                    
                    >Delete</button>
                </span>
            );
          })}
        </div>
      </div>
      <button
      onClick={()=>setIsEditMode(false)}
                      className="w-max flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      New
                    </button>
    {isEditMode ? <EditForm selection={selection} selectedSub={selectedSub} setIsEditMode={setIsEditMode} /> : <Form setDone={setDone} selection={selection} />}
    </div>

  );
};

export default AdminPage;
