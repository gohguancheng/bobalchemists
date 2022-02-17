import React from "react";
import ContentContainer from "../components/HomePage/ContentContainer";

const HomePage = ({ currentUserData }) => {
  return (

    <div className="w-screen bg-lighterpink text-gray-700">
      <ContentContainer currentUserData={currentUserData} />

    </div>
  );
};

export default HomePage;
