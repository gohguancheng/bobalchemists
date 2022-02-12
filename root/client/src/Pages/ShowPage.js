import React, { forwardRef } from "react";
import Button from "../components/Reusables/Button";

const ShowPage = () => {
  return (
    <div className="flex">
      <div className="container inline-block w-1/3 h-screen">
        <img
          src="https://image.shutterstock.com/image-vector/cute-boba-bubble-green-tea-600w-793882456.jpg"
          alt="bbt"
        />
      </div>
      <div className="container inline-block w-2/3 h-screen">
        <div className="container mx-auto w-5/6 h-screen p-20 text-center justify-around">
          <h1>Caramel Milk Tea Delight</h1>
          <p>
            Classic milk tea with a dash of caramel to bring some delight to
            your day!
          </p>
          <div>
            <h1>Ingredients</h1>
            <p>Base:</p>
            <p>Flavouring:</p>
            <p>Toppings:</p>
          </div>
          <div>
            <p>👍 Likes</p>
            <p>Creator:</p>
            <Button color="primary">Edit</Button>
            <Button color="danger">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
