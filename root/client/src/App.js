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
import AdminPage from "./Pages/AdminPage";
//* import pages here and plugin pages as components inside retun below

function App() {
  const [session, setSession] = useState({});
  const [noSessionFound, setNoSessionFound] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    if (!session.currentUser) {
      const response = await (async () =>
        axios.get("/api/sessions/authcheck").then(({ data }) => data))();

      if (!!response.session.currentUser) {
        setSession(response.session);
        setNoSessionFound(false);
      }
    }
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div className="absolute inset-0 bg-lighterpink" />
  ) : (
    <div className="App font-sans h-screen w-screen overflow-hidden flex flex-col">
      <Navbar currentUser={session?.currentUser} setSession={setSession} />
      <div className="flex-1 relative">
        <div className="absolute inset-0">
          <Routes>
            <Route
              path="/"
              element={<HomePage currentUserData={session?.currentUser} />}
            />
            <Route
              path="/create"
              element={
                <CreatePage
                  currentUsername={session?.currentUser?.username}
                  setNoSessionFound={setNoSessionFound}
                />
              }
            />
            <Route
              path="/user"
              element={<LoginPage setSession={setSession} />}
            />
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
            <Route
              path="/admin"
              element={<AdminPage currentUser={session?.currentUser} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
