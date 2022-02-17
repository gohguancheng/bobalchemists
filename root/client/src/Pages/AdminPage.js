import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios").default;

const getIngredients = () => {
  return axios.get("/api/ingredients/").then((data) => data);
};

const AdminPage = ({ currentUser }) => {
  const [selection, setSelection] = useState("bases");
  const [ingredients, setIngredients] = useState([]);
  const [isAdmin, setIsAdmin] =useState(true);
  const [input, setInput] = useState();
  const navigate = useNavigate();

  useEffect(async () => {
    let {
      data: { data },
    } = await getIngredients();
    console.log(data);
    setIngredients(data[selection]);
    
  }, [selection]);

  const handleSubmit = () => {

  };

  useEffect(()=>{
    const admincheck =
    (currentUser?.username === "guanch") ||
    (currentUser?.username === "rizal") ||
    (currentUser?.username === "danning");
    if (!admincheck) setIsAdmin(prev=>false);
    if (!isAdmin) navigate('/');
  })

  
  const cat = ["bases", "flavourings", "toppings"];
  return (
    <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-lighterpink text-gray-700 font-normal">
      <div className="flex">
        <div className="m-4">
          {cat.map((e, i) => (
            <button
              key={i}
              className="w-max flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setSelection(e)}
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
                      className="w-max mr-2 flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {element.name}
                    </button>
                    <button
                    className="w-max flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    onClick={async () => {
                       const update = ingredients.filter((ele)=> ele!==e);
                       setIngredients(update);
                       const deleteRes = await axios.post(`api/ingredients/delete/${element._id}`, {cat: cat}, {
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json;charset=UTF-8",
                        },
                      })
                      .then(({ data }) => data);
                      console.log(deleteRes)
                    }
                }
                    
                    >Delete</button>
                </span>
            );
          })}
        </div>
      </div>
      <form className="mt-8 space-y-6" onSubmit={(selection) => handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="p-4">
            Category to add to:{" "}
            <span className="text-white bg-gray-600 font-bold">
              {selection}
            </span>
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="new ingredient"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
