import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Reusables/Navbar";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import LoginPage from "./Pages/LoginPage";
import ShowPage from "./Pages/ShowPage";
import SearchResultPage from "./Pages/SearchResultPage";
//* import pages here and plugin pages as components inside retun below

function App() {
  return (
    <div className="App font-sans h-full w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/show/:id" element={<ShowPage />} />
        <Route path="/results" element={<SearchResultPage />} />
        {/* <Route path="/TEMPLATE" element={COMPONENT} /> */}
      </Routes>
    </div>
  );
}

export default App;
