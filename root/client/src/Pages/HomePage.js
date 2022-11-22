import React from "react";
import ContentContainer from "../components/HomePage/ContentContainer";

const HomePage = ({ currentUserData }) => {
  return (

      <ContentContainer currentUserData={currentUserData} />
  );
};

export default HomePage;
