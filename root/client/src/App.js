const axios = require("axios").default;
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Reusables/Navbar";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import LoginPage from "./Pages/LoginPage";
import ShowPage from "./Pages/ShowPage";
import EditPage from "./Pages/EditPage";
import SearchResultPage from "./Pages/SearchResultPage";
//* import pages here and plugin pages as components inside retun below

async () => fetch("/api/sessions/authcheck").then((data) => data.json());

function App() {
  const [session, setSession] = useState({});
  const [noSessionFound, setNoSessionFound] = useState(true);

  useEffect(async () => {
    const response = await (async () =>
      axios.get("/api/sessions/authcheck").then(({ data }) => data))();
    // console.log("useEffect: ", response);
    if (!!response.session.currentUser) {
      console.log("session found");
      setSession(response.session);
      setNoSessionFound(false);
    }
  }, [noSessionFound]);

  return (
    <div className="App font-sans h-full w-full">
      <Navbar currentUser={session?.currentUser} setSession={setSession} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/create"
          element={
            <CreatePage
              currentUsername={session?.currentUser?.username}
              setNoSessionFound={setNoSessionFound}
            />
          }
        />
        <Route path="/login" element={<LoginPage setSession={setSession} />} />
        <Route
          path="/show/:id"
          element={
            <ShowPage currentUsername={session?.currentUser?.username} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditPage
              currentUsername={session?.currentUser?.username}
              setNoSessionFound={setNoSessionFound}
            />
          }
        />
        <Route path="/results" element={<SearchResultPage />} />
        {/* <Route path="/TEMPLATE" element={COMPONENT} /> */}
      </Routes>
    </div>
  );
}

export default App;
