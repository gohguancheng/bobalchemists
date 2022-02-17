import React, { useState } from 'react';
const axios = require("axios").default

const submitIngredient = async (selected, input) => {
    return axios.post(`/api/ingredients/new/${selected}`, input, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then(({data})=>data);
}


const Form = ( {selection, setDone } ) => {
    const [nameInput, setNameInput] = useState();
    const [baseTypeInput, setBaseTypeInput] = useState();
    const [colorInput, setColorInput] = useState();
    const [imageInput, setImageInput] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = { name: nameInput, baseType: baseTypeInput, color: colorInput, img: imageInput };
        let response = await submitIngredient(selection, credentials);
        console.log("response:", response);
        setDone(prev => !prev);
    };
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    <div className="rounded-md shadow-sm -space-y-px">
      <div className="p-4">
        NEW ingredient to add to:{" "}
        <span className="text-white bg-gray-600 font-bold">
          {selection}
        </span>
      </div>
      <div>
        <input
          id="name"
          name="name"
          type="text"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="new ingredient name"
          onChange={(e) => setNameInput(e.target.value)}
        />
                    <input
          id="baseType"
          name="baseType"
          type="text"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="new ingredient base type"
          onChange={(e) => setBaseTypeInput(e.target.value)}
        />
                    <input
          id="color"
          name="color"
          type="text"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="new ingredient html color code"
          onChange={(e) => setColorInput(e.target.value)}
        />
                    <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="new ingredient image url"
          onChange={(e) => setImageInput(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 mb-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Submit
        </button>
      </div>
    </div>
  </form>
  )
}

export default Form