import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext } from "./Components/AppContext";
import SignUp from "./Components/SignUp";
import Login from "./Components/login"; // Make sure it's correctly imported
import Home from "./Components/Home";

function App() {
  const [action, setAction] = useState("Login");

  return (
  //  <AppContext.Provider value={{ action, setAction }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
   // </AppContext.Provider>
  );
}

export default App;
