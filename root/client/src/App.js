import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Reusables/Navbar';
import HomePage from './Pages/HomePage';
//* import pages here and plugin pages as components inside retun below

function App() {
  return (
    <div className="App font-sans h-screen w-screen">
      <Navbar />
      <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/TEMPLATE" element={COMPONENT} /> */}
      </Routes>
    </div>
  );
}

export default App;
