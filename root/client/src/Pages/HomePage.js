import React, { useEffect } from "react";
import ContentContainer from "../components/HomePage/ContentContainer";

const HomePage = ({ currentUserData }) => {
  useEffect(() => (document.title = "BobAlchemist - Boba Ideas"));
  return <ContentContainer currentUserData={currentUserData} />;
};

export default HomePage;
