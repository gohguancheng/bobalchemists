const axios = require('axios').default;
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Reusables/Navbar";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import LoginPage from "./Pages/LoginPage";
import ShowPage from "./Pages/ShowPage";
import SearchResultPage from "./Pages/SearchResultPage";
//* import pages here and plugin pages as components inside retun below

async () => fetch('/api/sessions/authcheck').then(data => data.json());

function App() {
  const [ session, setSession ] = useState({});

  useEffect(() => {
    const response = (async () => axios.get('/api/sessions/authcheck').then(({data}) => data))();
    // console.log("useEffect!")
    if (response.currentUser !== undefined) {
      setSession({...session, ...response});
    }
  }, [session])

  return (
    <div className="App font-sans h-full w-full">
      <Navbar currentUser={session?.currentUser} setSession={setSession} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginPage setSession={setSession} />} />
        <Route path="/show/:id" element={<ShowPage />} />
        <Route path="/results" element={<SearchResultPage />} />
        {/* <Route path="/TEMPLATE" element={COMPONENT} /> */}
      </Routes>
    </div>
  );
}

export default App;
